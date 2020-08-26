"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const port = 8080;
const defaultValues = { title: 'Hey', message: 'Portfolio CMS' };
app.use(cors_1.default());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    console.log(req.body);
});
app.post("/authenticate", (req, res) => {
    // if authenticated then modify database, else return 404
    console.log(req.body);
});
app.post("/changepassword", (req, res) => {
    // if authenticated then modify database, else return 404
    console.log(req.body);
});
// * connect to mongodb
// * encrypt password with hash
// * make first time signup possible
// * authenticate password and username && if true, return data, and give access to modify content
app.listen(port, () => console.log('server running', `running on localhost:${port}`));
//# sourceMappingURL=index.js.map