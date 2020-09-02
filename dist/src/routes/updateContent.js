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
const content_1 = __importDefault(require("../model/content"));
const constants_1 = require("../constants");
const verifyCredentials_1 = __importDefault(require("../middleware/verifyCredentials"));
const updateContentRouter = express_1.default.Router();
// route is now protected
updateContentRouter.post("/updatecontent", verifyCredentials_1.default, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, credentials: { username } } = req.body;
    if (!data)
        return constants_1.resInternalError(res, 'Internal err. No data to change to');
    let content = yield content_1.default.findOne({ username });
    if (content)
        content.data = data;
    else
        content = new content_1.default({ username, data });
    try {
        yield content.save();
        res.status(200).send({ message: 'Successfully updated' });
    }
    catch (err) {
        if (err)
            res.status(404).send(err);
    }
}));
exports.default = updateContentRouter;
//# sourceMappingURL=updateContent.js.map