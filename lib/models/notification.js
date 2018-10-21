"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const model_1 = require("./model");
class Notification extends model_1.Model {
    get root_url() {
        if (this.url === undefined) {
            return undefined;
        }
        let url = new URL(this.url);
        return url.protocol + '//' + url.host;
    }
    get id() {
        if (this.url === undefined) {
            return undefined;
        }
        return (new URL(this.url)).pathname.split("/")[2];
    }
    set id(v) {
        // nothing
    }
    get owner() {
        return this.payload['owner'] !== undefined ? new user_1.User(this.payload['user']) : null;
    }
    get recipient_user_id() {
        return this.payload['owner'];
    }
    get recipient_device_id() {
        return this.payload['recipient_device_id'];
    }
}
exports.Notification = Notification;
