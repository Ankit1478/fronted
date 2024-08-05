import { configureStore } from '@reduxjs/toolkit';

import storage from '@/lib/features/storage/storage';
import user from '@/lib/features/user/user';

export const makeStore = () => {
  return configureStore({
    reducer: {
      storage,
      user,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      serializableCheck: false,
    }),
  });
};