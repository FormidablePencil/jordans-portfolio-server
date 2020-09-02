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
const verifyCredentials_1 = __importDefault(require("../middleware/verifyCredentials"));
const content_1 = __importDefault(require("../model/content"));
const fetchContentDataLoginRouter = express_1.default.Router();
fetchContentDataLoginRouter.post('/contentdatalogin', verifyCredentials_1.default, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.credentials.username;
    content_1.default.findOne({ username }, (err, data) => {
        if (err)
            res.status(200).send({ message: 'No content under username' });
        else if (data)
            res.status(200).send(data);
    });
}));
exports.default = fetchContentDataLoginRouter;
//# sourceMappingURL=fetchContentDataLoginRouter.js.map