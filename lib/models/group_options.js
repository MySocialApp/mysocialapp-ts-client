"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GroupOptions {
    constructor() {
        this._limited = true;
    }
    setSort(s) {
        this._sort = s;
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
            limited: this._limited
        };
        if (this._sort) {
            params['sort_field'] = this._sort;
        }
        if (this._location && this._location.latitude && this._location.longitude) {
            params['latitude'] = this._location.latitude;
            params['longitude'] = this._location.longitude;
        }
        return params;
    }
}
exports.GroupOptions = GroupOptions;
