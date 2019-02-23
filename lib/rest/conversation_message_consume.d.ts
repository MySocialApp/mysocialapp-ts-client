import { Rest } from "./rest";
import { ConversationMessage } from "../models/conversation_message";
export declare class RestConversationMessageConsume extends Rest {
    list(id: string, page: number, size?: number): Promise<ConversationMessage[]>;
}
