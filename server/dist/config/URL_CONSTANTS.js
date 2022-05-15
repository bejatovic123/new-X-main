"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEST = exports.GET_VIDEO = exports.DELETE_BOOKED_SEAT = exports.GET_PAST_HISTORY_USER = exports.GET_HISTORY_USER = exports.SET_PASSWORD = exports.GET_USER = exports.SERVER_STATUS = void 0;
const BASE_URL = ``;
const PREFIX = `${BASE_URL}/api`;
/* SERVER*/
exports.SERVER_STATUS = `${PREFIX}/server`;
/* USER */
exports.GET_USER = `${PREFIX}/login/in`;
exports.SET_PASSWORD = `${PREFIX}/setPassword`;
/* BOOKING_HISTORY */
const BOOKING_HISTORY = `${PREFIX}/history`;
exports.GET_HISTORY_USER = `${BOOKING_HISTORY}/foruser`;
exports.GET_PAST_HISTORY_USER = `${BOOKING_HISTORY}/foruser/past`;
exports.DELETE_BOOKED_SEAT = `${BOOKING_HISTORY}/deleteseat`;
/* MEDIA */
const VIDEO = `${PREFIX}/video`;
exports.GET_VIDEO = `${VIDEO}/watch/:videoId`;
exports.TEST = `${VIDEO}/watch/vid.mp4`;
//# sourceMappingURL=URL_CONSTANTS.js.map