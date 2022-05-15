"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const ServerController_1 = __importDefault(require("./controller/ServerController"));
const UserController_1 = __importDefault(require("./controller/UserController"));
const BookingHistoryController_1 = __importDefault(require("./controller/BookingHistoryController"));
const TemporaryPasswordController_1 = __importDefault(require("./controller/TemporaryPasswordController"));
const MediaController_1 = __importDefault(require("./controller/MediaController"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
let app;
const PORT = process.env.NODE_ENV === "development" ? process.env.SERVER_PORT : 8080;
const create = () => {
    app = (0, express_1.default)();
    app.use(body_parser_1.default.json());
    app.use((0, cookie_parser_1.default)());
    app.use((0, cors_1.default)());
};
const run = () => {
    loadController();
    app.listen(PORT, () => {
        // tslint:disable-next-line:no-console
        console.log(`server is listening on PORT: ${PORT}`);
    });
};
const loadController = () => {
    ServerController_1.default.init(app);
    UserController_1.default.init(app);
    TemporaryPasswordController_1.default.init(app);
    BookingHistoryController_1.default.init(app);
    MediaController_1.default.init(app);
};
const apiService = {
    create,
    run
};
exports.default = apiService;
//# sourceMappingURL=apiServer.js.map