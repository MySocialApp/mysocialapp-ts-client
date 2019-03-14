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
const event_1 = require("../models/event");
const custom_field_1 = require("../models/custom_field");
const event_member_1 = require("../models/event_member");
const empty_1 = require("../models/empty");
const photo_1 = require("../models/photo");
const feed_1 = require("../models/feed");
const generic_form_data_1 = require("../models/generic_form_data");
class RestEvent extends rest_1.Rest {
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
            return this.listFromParams(params);
        });
    }
    listByZone(page, limited, size, lowerLatitude, lowerLongitude, upperLatitude, upperLongitude) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = {
                page: page,
                limited: limited,
                size: size,
                lower_latitude: lowerLatitude,
                lower_longitude: lowerLongitude,
                upper_latitude: upperLatitude,
                upper_longitude: upperLongitude
            };
            return this.listFromParams(params);
        });
    }
    listFromParams(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new event_1.Event(), "/event?" + rest_1.Rest.encodeQueryData(queryParams));
        });
    }
    get(id, limited = true) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = "/event/" + id;
            if (!limited) {
                path += '?limited=false';
            }
            return this.conf.get(new event_1.Event(), path);
        });
    }
    create(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new event_1.Event(), "/event", event);
        });
    }
    update(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.put(new event_1.Event(), "/event/" + event.id, event);
        });
    }
    cancel(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.postVoid(rest_1.Rest.params("/event/{id}/cancel", { id: id }), new empty_1.Empty());
        });
    }
    getCustomFields() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new custom_field_1.CustomField(), "/event/customfield");
        });
    }
    getEventCustomFields(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new custom_field_1.CustomField(), rest_1.Rest.params("/event/{id}/customfield", { id: id }));
        });
    }
    getMembers(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new event_member_1.EventMember(), rest_1.Rest.params("event/{id}/member", { id: id }));
        });
    }
    join(eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new event_member_1.EventMember(), rest_1.Rest.params("/event/{id}/member", { id: eventId }), new empty_1.Empty());
        });
    }
    leave(eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.deleteVoid(rest_1.Rest.params("/event/{id}/member", { id: eventId }));
        });
    }
    delete(eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.deleteVoid("/event/" + eventId);
        });
    }
    changeOwner(eventId, newOwnerId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new event_1.Event(), rest_1.Rest.params("/event/{id}/owner/{ownerId}", { id: eventId, ownerId: newOwnerId }), new empty_1.Empty());
        });
    }
    getPhotos(eventId, page) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = { page: page !== undefined ? page : 0 };
            let path = rest_1.Rest.params("/event/{id}/photo", { id: eventId }) + rest_1.Rest.encodeQueryData(params);
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
                f.append("payload", payload);
            }
            return this.conf.postMultipart(new feed_1.Feed(), rest_1.Rest.params("/event/{id}/photo/base64", { id: eventId }), f);
        });
    }
    getProfilePhoto(eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.get(new photo_1.Photo(), rest_1.Rest.params("/event/{id}/profile/photo", { id: eventId }));
        });
    }
    updateProfilePhoto(eventId, photo) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = new generic_form_data_1.GenericFormData();
            f.set("file", photo.blob, 'image/png', "image.png");
            return this.conf.postMultipart(new photo_1.Photo(), rest_1.Rest.params("/event/{id}/profile/photo/base64", { id: eventId }), f);
        });
    }
    getProfileCoverPhoto(eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.get(new photo_1.Photo(), rest_1.Rest.params("/event/{id}/profile/cover/photo", { id: eventId }));
        });
    }
    updateProfileCoverPhoto(eventId, photo) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = new generic_form_data_1.GenericFormData();
            f.set("file", photo.blob, 'image/png', "image.png");
            return this.conf.postMultipart(new photo_1.Photo(), rest_1.Rest.params("/event/{id}/profile/cover/photo/base64", { id: eventId }), f);
        });
    }
}
exports.RestEvent = RestEvent;
