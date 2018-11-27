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
const base_wall_1 = require("./base_wall");
const photo_1 = require("./photo");
const custom_field_1 = require("./custom_field");
const group_member_1 = require("./group_member");
const location_1 = require("./location");
const group_1 = require("../rest/group");
const group_wall_1 = require("../rest/group_wall");
const utils_1 = require("./utils");
class Group extends base_wall_1.BaseWall {
    getJsonParameters() {
        let o = {
            id: this.id,
            name: this.name,
            description: this.description,
            group_member_access_control: this.group_member_access_control,
            location: this.location ? this.location.getJsonParameters() : null,
            custom_fields: this._custom_fields ? utils_1.listToParameters(this._custom_fields) : null,
        };
        if (this.custom_fields) {
            o['custom_fields'] = utils_1.listToParameters(this.custom_fields);
        }
        return o;
    }
    listNewsFeed(page, size) {
        return __awaiter(this, void 0, void 0, function* () {
            return new group_wall_1.RestGroupWall(this.conf).list(this.id, page, size);
        });
    }
    createFeedPost(feedPost) {
        return __awaiter(this, void 0, void 0, function* () {
            return new group_wall_1.RestGroupWall(this.conf).createMessage(this.id, feedPost.textWallMessage);
        });
    }
    join() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new group_1.RestGroup(this.conf)).join(this.id);
        });
    }
    leave() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new group_1.RestGroup(this.conf)).leave(this.id);
        });
    }
    /**
     * only for owner or moderator
     */
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new group_1.RestGroup(this.conf)).delete(this.id);
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new group_1.RestGroup(this.conf)).update(this);
        });
    }
    changeOwner(newOwnerId) {
        return __awaiter(this, void 0, void 0, function* () {
            return (new group_1.RestGroup(this.conf)).changeOwner(newOwnerId);
        });
    }
    addMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            return (new group_wall_1.RestGroupWall(this.conf)).createMessage(this.id, message);
        });
    }
    setName(name) {
        this.name = name;
        return this;
    }
    setDescription(desc) {
        this.description = desc;
        return this;
    }
    setAccessControl(ac) {
        this.group_member_access_control = ac;
        return this;
    }
    setLocation(l) {
        this.location = l;
        return this;
    }
    get custom_fields() {
        return this._custom_fields;
    }
    set custom_fields(c) {
        if (!c) {
            return;
        }
        let list = [];
        for (let m of c) {
            list.push(new custom_field_1.CustomField(m, this.conf));
        }
        this._custom_fields = list;
    }
    get members() {
        return this._members;
    }
    set members(members) {
        if (!members) {
            return;
        }
        let list = [];
        for (let m of members) {
            list.push(new group_member_1.GroupMember(m, this.conf));
        }
        this._members = list;
    }
    get cover_image() {
        return this.profile_cover_photo;
    }
    get profile_cover_photo() {
        return this._profile_cover_photo;
    }
    set profile_cover_photo(p) {
        this._profile_cover_photo = new photo_1.Photo(p, this.conf);
    }
    get image() {
        return this.profile_photo;
    }
    get profile_photo() {
        return this._profile_photo;
    }
    set profile_photo(p) {
        this._profile_photo = new photo_1.Photo(p, this.conf);
    }
    get location() {
        return this._location;
    }
    set location(l) {
        this._location = new location_1.Location(l);
    }
    updateImage(file) {
        return new group_1.RestGroup(this.conf).updateProfilePhoto(this.id, file);
    }
    updateCoverImage(file) {
        return new group_1.RestGroup(this.conf).updateProfileCoverPhoto(this.id, file);
    }
}
exports.Group = Group;
