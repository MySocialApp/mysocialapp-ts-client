"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventOptions {
    constructor() {
        this._page = 0;
        this._size = 10;
        this._limited = true;
        this._date_field = EventDateField.StartDate;
        this._sort = "start_date";
    }
    setPage(p) {
        this._page = p;
        return this;
    }
    setSize(s) {
        this._size = s;
        return this;
    }
    setSortField(sortField) {
        this._sort = sortField;
        return this;
    }
    setDateField(v) {
        this._date_field = v;
        return this;
    }
    setFromDate(date) {
        this._from_date = date.format("YYYY:MM:dd") + "T00:00:00Z";
        return this;
    }
    setLimited(v) {
        this._limited = v;
        return this;
    }
    setLocation(location) {
        this._location = location;
        return this;
    }
    toQueryParams() {
        let params = {
            sort_field: this._sort,
            limited: this._limited,
            from_date: this._from_date,
            date_field: this._date_field,
        };
        if (this._location !== undefined && this._location.latitude && this._location.longitude) {
            params['latitude'] = this._location.latitude;
            params['longitude'] = this._location.longitude;
        }
        return params;
    }
}
exports.EventOptions = EventOptions;
var EventDateField;
(function (EventDateField) {
    EventDateField["StartDate"] = "start_date";
    EventDateField["EndDate"] = "end_date";
})(EventDateField = exports.EventDateField || (exports.EventDateField = {}));
