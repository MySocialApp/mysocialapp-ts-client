"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const text_wall_message_1 = require("./text_wall_message");
const photo_1 = require("./photo");
const event_1 = require("./event");
const group_1 = require("./group");
const status_1 = require("./status");
const user_1 = require("./user");
const photo_album_1 = require("./photo_album");
const conversation_1 = require("./conversation");
const location_1 = require("./location");
const like_1 = require("./like");
const url_tag_1 = require("./url_tag");
const hash_tag_1 = require("./hash_tag");
const user_mention_tag_1 = require("./user_mention_tag");
const conversation_message_1 = require("./conversation_message");
const comment_1 = require("./comment");
const base_1 = require("./base");
function convertModel(obj, conf) {
    switch (obj.entity_type) {
        case 'TEXT_WALL_MESSAGE':
            return new text_wall_message_1.TextWallMessage(obj, conf);
        case 'PHOTO':
            return new photo_1.Photo(obj, conf);
        case 'EVENT':
            return new event_1.Event(obj, conf);
        case 'GROUP':
            return new group_1.Group(obj, conf);
        case 'STATUS':
            return new status_1.Status(obj, conf);
        case 'USER':
            return new user_1.User(obj, conf);
        case 'PHOTO_ALBUM':
            return new photo_album_1.PhotoAlbum(obj, conf);
        case 'CONVERSATION':
            return new conversation_1.Conversation(obj, conf);
        case 'LOCATION':
            return new location_1.Location(obj, conf);
        case 'COMMENT':
            return new comment_1.Comment(obj, conf);
        case 'LIKE':
            return new like_1.Like(obj, conf);
        case 'URL_TAG':
            return new url_tag_1.URLTag(obj, conf);
        case 'HASH_TAG':
            return new hash_tag_1.HashTag(obj, conf);
        case 'USER_MENTION_TAG':
            return new user_mention_tag_1.UserMentionTag(obj, conf);
        case 'CONVERSATION_MESSAGE':
            return new conversation_message_1.ConversationMessage(obj, conf);
        default:
            return new base_1.Base(obj, conf);
    }
}
exports.convertModel = convertModel;
