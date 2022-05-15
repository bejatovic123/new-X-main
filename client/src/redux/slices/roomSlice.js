import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    room: {
        roomName: '',
        roomId: 0,
        seat: '',
        morning: false,
        afternoon: false,
        date: null
    }
}

export const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        setRoom: (state, action) => {
            state.room = action.payload;
        },
    },
})

export const { setRoom } = roomSlice.actions

export default roomSlice.reducer