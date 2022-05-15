import { configureStore, combineReducers } from '@reduxjs/toolkit';
import roomReducer from '../slices/roomSlice';


const rootReducer = combineReducers({
    room: roomReducer,
});

export const store = configureStore({
  reducer: rootReducer,
})