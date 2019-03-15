import {SearchBuilder} from "./search";
import {SimpleLocation} from "../models/simple_location";
import {SortOrder} from "../models/sort_order";
import {SearchType} from "../models/search_type";
import {apiDateFormat} from "../constant";
import {EventDateField} from "../models/event_options";
import moment = require("moment");

export class SearchEvent extends SearchBuilder {

    constructor() {
        super();
        this.params.set("type", SearchType.Event);
        this.setDateField(EventDateField.StartDate)
    }

    setFromDate(d: moment.Moment): SearchEvent {
        this.params.set("start_date", d.format(apiDateFormat));
        return this;
    }

    setToDate(d: moment.Moment): SearchEvent {
        this.params.set("end_date", d.format(apiDateFormat));
        return this;
    }

    setName(value: string): SearchEvent {
        this.params.set("name", value);
        return this;
    }

    setDescription(value: string): SearchEvent {
        this.params.set("content", value);
        return this;
    }

    setOwnerFirstName(value: string): SearchEvent {
        this.params.set("first_name", value);
        return this;
    }

    setOwnerLastName(value: string): SearchEvent {
        this.params.set("last_name", value);
        return this;
    }

    setLocation(loc: SimpleLocation): SearchEvent {
        this.params.set("latitude", String(loc.latitude));
        this.params.set("longitude", String(loc.longitude));
        return this;
    }

    setLocationMaximumDistanceInMeters(distance: number): SearchEvent {
        this.params.set('maximum_distance', String(distance));
        return this;
    }

    setLocationMaximumDistanceInKilometers(distance: number): SearchEvent {
        this.setLocationMaximumDistanceInMeters(distance * 1000);
        return this;
    }

    setOrder(order: SortOrder): SearchEvent {
        this.params.set('sort_order', order);
        return this;
    }

    setDateField(f: EventDateField): SearchEvent {
        this.params.set('date_field', f);
        return this;
    }

}
