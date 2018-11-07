import {Configuration} from "../configuration";
import {TextWallMessage} from "./text_wall_message";
import {Photo} from "./photo";
import {Event} from "./event";
import {Group} from "./group";
import {Status} from "./status";
import {User} from "./user";
import {PhotoAlbum} from "./photo_album";
import {Conversation} from "./conversation";
import {Location} from "./location";
import {Like} from "./like";
import {URLTag} from "./url_tag";
import {HashTag} from "./hash_tag";
import {UserMentionTag} from "./user_mention_tag";
import {ConversationMessage} from "./conversation_message";
import {Model} from "./model";
import {Comment} from './comment';
import {Base} from "./base";


export function convertModel(obj: any, conf?: Configuration): Model {
    switch (obj.entity_type) {
        case 'TEXT_WALL_MESSAGE':
            return new TextWallMessage(obj, conf);
        case 'PHOTO':
            return new Photo(obj, conf);
        case 'EVENT':
            return new Event(obj, conf);
        case 'GROUP':
            return new Group(obj, conf);
        case 'STATUS':
            return new Status(obj, conf);
        case 'USER':
            return new User(obj, conf);
        case 'PHOTO_ALBUM':
            return new PhotoAlbum(obj, conf);
        case 'CONVERSATION':
            return new Conversation(obj, conf);
        case 'LOCATION':
            return new Location(obj, conf);
        case 'COMMENT':
            return new Comment(obj, conf);
        case 'LIKE':
            return new Like(obj, conf);
        case 'URL_TAG':
            return new URLTag(obj, conf);
        case 'HASH_TAG':
            return new HashTag(obj, conf);
        case 'USER_MENTION_TAG':
            return new UserMentionTag(obj, conf);
        case 'CONVERSATION_MESSAGE':
            return new ConversationMessage(obj, conf);
        default:
            return new Base(obj, conf);
    }
}