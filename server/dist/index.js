"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiServer_1 = __importDefault(require("./apiServer"));
const DatabaseService_1 = __importDefault(require("./service/DatabaseService"));
DatabaseService_1.default.init();
apiServer_1.default.create();
apiServer_1.default.run();
//# sourceMappingURL=index.js.map