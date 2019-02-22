import {Rest} from "./rest";
import {ConversationMessage} from "../models/conversation_message";

export class RestConversationMessageConsume extends Rest {

    async list(id: string, page: number, size?: number): Promise<ConversationMessage[]> {
        size = size !== undefined ? size : 10;
        let path = Rest.params("/conversation/{id}/message/consume", {id: id});
        path = path + '?' + Rest.encodeQueryData({page: page, size: size});
        return this.conf.getList(new ConversationMessage(), path) as Promise<ConversationMessage[]>;
    }

}
