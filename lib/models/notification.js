"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const model_1 = require("./model");
const notification_1 = require("../rest/notification");
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
        if (this._owner === undefined) {
            this._owner = this.payload['owner'] !== undefined ? new user_1.User(this.payload['owner'], this.conf) : null;
        }
        return this._owner;
    }
    get recipient_user_id() {
        return this.payload['owner'];
    }
    get recipient_device_id() {
        return this.payload['recipient_device_id'];
    }
    ack(n) {
        return __awaiter(this, void 0, void 0, function* () {
            return new notification_1.RestNotification(this.conf).ack(n);
        });
    }
}
exports.Notification = Notification;
