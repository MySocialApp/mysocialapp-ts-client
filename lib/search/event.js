"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const search_1 = require("./search");
const search_type_1 = require("../models/search_type");
const constant_1 = require("../constant");
const event_options_1 = require("../models/event_options");
class SearchEvent extends search_1.SearchBuilder {
    constructor() {
        super();
        this.params.set("type", search_type_1.SearchType.Event);
        this.setDateField(event_options_1.EventDateField.StartDate);
    }
    setFromDate(d) {
        this.params.set("start_date", d.format(constant_1.apiDateFormat));
        return this;
    }
    setToDate(d) {
        this.params.set("end_date", d.format(constant_1.apiDateFormat));
        return this;
    }
    setName(value) {
        this.params.set("name", value);
        return this;
    }
    setDescription(value) {
        this.params.set("content", value);
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
    setLocation(loc) {
        this.params.set("latitude", String(loc.latitude));
        this.params.set("longitude", String(loc.longitude));
        return this;
    }
    setLocationMaximumDistanceInMeters(distance) {
        this.params.set('maximum_distance_in_meters', String(distance));
        return this;
    }
    setLocationMaximumDistanceInKilometers(distance) {
        this.setLocationMaximumDistanceInMeters(distance * 1000);
        return this;
    }
    setOrder(order) {
        this.params.set('sort_order', order);
        return this;
    }
    setDateField(f) {
        this.params.set('date_field', f);
        return this;
    }
}
exports.SearchEvent = SearchEvent;
