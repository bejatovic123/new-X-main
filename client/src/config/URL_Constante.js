const BASE_PORT = "8080";
const BASE_HOST = `192.168.2.133`;
const BASE_URL = `http://${BASE_HOST}:${BASE_PORT}`;

const PREFIX = `${BASE_URL}/api`;

/* SERVER */
export const SERVER_STATUS = `${PREFIX}/server`;

/* USER */
export const GET_USER = `${PREFIX}/login/in`;
export const SET_PASSWORD = `${PREFIX}/setPassword`;

/* BOOKING_HISTORY */
const BOOKING_HISTORY = `${PREFIX}/history`;
export const GET_HISTORY_USER = `${BOOKING_HISTORY}/foruser`;
export const DELETE_BOOKED_SEAT = `${BOOKING_HISTORY}/deleteseat`;
export const GET_PAST_HISTORY_USER = `${BOOKING_HISTORY}/foruser/past`;
export const GET_ROOM_DATA = `${BOOKING_HISTORY}/roomdata`;

