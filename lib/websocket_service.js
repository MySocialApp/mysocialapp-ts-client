"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notification_1 = require("./models/notification");
const feed_1 = require("./models/feed");
const conversation_message_1 = require("./models/conversation_message");
const event_1 = require("./models/event");
const user_1 = require("./models/user");
var notificationType;
(function (notificationType) {
    notificationType["Feed"] = "FEED";
    notificationType["Comment"] = "COMMENT";
    notificationType["Like"] = "LIKE";
    notificationType["ConversationMessage"] = "CONVERSATION_MESSAGE";
    notificationType["UserMentionTag"] = "USER_MENTION_TAG";
    notificationType["NewEvent"] = "NEW_EVENT";
    notificationType["FriendRequest"] = "FRIEND_REQUEST";
    notificationType["Friend"] = "FRIEND";
})(notificationType = exports.notificationType || (exports.notificationType = {}));
class WebsocketService {
    constructor(session) {
        this.listeners = [];
        this.listenersByType = new Map();
        this.session = session;
    }
    connect() {
        const thisService = this;
        this.client = new WebSocket(this.session.clientService.configuration.websocketEndpointUrl + "/notification", [
            'Authorization' + this.session.clientService.configuration.token
        ]);
        this.client.onerror = function error(error) {
        };
        this.client.onopen = function open() {
        };
        this.client.onclose = function close() {
            // Auto reconnect
            thisService.connect();
        };
        this.client.onmessage = function message(message) {
            let j = JSON.parse(message.data);
            if (j) {
                let notif = new notification_1.Notification(j, thisService.session.clientService.configuration);
                for (let l of thisService.listeners) {
                    l(notif);
                }
                let listenerForType = thisService.listenersByType.get(notif.type);
                if (listenerForType !== undefined) {
                    for (let l of listenerForType) {
                        switch (notif.type) {
                            case notificationType.Feed:
                                l(new feed_1.Feed(notif.payload, thisService.session.clientService.configuration));
                                break;
                            case notificationType.UserMentionTag:
                                l(new feed_1.Feed(notif.payload, thisService.session.clientService.configuration));
                                break;
                            case notificationType.ConversationMessage:
                                l(new conversation_message_1.ConversationMessage(notif.payload, thisService.session.clientService.configuration));
                                break;
                            case notificationType.Like:
                                l(new feed_1.Feed(notif.payload, thisService.session.clientService.configuration));
                                break;
                            case notificationType.NewEvent:
                                l(new event_1.Event(notif.payload, thisService.session.clientService.configuration));
                                break;
                            case notificationType.Comment:
                                l(new feed_1.Feed(notif.payload, thisService.session.clientService.configuration));
                                break;
                            case notificationType.Friend:
                                l(new user_1.User(notif.payload, thisService.session.clientService.configuration));
                                break;
                            case notificationType.FriendRequest:
                                l(new user_1.User(notif.payload, thisService.session.clientService.configuration));
                                break;
                            default:
                                break;
                        }
                    }
                }
            }
        };
        return this;
    }
    close() {
        this.client.close();
    }
    onNotification(callback) {
        this.listeners.push(callback);
    }
    onMessageByType(callback, type) {
        let list = this.listenersByType.get(type);
        if (list === undefined) {
            list = [];
        }
        list.push(callback);
        this.listenersByType.set(type, list);
    }
    onComment(callback) {
        this.onMessageByType(callback, notificationType.Comment);
    }
    onLike(callback) {
        this.onMessageByType(callback, notificationType.Like);
    }
    onConversationMessage(callback) {
        this.onMessageByType(callback, notificationType.ConversationMessage);
    }
    onNewsFeed(callback) {
        this.onMessageByType(callback, notificationType.Feed);
    }
    onMention(callback) {
        this.onMessageByType(callback, notificationType.UserMentionTag);
    }
    onMentionComment(callback) {
        this.onMessageByType((object) => {
            if (object.type == 'Comment') {
                callback(object);
            }
        }, notificationType.UserMentionTag);
    }
    onEvent(callback) {
        this.onMessageByType(callback, notificationType.NewEvent);
    }
    onFriendRequest(callback) {
        this.onMessageByType(callback, notificationType.FriendRequest);
        this.onMessageByType(callback, notificationType.Friend);
    }
}
exports.WebsocketService = WebsocketService;
