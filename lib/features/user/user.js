
import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAuth } from 'firebase/auth';
import { getDatabase, onValue, ref as databaseRef, get, set, update } from 'firebase/database';
// import { franc } from 'franc';
// import { iso6393 } from 'iso-639-3';
import _ from 'lodash';


const initialState = {
  user: {},
  unsubscribe: [],
};

export const updateUser = createAction('user/updateUser');

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (init = false, { dispatch, getState }) => {
    if (!getAuth().currentUser) {
      for (const unsubscribe of Object.values(getState().user.unsubscribe)) {
        unsubscribe();
      }

      return { unsubscribe: {} };
    };

    const userRef = databaseRef(getDatabase(), `users/${getAuth().currentUser.uid}`);
    const { plan, ...user } = await get(userRef).then((snapshot) => snapshot.val() || {}).catch(() => { });

    const chats = _.cloneDeep(user.chats);

    for (const [chatId, chat] of Object.entries(chats || {})) {
      for (const [storyId, story] of Object.entries(chat.stories || {})) {
        if (story.summary) delete chats[chatId].stories[storyId].summary;
        if (!story.answer) {
          if (story.title && story.story) {
            story.answer = `"${story.title}" ${story.story}`;
          }
          else {
            delete chats[chatId].stories[storyId];
          }
        }

        // if (storyId == Object.keys(chat.stories)[Object.keys(chat.stories).length - 1] && !chat.language) {
        //   const language = franc(story.answer);
        //   chat.language = iso6393.find((l) => l.iso6393 == language)?.name;
        // }
      }

      if (!Object.keys(chats[chatId].stories || {}).length) delete chats[chatId];
    }

    if (!_.isEqual(chats, user.chats)) await set(databaseRef(getDatabase(), `users/${getAuth().currentUser.uid}/chats`), chats);

    let unsubscribe;
    if (init) {
      unsubscribe = {};

      const chatsRef = databaseRef(getDatabase(), `users/${getAuth().currentUser.uid}/chats`);
      let chatInitialized = false;
      const chatsUnsubscribe = onValue(chatsRef, (snapshot) => {
        if (!chatInitialized) {
          chatInitialized = true;
          return;
        }

        dispatch(updateUser({ chats: snapshot.val() }));
      });
      unsubscribe.chats = chatsUnsubscribe;

      const planRef = databaseRef(getDatabase(), `users/${getAuth().currentUser.uid}/plan`);
      const planUnsubscribe = onValue(planRef, (snapshot) => dispatch(updateUser({
        plan: snapshot.val() || 'free',
        trialAvailable: !snapshot.val(),
      })));
      unsubscribe.plan = planUnsubscribe;

      const storyLimitRef = databaseRef(getDatabase(), `users/${getAuth().currentUser.uid}/storyLimit`);
      const storyLimitUnsubscribe = onValue(storyLimitRef, (snapshot) => dispatch(updateUser({ storyLimit: snapshot.val() || 0 })));
      unsubscribe.storyLimit = storyLimitUnsubscribe;
    }

    return { ...user, chats, unsubscribe };
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      if (!action.payload) return;

      const { isUpgraded, ...user } = state.user;

      state.user = { ...user, ...action.payload };

      if (!state.user.chats) state.user.chats = null;

      if (state.user.plan) state.user.isUpgraded = ['pro'].includes(state.user.plan);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        if (!action.payload) return;

        const { unsubscribe, ...user } = action.payload;

        const { isUpgraded, ...oldUser } = state.user;

        if (!state.user.chats) state.user.chats = null;

        state.user = { ...oldUser, ...user };
        if (state.user.plan) state.user.isUpgraded = ['pro'].includes(state.user.plan);

        if (action.payload.unsubscribe) state.unsubscribe = action.payload.unsubscribe;
      });
  },
});

export const getUser = (state) => state.user.user;

export default userSlice.reducer;