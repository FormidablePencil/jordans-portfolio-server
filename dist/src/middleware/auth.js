"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ensureAuthenticated = (req, res, next) => {
    if (req.authenticated()) { // this method is from passport.
        return next();
    }
    req.status(400).send('please login to view this resource');
    res.redirect('/login');
};
exports.default = ensureAuthenticated;
//# sourceMappingURL=auth.js.map