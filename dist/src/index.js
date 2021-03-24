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
const express_session_1 = __importDefault(require("express-session"));
require("../passportConfig");
const updateContent_1 = __importDefault(require("./routes/updateContent"));
const fetchContentDataLoginRouter_1 = __importDefault(require("./routes/fetchContentDataLoginRouter"));
const getContentRouter_1 = __importDefault(require("./routes/getContentRouter"));
const postCrystalParallaxRouter_1 = __importDefault(require("./routes/postCrystalParallaxRouter"));
const getCrystalParallaxRouter_1 = __importDefault(require("./routes/getCrystalParallaxRouter"));
const app = express_1.default();
const port = process.env.PORT || 8080;
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_session_1.default({
    secret: process.env.MONGO_URI,
    resave: false,
    saveUninitialized: false,
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use("/", register_1.default, login_1.default, changePassword_1.default, updateContent_1.default, fetchContentDataLoginRouter_1.default, getContentRouter_1.default, postCrystalParallaxRouter_1.default, getCrystalParallaxRouter_1.default);
mongoose_1.default.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose_1.default.connection
    .once("open", () => console.log("connection successful"))
    .on("error", (error) => console.log(error, "connection successful"));
app.listen(port, () => console.log("server running", `running on http://localhost:${port}`));
//# sourceMappingURL=index.js.map