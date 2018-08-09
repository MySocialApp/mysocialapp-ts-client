import {Rest} from "./rest";
import {Conversation} from "../models/conversation";
import {ConversationMessage} from "../models/conversation_message";
import {TagEntities} from "../models/tag_entities";

export class RestConversation extends Rest {
    list(page: number, size?: number): Promise<Conversation[]> {
        let params = {
            page: page,
            size: size !== undefined ? size : 20,
            messageSamples: 1,
        };
        return this.conf.getList(new Conversation(), "/conversation?" + Rest.encodeQueryData(params)) as Promise<Conversation[]>;
    }

    get(id: string): Promise<Conversation> {
        return this.conf.get(new Conversation(), "/conversation/" + id) as Promise<Conversation>;
    }

    create(conversation: Conversation): Promise<Conversation> {
        return this.conf.post(new Conversation(), "/conversation", conversation) as Promise<Conversation>;
    }

    update(id: string, conversation: Conversation): Promise<Conversation> {
        return this.conf.put(new Conversation(), "/conversation/" + id, conversation) as Promise<Conversation>;
    }

    delete(id: string): Promise<void> {
        return this.conf.delete("/conversation/" + id) as Promise<void>;
    }

    consume(id: string, page: number, size: number): Promise<ConversationMessage[]> {
        let path = Rest.params("/conversation/{id}/message/consume", {id: id}) + Rest.encodeQueryData({
            page: page,
            size: size,
        });
        return this.conf.getList(new ConversationMessage(), path) as Promise<ConversationMessage[]>;
    }

    addPhoto(id: string, photo: File, message?: string, tagEntities?: TagEntities): Promise<ConversationMessage> {
        let f = new FormData();
        f.set("file", message);
        if (message !== undefined && message != "") {
            f.set("message", message);
        }
        if (tagEntities !== undefined) {
            f.set("tag_entities", tagEntities.toJson());
        }
        let path = Rest.params("/conversation/{id}/message/photo", {id: id});
        return this.conf.postMultipart(new ConversationMessage(), path, f) as Promise<ConversationMessage>;
    }
}