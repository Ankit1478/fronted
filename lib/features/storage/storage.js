
import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  audioBuffers: {},
  chats: {},
};

export const storageSlice = createSlice({
  name: 'storage',
  initialState,
  reducers: {
    setAudioBuffer: (state, action) => {
      state.audioBuffers = {
        ...state.audioBuffers,
        [action.payload[0]]: action.payload[1],
      };
    },
    setChat: (state, action) => {
      state.chats = {
        ...state.chats,
        [action.payload[0]]: action.payload[1]?.map((message) => {
          if (message.component) {
            const component = message.component;
            if (component._store?.validated) delete component._store;
            return { ...message, component };
          }
          else {
            return message;
          }
        }),
      };
    },
  },
});

export const {
  setAudioBuffer,
  setChat,
} = storageSlice.actions;

export const getAudioBuffers = (state) => state.storage.audioBuffers;
export const getChats = (state) => state.storage.chats;

export default storageSlice.reducer;