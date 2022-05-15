import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./reducers/AuthReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import roomReducer from './slices/roomSlice';


const persistConfig = {
    key: "rootKey",
    storage
}

const persistedReducer = persistReducer(persistConfig, authReducer);
const rootReducer = combineReducers({ room: roomReducer });

const storeAuth = configureStore({
    reducer: {
        auth: persistedReducer,
        roomRed: rootReducer
    },
    devTools: true,
    middleware: [thunk]
});

const persistor = persistStore(storeAuth);

export { storeAuth, persistor };