"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = __importDefault(require("./src/model/auth"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = __importDefault(require("passport-local"));
const LocalStrategy = passport_local_1.default.Strategy;
passport_1.default.use(new LocalStrategy((username, password, done) => {
    auth_1.default.findOne({ username }, (err, user) => {
        if (err)
            throw err;
        if (!user)
            return done(null, false);
        bcrypt_1.default.compare(password, user.password, (error, result) => {
            if (error)
                throw error;
            if (result === true) {
                return done(null, user);
            }
            else
                return done(null, false);
        });
    });
}));
passport_1.default.serializeUser((user, cb) => {
    cb(null, user.id);
}); // ~ creates cookie with user id and gives it to client
passport_1.default.deserializeUser((id, cb) => {
    console.log('id', id);
    auth_1.default.findOne({ _id: id }, (err, user) => {
        // const usernameInfo = {
        //   username: user.username
        // }
        // cb(err, usernameInfo)
        cb(err, user);
    });
}); // ~ takes cookie from client and tries to find info of the user assocaited to the cookie and sends "user" to client
// appearently cookies are taken care of in passport.
// in theory, the cookie is saved in the browser oppose to the application (react) itself.
exports.default = passport_1.default;
//# sourceMappingURL=passportConfig.js.map