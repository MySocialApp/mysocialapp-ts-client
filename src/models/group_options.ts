import {BaseLocation} from "./base_location";

export class GroupOptions {
    private _sort: string;
    private _location: BaseLocation;
    private _limited: boolean = true;

    setSort(s: string): GroupOptions {
        this._sort = s;
        return this;
    }

    setLimited(v: boolean): GroupOptions {
        this._limited = v;
        return this;
    }

    setLocation(location: BaseLocation): GroupOptions {
        this._location = location;
        return this;
    }

    toQueryParams(): {} {
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
        return params
    }
}
