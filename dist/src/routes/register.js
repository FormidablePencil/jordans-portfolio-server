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
const bcrypt_1 = __importDefault(require("bcrypt"));
const auth_1 = __importDefault(require("../model/auth"));
const registerRouter = express_1.default.Router();
registerRouter.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const encryptedPassword = yield bcrypt_1.default.hash(password, 10);
    const userExists = yield auth_1.default.find();
    if (userExists.length !== 0)
        return res.status(400).send('userExists');
    const newUser = new auth_1.default({ username, password: encryptedPassword });
    try {
        yield newUser.save();
        res.status(200).send();
    }
    catch (err) {
        res.status(404).send(err);
    }
}));
exports.default = registerRouter;
//# sourceMappingURL=register.js.map