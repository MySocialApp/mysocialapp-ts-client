import {BaseLocation} from "./base_location";
import moment = require("moment");

export class EventOptions {
    private _page: number = 0;
    private _size: number = 10;
    private _limited: boolean = true;
    private _location: BaseLocation;
    private _from_date: string;
    private _date_field: EventDateField = EventDateField.StartDate;
    private _sort: string = "start_date";

    setPage(p: number): EventOptions {
        this._page = p;
        return this;
    }

    setSize(s: number): EventOptions {
        this._size = s;
        return this;
    }

    setSortField(sortField: string): EventOptions {
        this._sort = sortField;
        return this;
    }

    setDateField(v: EventDateField): EventOptions {
        this._date_field = v;
        return this;
    }

    setFromDate(date: moment.Moment): EventOptions {
        this._from_date = date.format("YYYY:MM:dd") + "T00:00:00Z";
        return this;
    }

    setLimited(v: boolean): EventOptions {
        this._limited = v;
        return this;
    }

    setLocation(location: BaseLocation): EventOptions {
        this._location = location;
        return this;
    }

    toQueryParams(): {} {
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

export enum EventDateField {
    StartDate = "start_date",
    EndDate = "end_date"
}