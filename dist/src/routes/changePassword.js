"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../model/auth"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const changePasswordRouter = express_1.default.Router();
changePasswordRouter.post("/forgotpassword", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // if authenticated then modify database, else return 404
    const { username, password } = req.body;
    const user = yield auth_1.default.findOne({ username });
    if (!(yield bcrypt_1.default.compare(user.password, password)))
        return res.status(404).send("incorrect password");
    const encryptedPw = bcrypt_1.default.hash(password, 10);
    try {
        user.password = encryptedPw;
        user.save();
    }
    catch (err) {
        res.status(404).send(err);
    }
}));
exports.default = changePasswordRouter;
//# sourceMappingURL=changePassword.js.map