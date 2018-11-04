"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
class UserStat extends model_1.Model {
    set status(s) {
        this._status = new UserStatStatus(s, this.conf);
    }
    get status() {
        return this._status;
    }
}
exports.UserStat = UserStat;
class UserStatStatus extends model_1.Model {
}
exports.UserStatStatus = UserStatStatus;
var UserState;
(function (UserState) {
    UserState["Disabled"] = "DISABLED";
    UserState["Riding"] = "RIDING";
    UserState["Unknown"] = "UNKNOWN";
    UserState["Connected"] = "CONNECTED";
    UserState["Away"] = "AWAY";
    UserState["NotConnected"] = "NOT_CONNECTED";
})(UserState = exports.UserState || (exports.UserState = {}));
