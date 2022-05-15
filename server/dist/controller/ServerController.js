"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const URL_CONSTANTS_1 = require("../config/URL_CONSTANTS");
const ServerService_1 = require("../service/ServerService");
let server;
const init = (app) => {
    server = app;
    server.get(URL_CONSTANTS_1.SERVER_STATUS, ServerService_1.getServerStatus);
};
const ServerController = {
    init
};
exports.default = ServerController;
//# sourceMappingURL=ServerController.js.map