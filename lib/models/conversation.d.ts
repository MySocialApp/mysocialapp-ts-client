import { User } from "./user";
import { ConversationMessages } from "./conversation_messages";
import { Base } from "./base";
import { ConversationMessagePost } from "./conversation_message_post";
import { ConversationMessage } from "./conversation_message";
export declare class Conversation extends Base {
    private _members;
    private _messages;
    name?: string;
    getJsonParameters(): {};
    members: User[];
    setName(name: string): Conversation;
    addMember(user: User): Promise<Conversation>;
    addMembers(users: User[]): Promise<Conversation>;
    messages: ConversationMessages;
    sendMessage(message: ConversationMessagePost): Promise<ConversationMessage>;
    update(): Promise<Conversation>;
    kickMember(userId: string): Promise<Conversation>;
    leave(): Promise<void>;
}
