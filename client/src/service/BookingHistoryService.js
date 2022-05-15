import { ApiGet, ApiPost, ApiUpdate } from "../config/Api";
import { GET_HISTORY_USER, DELETE_BOOKED_SEAT, GET_PAST_HISTORY_USER, GET_ROOM_DATA } from "../config/URL_Constante";


/**
 * @description getting all Booking History data from today on for the currently user
 * @param {object} user 
 * @param {func | null} callback 
 * @returns 
 */
const getHistoryFromToday = (user, callback) => ApiPost(GET_HISTORY_USER, user, callback);

/**
* @description getting all past Booking History data for the currently user
 * @param {object} user 
 * @param {func | null} callback 
 * @returns 
 */
const getPastHistory = (user, callback) => ApiPost(GET_PAST_HISTORY_USER, user, callback);

/**
 * @description sets a deleteflag with the given id to the bookedseat 
 * @param {Array} bookedSeatId 
 * @param {func | null} callback 
 * @returns 
 */
const deleteBookedSeat = (bookedSeatId, callback) => ApiUpdate(DELETE_BOOKED_SEAT, bookedSeatId, callback);

const getRoomData = (jsonObject, callback) => ApiGet(GET_ROOM_DATA, jsonObject, callback);

const BookingHistoryService = {
    getHistoryFromToday,
    deleteBookedSeat,
    getPastHistory,
    getRoomData
}

export default BookingHistoryService;