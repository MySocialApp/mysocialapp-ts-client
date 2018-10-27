import { SearchBuilder } from "./search";
import { SimpleLocation } from "../models/simple_location";
import { SortOrder } from "../models/sort_order";
import { EventDateField } from "../models/event_options";
import moment = require("moment");
export declare class SearchEvent extends SearchBuilder {
    constructor();
    setFromDate(d: moment.Moment): SearchEvent;
    setToDate(d: moment.Moment): SearchEvent;
    setName(value: string): SearchEvent;
    setDescription(value: string): SearchEvent;
    setOwnerFirstName(value: string): SearchEvent;
    setOwnerLastName(value: string): SearchEvent;
    setLocation(loc: SimpleLocation): SearchEvent;
    setLocationMaximumDistanceInMeters(distance: number): SearchEvent;
    setLocationMaximumDistanceInKilometers(distance: number): SearchEvent;
    setOrder(order: SortOrder): SearchEvent;
    setDateField(f: EventDateField): SearchEvent;
}
