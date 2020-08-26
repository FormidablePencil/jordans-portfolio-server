"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = new mongoose_1.default.Schema({
    userame: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    }
});
const authModal = mongoose_1.default.model('auth', Schema);
exports.default = authModal;
//# sourceMappingURL=auth.js.map