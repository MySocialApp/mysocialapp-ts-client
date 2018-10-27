"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const search_1 = require("./search");
const search_type_1 = require("../models/search_type");
class SearchFeed extends search_1.SearchBuilder {
    constructor() {
        super();
        this.params.set("type", search_type_1.SearchType.Feed);
    }
    setName(value) {
        this.params.set("name", value);
        return this;
    }
    setOwnerFirstName(value) {
        this.params.set("first_name", value);
        return this;
    }
    setOwnerLastName(value) {
        this.params.set("last_name", value);
        return this;
    }
    setOwnerGender(value) {
        this.params.set("gender", value);
        return this;
    }
    setOwnerLivingLocation(loc) {
        this.params.set("latitude", String(loc.latitude));
        this.params.set("longitude", String(loc.longitude));
        return this;
    }
    setOwnerLivingLocationMaximumDistanceInMeters(distance) {
        this.params.set('maximum_distance_in_meters', String(distance));
        return this;
    }
    setOwnerLivingLocationMaximumDistanceInKilometers(distance) {
        this.setOwnerLivingLocationMaximumDistanceInMeters(distance * 1000);
        return this;
    }
    setTextToSearch(text) {
        this.params.set("q", text);
        return this;
    }
    setOrder(order) {
        this.params.set('sort_order', order);
        return this;
    }
}
exports.SearchFeed = SearchFeed;
