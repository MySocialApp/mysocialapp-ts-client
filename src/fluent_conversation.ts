import {FluentAbstract} from "./fluent_abstract";
import {Conversation} from "./models/conversation";

export class FluentConversation extends FluentAbstract {
    async list(page: number, size: number = 20): Conversation[] {
        return this.session.clientService.conversation.list(page, size);
    }

    async get(id: string): Conversation {
        return this.session.clientService.conversation.get(id);
    }

    async create(conversation: Conversation): Conversation {
        return this.session.clientService.conversation.create(conversation);
    }
}