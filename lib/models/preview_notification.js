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
const notification_1 = require("./notification");
const model_1 = require("./model");
const notification_2 = require("../rest/notification");
class PreviewNotification extends model_1.Model {
    get id() {
        return this.id_str;
    }
    consume() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new notification_2.RestNotification(this.conf)).getUnreadAndConsume(this.id);
        });
    }
    get last_notification() {
        return this._last_notification;
    }
    set last_notification(l) {
        this._last_notification = new notification_1.Notification(l);
    }
}
exports.PreviewNotification = PreviewNotification;
