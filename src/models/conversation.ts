import {User} from "./user";
import {ConversationMessages} from "./conversation_messages";
import {Base} from "./base";
import {ConversationMessagePost} from "./conversation_message_post";
import {ConversationMessage} from "./conversation_message";
import {RestConversationMessage} from "../rest/conversation_message";
import {RestConversation} from "../rest/conversation";
import {listToParameters} from "./utils";

export class Conversation extends Base {
    private _members: User[];
    private _messages: ConversationMessages;
    name?: string;

    getJsonParameters(): {} {
        return {
            members: listToParameters(this.members),
            name: this.name,
        };
    }

    get members(): User[] {
        return this._members;
    }

    setName(name: string): Conversation {
        this.name = name;
        return this;
    }

    async addMember(user: User): Promise<Conversation> {
        if (this.members == undefined) {
            this.members = [] as User[];
        }
        this.members.push(user);
        return this.update();
    }

    async addMembers(users: User[]): Promise<Conversation> {
        for (let user of users) {
            this.addMember(user);
        }
        return this.update();
    }

    set members(members: User[]) {
        this._members = [] as User[];
        for (let m of members) {
            this._members.push(new User(m));
        }
    }

    get messages(): ConversationMessages {
        var m = this._messages == null ? (this._messages = new ConversationMessages(null, this.conf)) : this._messages;
        m.conversation_id = this.id_str;
        return m;
    }

    set messages(o: ConversationMessages) {
        this._messages = new ConversationMessages(o, this.conf);
        this._messages.conversation_id = this.id_str;
    }

    async sendMessage(message: ConversationMessagePost): Promise<ConversationMessage> {
        if (!message.isMultipart) {
            return (new RestConversationMessage(this.conf)).create(this.id, message.getConversationMessage());
        }
        return (new RestConversationMessage(this.conf)).postFile(this.id, message);
    }

    async update(): Promise<Conversation> {
        return (new RestConversation(this.conf)).update(this.id, this);
    }

    async kickMember(userId: string): Promise<Conversation> {
        for (let i = 0; i < this.members.length; i++) {
            if(this.members[i].id == userId) {
                this.members.splice(i, 1);
                break;
            }
        }
        return this.update();
    }

    async leave(): Promise<void> {
        return new RestConversation(this.conf).delete(this.id);
    }
}