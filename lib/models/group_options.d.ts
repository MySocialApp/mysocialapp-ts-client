import { BaseLocation } from "./base_location";
export declare class GroupOptions {
    private _sort;
    private _location;
    private _limited;
    setSort(s: string): GroupOptions;
    setLimited(v: boolean): GroupOptions;
    setLocation(location: BaseLocation): GroupOptions;
    toQueryParams(): {};
}
