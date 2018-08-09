import {User} from "./user";
import {ConversationMessages} from "./conversation_messages";
import {Base} from "./base";
import {ConversationMessagePost} from "./conversation_message_post";
import {ConversationMessage} from "./conversation_message";
import {RestConversationMessage} from "../rest/conversation_message";

export class Conversation extends Base {
    private _members: User[];
    private _messages: ConversationMessages;
    name?: string;

    get members(): User[] {
        return this._members;
    }

    set members(members: User[]) {
        this._members = [] as User[];
        for (let m of members) {
            this._members.push(new User(m));
        }
    }

    get messages(): ConversationMessages {
        return this._messages;
    }

    set messages(o: ConversationMessages) {
        this._messages = new ConversationMessages(o, this.conf);
    }

    sendMessage(message: ConversationMessagePost): Promise<ConversationMessage> {
        if (!message.isMultipart) {
            return (new RestConversationMessage(this.conf)).create(this.id, message.getConversationMessage());
        }
        return (new RestConversationMessage(this.conf)).postFile(this.id, message);
    }
}