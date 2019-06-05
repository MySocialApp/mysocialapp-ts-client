"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const search_1 = require("./search");
const search_type_1 = require("../models/search_type");
class SearchUser extends search_1.SearchBuilder {
    constructor() {
        super();
        this.params.set("type", search_type_1.SearchType.User);
    }
    setFirstName(value) {
        this.params.set("first_name", value);
        return this;
    }
    setLastName(value) {
        this.params.set("last_name", value);
        return this;
    }
    setFullName(value) {
        this.params.set("q", value);
        return this;
    }
    setGender(value) {
        this.params.set("gender", value);
        return this;
    }
    setLocation(loc) {
        this.params.set("latitude", String(loc.latitude));
        this.params.set("longitude", String(loc.longitude));
        return this;
    }
    setLivingLocationMaximumDistanceInMeters(distance) {
        this.params.set('maximum_distance', String(distance));
        return this;
    }
    setLivingLocationMaximumDistanceInKilometers(distance) {
        this.setLivingLocationMaximumDistanceInMeters(distance * 1000);
        return this;
    }
    setPresentation(value) {
        this.params.set("presentation", value);
        return this;
    }
    setOrder(order) {
        this.params.set('sort_order', order);
        return this;
    }
}
exports.SearchUser = SearchUser;
