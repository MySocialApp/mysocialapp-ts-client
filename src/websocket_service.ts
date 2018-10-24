import {Session} from "./session";
import {Notification} from "./models/notification";
import {client as WebSocketClient, connection} from 'websocket';
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
    private client: WebSocketClient;
    private connection: connection;
    private listeners: any[] = [];
    private listenersByType = new Map();

    constructor(session: Session) {
        this.session = session;
    }

    connect(): WebsocketService {
        this.client = new WebSocketClient();

        this.client.on('connectFailed', (error) => {
            console.log('Connect Error: ' + error.toString());
        });


        this.client.on('connect', (connection) => {
            this.connection = connection;
            console.log('WebSocket Client Connected');
            this.connection.on('error', (error) => {
                console.log("Connection Error: " + error.toString());
            });
            this.connection.on('close', () => {
                console.log('echo-protocol Connection Closed');
            });
            this.connection.on('message', (message) => {
                if (message.type === 'utf8') {
                }
                let j = JSON.parse(message.utf8Data);
                if (j) {
                    let notif = new Notification(j, this.session.clientService.configuration);
                    for (let l of this.listeners) {
                        l(notif);
                    }
                    let listenerForType = this.listenersByType.get(notif.type);
                    if (listenerForType !== undefined) {
                        for (let l of listenerForType) {
                            switch (notif.type) {
                                case notificationType.Feed:
                                    l(new Feed(notif.payload, this.session.clientService.configuration));
                                    break;
                                case notificationType.UserMentionTag:
                                    l(new Feed(notif.payload, this.session.clientService.configuration));
                                    break;
                                case notificationType.ConversationMessage:
                                    l(new ConversationMessage(notif.payload, this.session.clientService.configuration));
                                    break;
                                case notificationType.Like:
                                    l(new Feed(notif.payload, this.session.clientService.configuration));
                                    break;
                                case notificationType.NewEvent:
                                    l(new Event(notif.payload, this.session.clientService.configuration));
                                    break;
                                case notificationType.Comment:
                                    l(new Feed(notif.payload, this.session.clientService.configuration));
                                    break;
                                case notificationType.Friend:
                                    l(new User(notif.payload, this.session.clientService.configuration));
                                    break;
                                case notificationType.FriendRequest:
                                    l(new User(notif.payload, this.session.clientService.configuration));
                                    break;
                                default:
                                    console.info("unknown notification type", notif);
                            }
                        }
                    }
                }
            });
        });
        this.client.connect(this.session.clientService.configuration.websocketEndpointUrl + "/notification", null, null, {
            "Authorization": this.session.clientService.configuration.token
        });
        return this;
    }

    close() {
        if (this.connection) {
            this.connection.close()
        }
    }

    private send(message: string) {
        if (this.connection.connected) {
            this.connection.sendUTF(message);
        }
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