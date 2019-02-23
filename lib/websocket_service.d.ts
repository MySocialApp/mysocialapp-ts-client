import { Session } from "./session";
export declare enum notificationType {
    Feed = "FEED",
    Comment = "COMMENT",
    Like = "LIKE",
    ConversationMessage = "CONVERSATION_MESSAGE",
    UserMentionTag = "USER_MENTION_TAG",
    NewEvent = "NEW_EVENT",
    FriendRequest = "FRIEND_REQUEST",
    Friend = "FRIEND"
}
export declare class WebsocketService {
    private session;
    private client;
    private listeners;
    private listenersByType;
    constructor(session: Session);
    connect(): WebsocketService;
    close(): void;
    onNotification(callback: any): void;
    private onMessageByType;
    onComment(callback: any): void;
    onLike(callback: any): void;
    onConversationMessage(callback: any): void;
    onNewsFeed(callback: any): void;
    onMention(callback: any): void;
    onMentionComment(callback: any): void;
    onEvent(callback: any): void;
    onFriendRequest(callback: any): void;
}
