"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServerStatus = void 0;
const getServerStatus = (action) => {
    // action.res.status(HTTP_STATUS.HTTP_OK);
    action.res.send({ state: "okay" });
};
exports.getServerStatus = getServerStatus;
//# sourceMappingURL=ServerService.js.map