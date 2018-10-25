import {Rest} from "./rest";
import {ConversationMessage} from "../models/conversation_message";
import {ConversationMessagePost} from "../models/conversation_message_post";
import {GenericFormData} from "../models/generic_form_data";

export class RestConversationMessage extends Rest {

    async list(id: string, page: number, size?: number): Promise<ConversationMessage[]> {
        size = size !== undefined ? size : 10;
        let path = Rest.params("/conversation/{id}/message", {id: id});
        path = path + '?' + Rest.encodeQueryData({page: page, size: size});
        return this.conf.getList(new ConversationMessage(), path) as Promise<ConversationMessage[]>;
    }

    async create(id: string, message: ConversationMessage): Promise<ConversationMessage> {
        let path = Rest.params("/conversation/{id}/message", {id: id});
        return this.conf.post(new ConversationMessage(), path, message) as Promise<ConversationMessage>;
    }

    // TODO add unit test
    async postFile(id: string, message: ConversationMessagePost): Promise<ConversationMessage> {
        let fd = new GenericFormData();
        fd.set("file", message.image.blob, 'image/png', "image.png");
        fd.set("message", message.message);
        let path = Rest.params("/conversation/{id}/message", {id: id});
        return this.conf.postMultipart(new ConversationMessage(), path, fd) as Promise<ConversationMessage>;
    }


    /* NOT YET IMPLEMENTED
    update(id: string, messageId: string, message: ConversationMessage): Promise<ConversationMessage> {
        let path = Rest.params("/conversation/{id}/message/{messageId}", {id: id, messageId: messageId});
        return this.conf.put(new ConversationMessage(), path, message) as Promise<ConversationMessage>;
    }
    */
}