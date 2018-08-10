import {Model} from "./model";
import {ConversationMessage} from "./conversation_message";
import {RestConversationMessage} from "../rest/conversation_message";

export class ConversationMessages extends Model {
    total_unreads: number;
    _samples?: ConversationMessage[];
    conversation_id: string;

    set samples(messages: ConversationMessage[]) {
        let list = [] as ConversationMessage[];
        for (let m of messages) {
            list.push(new ConversationMessage(m, this.conf));
        }
        this._samples = list
    }

    get samples(): ConversationMessage[] {
        return this._samples;
    }

    list(page: number, size?: number): Promise<ConversationMessage[]> {
        return (new RestConversationMessage(this.conf)).list(this.conversation_id, page, size);
    }
}