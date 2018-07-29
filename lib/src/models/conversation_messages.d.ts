import { Model } from "./model";
import { ConversationMessage } from "./conversation_message";
export declare class ConversationMessages extends Model {
    total_unreads: number;
    samples?: ConversationMessage[];
    conversation_id: string;
    list(page: number, size?: number): Promise<ConversationMessage[]>;
}
