import { Model } from "./model";
import { ConversationMessage } from "./conversation_message";
export declare class ConversationMessages extends Model {
    total_unreads: number;
    _samples?: ConversationMessage[];
    conversation_id: string;
    samples: ConversationMessage[];
    list(page: number, size?: number): Promise<ConversationMessage[]>;
    listAndConsume(page: number, size?: number): Promise<ConversationMessage[]>;
}
