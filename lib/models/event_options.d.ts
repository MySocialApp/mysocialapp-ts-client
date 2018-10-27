import { BaseLocation } from "./base_location";
import moment = require("moment");
export declare class EventOptions {
    private _page;
    private _size;
    private _limited;
    private _location;
    private _from_date;
    private _date_field;
    private _sort;
    setPage(p: number): EventOptions;
    setSize(s: number): EventOptions;
    setSortField(sortField: string): EventOptions;
    setDateField(v: EventDateField): EventOptions;
    setFromDate(date: moment.Moment): EventOptions;
    setLimited(v: boolean): EventOptions;
    setLocation(location: BaseLocation): EventOptions;
    toQueryParams(): {};
}
export declare enum EventDateField {
    StartDate = "start_date",
    EndDate = "end_date"
}
