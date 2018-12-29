"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const photo_1 = require("./photo");
const custom_field_1 = require("./custom_field");
const user_stat_1 = require("./user_stat");
const status_1 = require("./status");
const location_1 = require("./location");
const flag_1 = require("./flag");
const model_1 = require("./model");
const user_wall_1 = require("../rest/user_wall");
const user_wall_message_1 = require("../rest/user_wall_message");
const user_friend_1 = require("../rest/user_friend");
const user_album_1 = require("../rest/user_album");
const conversation_1 = require("../rest/conversation");
const conversation_2 = require("./conversation");
const user_following_1 = require("../rest/user_following");
const user_follower_1 = require("../rest/user_follower");
const user_stat_2 = require("../rest/user_stat");
class User extends model_1.Model {
    constructor() {
        super(...arguments);
        this._custom_fields = [];
    }
    getJsonParameters() {
        return {
            id: this.id,
            first_name: this.first_name,
            last_name: this.last_name,
            full_name: this.full_name,
            password: this.password,
            email: this.email,
            gender: this.gender,
            date_of_birth: this.date_of_birth,
            presentation: this.presentation,
        };
    }
    get id() {
        return this.id_str;
    }
    set id(id) {
        // int64 cannot be interpreted by browsers
    }
    set displayed_photo(o) {
        this._displayed_photo = new photo_1.Photo(o);
    }
    get displayed_photo() {
        return this._displayed_photo;
    }
    set profile_photo(p) {
        this._profile_photo = new photo_1.Photo(p, this.conf);
    }
    get profile_photo() {
        return this._profile_photo;
    }
    set profile_cover_photo(p) {
        this._profile_cover_photo = new photo_1.Photo(p, this.conf);
    }
    get profile_cover_photo() {
        return this._profile_cover_photo;
    }
    set flag(p) {
        this._flag = new flag_1.Flag(p, this.conf);
    }
    get flag() {
        return this._flag;
    }
    set living_location(p) {
        this._living_location = new location_1.Location(p);
    }
    get living_location() {
        return this._living_location;
    }
    set current_status(p) {
        this._current_status = new status_1.Status(p, this.conf);
    }
    get current_status() {
        return this._current_status;
    }
    get user_stat() {
        return this._user_stat;
    }
    set user_stat(u) {
        if (u) {
            this._user_stat = new user_stat_1.UserStat(u, this.conf);
        }
    }
    set custom_fields(list) {
        this._custom_fields = [];
        for (let c of list) {
            this._custom_fields.push(new custom_field_1.CustomField(c, this.conf));
        }
    }
    get custom_fields() {
        return this._custom_fields;
    }
    /**
     * return true if field found
     * @param {string} id
     * @param value
     * @returns {boolean}
     */
    setCustomFieldValueById(id, value) {
        if (!this.custom_fields || this.custom_fields.length == 0) {
            return;
        }
        for (let field of this.custom_fields) {
            if (field.field.id == id) {
                field.value = value;
                return true;
            }
        }
        return false;
    }
    userStat() {
        return __awaiter(this, void 0, void 0, function* () {
            return new user_stat_2.RestUserStat(this.conf).get(this.id);
        });
    }
    listNewsFeed(page, size) {
        return __awaiter(this, void 0, void 0, function* () {
            return new user_wall_1.RestUserWall(this.conf).list(this.id, page, size);
        });
    }
    createFeedPost(post) {
        return __awaiter(this, void 0, void 0, function* () {
            return new user_wall_message_1.RestUserWallMessage(this.conf).create(this.id, post.textWallMessage);
        });
    }
    removeFriend() {
        return __awaiter(this, void 0, void 0, function* () {
            return new user_friend_1.RestUserFriend(this.conf).delete(this.id);
        });
    }
    listFriends(page, size) {
        return __awaiter(this, void 0, void 0, function* () {
            return new user_friend_1.RestUserFriend(this.conf).list(this.id, page, size);
        });
    }
    requestAsFriend() {
        return __awaiter(this, void 0, void 0, function* () {
            return new user_friend_1.RestUserFriend(this.conf).create(this.id);
        });
    }
    cancelFriendRequest() {
        return __awaiter(this, void 0, void 0, function* () {
            return new user_friend_1.RestUserFriend(this.conf).delete(this.id);
        });
    }
    acceptFriendRequest() {
        return __awaiter(this, void 0, void 0, function* () {
            return new user_friend_1.RestUserFriend(this.conf).create(this.id);
        });
    }
    refuseFriendRequest() {
        return __awaiter(this, void 0, void 0, function* () {
            return new user_friend_1.RestUserFriend(this.conf).delete(this.id);
        });
    }
    follow() {
        return __awaiter(this, void 0, void 0, function* () {
            return new user_following_1.RestUserFollowing(this.conf).create(this.id);
        });
    }
    unfollow() {
        return __awaiter(this, void 0, void 0, function* () {
            return new user_following_1.RestUserFollowing(this.conf).delete(this.id);
        });
    }
    listFollowers(page, size) {
        return __awaiter(this, void 0, void 0, function* () {
            return new user_follower_1.RestUserFollower(this.conf).list(this.id, page, size);
        });
    }
    listFollowings(page, size) {
        return __awaiter(this, void 0, void 0, function* () {
            return new user_following_1.RestUserFollowing(this.conf).list(this.id, page, size);
        });
    }
    listPhotoAlbum(page, size) {
        return __awaiter(this, void 0, void 0, function* () {
            return new user_album_1.RestUserAlbum(this.conf).list(this.id, page, size);
        });
    }
    sendPrivateMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            let conversation = new conversation_2.Conversation().addMember(this);
            conversation = yield new conversation_1.RestConversation(this.conf).create(conversation);
            return conversation.sendMessage(message);
        });
    }
}
exports.User = User;
