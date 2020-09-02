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
Object.defineProperty(exports, "__esModule", { value: true });
const ensureAuthenticated = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(yield req.isAuthenticated());
    if (yield req.isAuthenticated())
        return next(); // this method is from passport.
    res.status(400).send('please login to view this resource');
});
exports.default = ensureAuthenticated;
//# sourceMappingURL=authMiddleware.js.map