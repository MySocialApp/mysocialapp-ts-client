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
const event_member_1 = require("./event_member");
const photo_1 = require("./photo");
const location_1 = require("./location");
const constant_1 = require("../constant");
const event_1 = require("../rest/event");
const event_wall_1 = require("../rest/event_wall");
const custom_field_1 = require("./custom_field");
const utils_1 = require("./utils");
class Event extends base_wall_1.BaseWall {
    getJsonParameters() {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            max_seats: this.max_seats,
            start_date: this.start_date,
            end_date: this.end_date,
            event_member_access_control: this.event_member_access_control,
            location: this.location ? this.location.getJsonParameters() : null,
            custom_fields: this._custom_fields ? utils_1.listToParameters(this._custom_fields) : null,
        };
    }
    join() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new event_1.RestEvent(this.conf)).join(this.id);
        });
    }
    leave() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new event_1.RestEvent(this.conf)).leave(this.id);
        });
    }
    /**
     * must be creator of the event
     */
    cancel() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new event_1.RestEvent(this.conf)).cancel(this.id);
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new event_1.RestEvent(this.conf)).update(this);
        });
    }
    addMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            return (new event_wall_1.RestEventWall(this.conf)).createMessage(this.id, message);
        });
    }
    get profile_cover_photo() {
        return this._profile_cover_photo;
    }
    set profile_cover_photo(p) {
        this._profile_cover_photo = new photo_1.Photo(p, this.conf);
    }
    get location() {
        return this._location;
    }
    set location(l) {
        this._location = new location_1.Location(l);
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
            list.push(new event_member_1.EventMember(m, this.conf));
        }
        this._members = list;
    }
    setStartDate(d) {
        this.start_date = d.format(constant_1.apiDateFormat);
        return this;
    }
    setEndDate(d) {
        this.end_date = d.format(constant_1.apiDateFormat);
        return this;
    }
    setMaxSeats(m) {
        this.max_seats = m;
        return this;
    }
    setDescription(d) {
        this.description = d;
        return this;
    }
    setName(n) {
        this.name = n;
        return this;
    }
    setLocation(l) {
        this.location = l;
        return this;
    }
    setAccessControl(ac) {
        this.event_member_access_control = ac;
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
}
exports.Event = Event;
