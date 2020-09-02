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
const constants_1 = require("../constants");
const auth_1 = __importDefault(require("../model/auth"));
const constants_2 = require("../constants");
const bcrypt_1 = __importDefault(require("bcrypt"));
const verifyCredentials = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { credentials } = req.body;
    if (!credentials)
        return constants_1.resInternalError(res);
    else if (!credentials.password || !credentials.username)
        return constants_1.resInternalError(res, "Make sure you've entered in credentials");
    const user = yield auth_1.default.findOne({ username: credentials.username });
    if (!user)
        return constants_2.incorrectCredentials(res);
    yield bcrypt_1.default.compare(credentials.password, user.password, (err, same) => {
        if (err)
            res.status(400).send(err);
        else if (!same)
            constants_2.incorrectCredentials(res);
        else if (same)
            next();
    });
});
exports.default = verifyCredentials;
//# sourceMappingURL=verifyCredentials.js.map