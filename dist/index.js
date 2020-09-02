"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const register_1 = __importDefault(require("./routes/register"));
const login_1 = __importDefault(require("./routes/login"));
const changePassword_1 = __importDefault(require("./routes/changePassword"));
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = __importDefault(require("passport-local"));
const app = express_1.default();
const port = 8080;
const defaultValues = { title: 'Hey', message: 'Portfolio CMS' };
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
// app.use(expressSession)
// import express from 'express'
// import UserModel from './src/model/auth'
// import bcrypt from 'bcrypt'
// import passport from 'passport'
// import passportLocal from "passport-local";
const LocalStrategy = passport_local_1.default.Strategy;
// ===== Authentication passport strategy
app.use('/', register_1.default, login_1.default, changePassword_1.default);
// * encrypt password with hash
// * make first time signup possible
// * authenticate password and username && if true, return data, and give access to modify content
mongoose_1.default.connect(process.env.MONGODB, {
    useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true
});
mongoose_1.default.connection
    .once('open', () => console.log('connection successful'))
    .on('error', (error) => console.log(error, 'connection successful'));
app.listen(port, () => console.log('server running', `running on http://localhost:${port}`));
//# sourceMappingURL=index.js.map