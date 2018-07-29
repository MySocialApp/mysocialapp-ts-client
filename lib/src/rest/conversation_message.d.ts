import { Rest } from "./rest";
import { ConversationMessage } from "../models/conversation_message";
import { ConversationMessagePost } from "../models/conversation_message_post";
export declare class RestConversationMessage extends Rest {
    list(id: string, page: number, size?: number): Promise<ConversationMessage[]>;
    post(id: string, message: ConversationMessage): Promise<ConversationMessage>;
    postFile(id: string, message: ConversationMessagePost): Promise<ConversationMessage>;
}
