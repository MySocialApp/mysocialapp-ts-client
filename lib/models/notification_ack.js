"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_location_1 = require("./base_location");
const model_1 = require("./model");
class NotificationAck extends model_1.Model {
    constructor() {
        super(...arguments);
        this.advertising_id = null;
    }
    get location() {
        return this._location;
    }
    set location(a) {
        this._location = new base_location_1.BaseLocation(a);
    }
    setAppPlatform(v) {
        this.app_platform = v;
        return this;
    }
}
exports.NotificationAck = NotificationAck;
