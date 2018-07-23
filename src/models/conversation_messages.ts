import {Model} from "./model";
import {ConversationMessage} from "./conversation_message";
import {RestConversationMessage} from "../rest/conversation_message";

export class ConversationMessages extends Model {
    total_unreads: number;
    samples?: ConversationMessage[];
    conversation_id: string;

    list(page: number, size?: number): Promise<ConversationMessage[]> {
        return (new RestConversationMessage(this.conf)).list(this.conversation_id, page, size);
    }
}