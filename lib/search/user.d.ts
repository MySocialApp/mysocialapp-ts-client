import { SearchBuilder } from "./search";
import { Gender } from "../models/gender";
import { SortOrder } from "../models/sort_order";
import { BaseLocation } from "../models/base_location";
export declare class SearchUser extends SearchBuilder {
    constructor();
    setFirstName(value: string): SearchUser;
    setLastName(value: string): SearchUser;
    setFullName(value: string): SearchUser;
    setGender(value: Gender): SearchUser;
    setLocation(loc: BaseLocation): SearchUser;
    setLivingLocationMaximumDistanceInMeters(distance: number): SearchUser;
    setLivingLocationMaximumDistanceInKilometers(distance: number): SearchUser;
    setPresentation(value: string): SearchUser;
    setOrder(order: SortOrder): SearchUser;
}
