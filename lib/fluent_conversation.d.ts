import { FluentAbstract } from "./fluent_abstract";
import { Conversation } from "./models/conversation";
export declare class FluentConversation extends FluentAbstract {
    list(page: number, size?: number): Promise<Conversation[]>;
    get(id: string): Promise<Conversation>;
    create(conversation: Conversation): Promise<Conversation>;
    getTotalUnread(): Promise<number>;
}
