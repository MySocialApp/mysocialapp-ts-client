import { SearchBuilder } from "./search";
import { SimpleLocation } from "../models/simple_location";
import { SortOrder } from "../models/sort_order";
import { Gender } from "../models/gender";
export declare class SearchGroup extends SearchBuilder {
    constructor();
    setName(value: string): SearchGroup;
    setOwnerFirstName(value: string): SearchGroup;
    setOwnerLastName(value: string): SearchGroup;
    setGender(value: Gender): SearchGroup;
    setLocation(loc: SimpleLocation): SearchGroup;
    setLocationMaximumDistanceInMeters(distance: number): SearchGroup;
    setLocationMaximumDistanceInKilometers(distance: number): SearchGroup;
    setOrder(order: SortOrder): SearchGroup;
}
