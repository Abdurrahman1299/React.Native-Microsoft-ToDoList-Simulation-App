import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducers";

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }),
  });
  let persistor = persistStore(store);
  return { store, persistor };
};
