import { configureStore } from "@reduxjs/toolkit";
import { reducer as employeesReducer } from "./slices/employeesSlice";
import { reducer as tasksReducer } from "./slices/tasksSlice";
import { reducer as epicReducer } from "./slices/epicSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
};
const reducer = combineReducers({
  employees: employeesReducer,
  tasks: tasksReducer,
  epic: epicReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
