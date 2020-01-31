"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const stripe_1 = require("stripe");
function getStripeClient(_a) {
    var { apiKey, apiVersion = '2019-12-03', typescript = true } = _a, options = __rest(_a, ["apiKey", "apiVersion", "typescript"]);
    const stripeClient = new stripe_1.default(apiKey, Object.assign({ apiVersion,
        typescript }, options));
    return stripeClient;
}
exports.getStripeClient = getStripeClient;
//# sourceMappingURL=getStripeClient.js.map