import { Model, Serializable } from "./model";
import { Taggable } from "./taggable";
import { TagEntities } from "./tag_entities";
import { Photo } from "./photo";
import { Conversation } from "./conversation";
import { ConversationMessagePost } from "./conversation_message_post";
export declare class ConversationMessage extends Model implements Serializable, Taggable {
    message?: string;
    private _photo?;
    private _conversation?;
    private _tag_entities?;
    toJson(): string;
    tag_entities: TagEntities;
    photo: Photo;
    conversation: Conversation;
    replyBack(conversationMessagePost: ConversationMessagePost): Promise<ConversationMessage>;
}
