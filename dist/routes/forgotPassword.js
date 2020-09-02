"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const forgotPasswordRouter = express_1.default.Router();
forgotPasswordRouter.post("/forgotpassword", (req, res) => {
    // if authenticated then modify database, else return 404
    const { username, password } = req.body;
    console.log(req.body);
});
exports.default = forgotPasswordRouter;
//# sourceMappingURL=forgotPassword.js.map