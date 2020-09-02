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
const passport_1 = __importDefault(require("passport"));
const loginRouter = express_1.default.Router();
loginRouter.post("/login", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // const { authenticated, response } = await authenticateUser(req, res)
    // if (!authenticated) res.status(404).send(response)
    // res.status(202).send(accessToken, refreshToken)
    // send token that allows user to modify and pull data
    passport_1.default.authenticate("local", (err, user, info) => {
        if (err)
            throw err;
        if (!user)
            res.send("No User Exists");
        else {
            req.logIn(user, error => {
                if (error)
                    throw error;
                res.send("successfully authenticated");
                console.log(req.user);
            });
        }
    })(req, res, next);
}));
// interface authT {
//   authenticated: boolean, response: any
// }
const authenticateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // "local" as first parameter will automatically use the local strategy we've defined
    // const { username, password } = req.body
    // console.log(req.body)
    // const authData: any = await UserModel.findOne({ username })
    // if (!authData) return { authenticated: false, response: res.status(404).send() }
    // if (!await bcrypt.compare(password, authData.password)) return res.status(404).send('incorrect password')
    // return { authenticated: true, response: null }
});
exports.default = loginRouter;
//# sourceMappingURL=login.js.map