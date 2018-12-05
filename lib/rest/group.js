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
const rest_1 = require("./rest");
const group_1 = require("../models/group");
const custom_field_1 = require("../models/custom_field");
const feed_1 = require("../models/feed");
const photo_1 = require("../models/photo");
const empty_1 = require("../models/empty");
const group_member_1 = require("../models/group_member");
const generic_form_data_1 = require("../models/generic_form_data");
class RestGroup extends rest_1.Rest {
    list(page, limited, size, location, params) {
        return __awaiter(this, void 0, void 0, function* () {
            params = params !== undefined ? params : {};
            params['page'] = page;
            params['limited'] = limited === true;
            params['size'] = size;
            if (location !== undefined) {
                params['latitude'] = location.latitude;
                params['longitude'] = location.longitude;
            }
            return this.conf.getList(new group_1.Group(), "/group?" + rest_1.Rest.encodeQueryData(params));
        });
    }
    listByZone(page, limited, size, lowerLatitude, lowerLongitude, upperLatitude, upperLongitude) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = {
                lower_latitude: lowerLatitude,
                lower_longitude: lowerLongitude,
                upper_latitude: upperLatitude,
                upper_longitude: upperLongitude
            };
            return this.list(page, limited, size, undefined, params);
        });
    }
    get(id, limited = true) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = "/group/" + id;
            if (!limited) {
                path += "?limited=false";
            }
            return this.conf.get(new group_1.Group(), path);
        });
    }
    create(group) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new group_1.Group(), "/group", group);
        });
    }
    update(group) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.put(new group_1.Group(), "/group/" + group.id, group);
        });
    }
    getCustomFields() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new custom_field_1.CustomField(), "/group/customfield");
        });
    }
    getGroupCustomFields(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new custom_field_1.CustomField(), rest_1.Rest.params("/group/{id}/customfield", { id: id }));
        });
    }
    getMembers(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new group_member_1.GroupMember(), rest_1.Rest.params("/group/{id}/member", { id: id }));
        });
    }
    join(groupId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new group_member_1.GroupMember(), rest_1.Rest.params("/group/{id}/member", { id: groupId }), new empty_1.Empty());
        });
    }
    leave(groupId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.delete(rest_1.Rest.params("/group/{id}/member", { id: groupId }));
        });
    }
    delete(groupId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.delete("/group/" + groupId);
        });
    }
    changeOwner(newOwnerId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.put(new group_1.Group(), rest_1.Rest.params("/group/{id}/owner", { id: newOwnerId }), new group_1.Group({ owner: { id_str: newOwnerId } }));
        });
    }
    getPhotos(eventId, page) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = { page: page !== undefined ? page : 0 };
            let path = rest_1.Rest.params("/group/{id}/photo", { id: eventId }) + rest_1.Rest.encodeQueryData(params);
            return this.conf.getList(new photo_1.Photo(), path);
        });
    }
    createPhoto(eventId, photo, message, accessControl, tagEntities, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = new generic_form_data_1.GenericFormData();
            f.set("file", photo.blob, 'image/png', "image.png");
            if (message !== undefined) {
                f.append("message", message);
            }
            if (accessControl !== undefined) {
                f.append("access_control", accessControl);
            }
            if (tagEntities !== undefined) {
                f.append("tag_entities", tagEntities.toJson());
            }
            if (payload !== undefined) {
                f.append('payload', payload);
            }
            return this.conf.postMultipart(new feed_1.Feed(), rest_1.Rest.params("/group/{id}/photo/base64", { id: eventId }), f);
        });
    }
    getProfilePhoto(eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.get(new photo_1.Photo(), rest_1.Rest.params("/group/{id}/profile/photo", { id: eventId }));
        });
    }
    updateProfilePhoto(eventId, photo) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = new generic_form_data_1.GenericFormData();
            f.set("file", photo.blob, 'image/png', "image.png");
            return this.conf.postMultipart(new photo_1.Photo(), rest_1.Rest.params("/group/{id}/profile/photo/base64", { id: eventId }), f);
        });
    }
    getProfileCoverPhoto(eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.get(new photo_1.Photo(), rest_1.Rest.params("/group/{id}/profile/cover/photo", { id: eventId }));
        });
    }
    updateProfileCoverPhoto(eventId, photo) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = new generic_form_data_1.GenericFormData();
            f.set("file", photo.blob, 'image/png', "image.png");
            return this.conf.postMultipart(new photo_1.Photo(), rest_1.Rest.params("/group/{id}/profile/cover/photo/base64", { id: eventId }), f);
        });
    }
}
exports.RestGroup = RestGroup;
