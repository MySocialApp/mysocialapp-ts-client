import {Model, Serializable} from "./model";
import {Taggable} from "./taggable";
import {TagEntities} from "./tag_entities";
import {Photo} from "./photo";
import {Conversation} from "./conversation";
import {ConversationMessagePost} from "./conversation_message_post";

export class ConversationMessage extends Model implements Serializable, Taggable {
    message?: string;
    private _photo?: Photo;
    private _conversation?: Conversation;
    private _tag_entities?: TagEntities;

    toJson(): string {
        // TODO complete serialization
        return JSON.stringify({
            message: this.message,
            tag_entities: this.tag_entities,
        });
    }

    get tag_entities(): TagEntities {
        return this._tag_entities;
    }

    set tag_entities(t: TagEntities) {
        this._tag_entities = new TagEntities(t);
    }

    get photo(): Photo {
        return this._photo;
    }

    set photo(p: Photo) {
        this._photo = p;
    }

    get conversation(): Conversation {
        return this._conversation;
    }

    set conversation(c: Conversation) {
        this._conversation = new Conversation(c, this.conf);
    }

    replyBack(conversationMessagePost: ConversationMessagePost): Promise<ConversationMessage> {
        return this.conversation.sendMessage(conversationMessagePost);
    }
}