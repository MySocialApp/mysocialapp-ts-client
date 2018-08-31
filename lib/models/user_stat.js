"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
class UserStat extends model_1.Model {
}
exports.UserStat = UserStat;
var UserStatus;
(function (UserStatus) {
    UserStatus["Disabled"] = "DISABLED";
    UserStatus["Riding"] = "RIDING";
    UserStatus["Unknown"] = "UNKNOWN";
    UserStatus["Connected"] = "CONNECTED";
    UserStatus["Away"] = "AWAY";
    UserStatus["NotConnected"] = "NOT_CONNECTED";
})(UserStatus = exports.UserStatus || (exports.UserStatus = {}));
