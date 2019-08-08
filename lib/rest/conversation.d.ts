import { Rest } from "./rest";
import { Conversation } from "../models/conversation";
import { ConversationMessage } from "../models/conversation_message";
import { TagEntities } from "../models/tag_entities";
import { FileData } from "../models/file";
export declare class RestConversation extends Rest {
    list(page: number, size?: number): Promise<Conversation[]>;
    get(id: string): Promise<Conversation>;
    create(conversation: Conversation): Promise<Conversation>;
    update(id: string, conversation: Conversation): Promise<Conversation>;
    delete(id: string): Promise<void>;
    consume(id: string, page: number, size: number): Promise<ConversationMessage[]>;
    addPhoto(id: string, photo: FileData, message?: string, tagEntities?: TagEntities): Promise<ConversationMessage>;
    silent(id: string, enabled: boolean): Promise<void>;
}
