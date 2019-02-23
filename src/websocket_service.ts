import {Session} from "./session";
import {Notification} from "./models/notification";
import {Feed} from "./models/feed";
import {ConversationMessage} from "./models/conversation_message";
import {Event} from "./models/event";
import {User} from "./models/user";

export enum notificationType {
    Feed = "FEED",
    Comment = "COMMENT",
    Like = "LIKE",
    ConversationMessage = "CONVERSATION_MESSAGE",
    UserMentionTag = "USER_MENTION_TAG",
    NewEvent = "NEW_EVENT",
    FriendRequest = "FRIEND_REQUEST",
    Friend = "FRIEND",
}

export class WebsocketService {
    private session: Session;
    private client: WebSocket;
    private listeners: any[] = [];
    private listenersByType = new Map();

    constructor(session: Session) {
        this.session = session;
    }

    connect(): WebsocketService {

        const thisService = this;

        this.client = new WebSocket(this.session.clientService.configuration.websocketEndpointUrl + "/notification", [
            'Authorization' + this.session.clientService.configuration.token
        ]);

        this.client.onerror = function error(error) {
        }

        this.client.onopen = function open() {
        }

        this.client.onclose = function close() {
            // Auto reconnect
            thisService.connect();
        }

        this.client.onmessage = function message(message) {
            let j = JSON.parse(message.data);
            if (j) {
                let notif = new Notification(j, thisService.session.clientService.configuration);
                for (let l of thisService.listeners) {
                    l(notif);
                }
                let listenerForType = thisService.listenersByType.get(notif.type);
                if (listenerForType !== undefined) {
                    for (let l of listenerForType) {
                        switch (notif.type) {
                            case notificationType.Feed:
                                l(new Feed(notif.payload, thisService.session.clientService.configuration));
                                break;
                            case notificationType.UserMentionTag:
                                l(new Feed(notif.payload, thisService.session.clientService.configuration));
                                break;
                            case notificationType.ConversationMessage:
                                l(new ConversationMessage(notif.payload, thisService.session.clientService.configuration));
                                break;
                            case notificationType.Like:
                                l(new Feed(notif.payload, thisService.session.clientService.configuration));
                                break;
                            case notificationType.NewEvent:
                                l(new Event(notif.payload, thisService.session.clientService.configuration));
                                break;
                            case notificationType.Comment:
                                l(new Feed(notif.payload, thisService.session.clientService.configuration));
                                break;
                            case notificationType.Friend:
                                l(new User(notif.payload, thisService.session.clientService.configuration));
                                break;
                            case notificationType.FriendRequest:
                                l(new User(notif.payload, thisService.session.clientService.configuration));
                                break;
                            default:
                                break;
                        }
                    }
                }
            }
        }

        return this;
    }

    close() {
        this.client.close();
    }

    onNotification(callback) {
        this.listeners.push(callback);
    }

    private onMessageByType(callback, type) {
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
        this.onMessageByType((object) =>{
            if(object.type == 'Comment') {
                callback(object)
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