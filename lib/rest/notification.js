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
const rest_1 = require("./rest");
const notification_ack_1 = require("../models/notification_ack");
const preview_notification_1 = require("../models/preview_notification");
class RestNotification extends rest_1.Rest {
    ack(notificationAck) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new notification_ack_1.NotificationAck(), "/notification/ack", notificationAck);
        });
    }
    listRead(page, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = "/notification/read?" + rest_1.Rest.encodeQueryData({ page: page, size: size });
            return this.conf.getList(new preview_notification_1.PreviewNotification(), path);
        });
    }
    listUnread(page, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = "/notification/unread?" + rest_1.Rest.encodeQueryData({ page: page, size: size });
            return this.conf.getList(new preview_notification_1.PreviewNotification(), path);
        });
    }
    listUnreadAndConsume(page, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = "/notification/unread/consume?" + rest_1.Rest.encodeQueryData({ page: page, size: size });
            return this.conf.getList(new preview_notification_1.PreviewNotification(), path);
        });
    }
    getUnreadAndConsume(notificationId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.get(new preview_notification_1.PreviewNotification(), rest_1.Rest.params("notification/{id}/unread/consume", { id: notificationId }));
        });
    }
}
exports.RestNotification = RestNotification;
