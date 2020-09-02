"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resInternalError = exports.incorrectCredentials = void 0;
exports.incorrectCredentials = (res, mesg) => res.status(404).send({ message: mesg !== null && mesg !== void 0 ? mesg : 'Incorrect username or password' });
exports.resInternalError = (res, text) => res.status(500).send({ message: text !== null && text !== void 0 ? text : 'Oops. Something went wrong' });
//# sourceMappingURL=constants.js.map