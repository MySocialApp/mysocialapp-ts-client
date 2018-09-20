import { SearchBuilder } from "./search";
import { Gender } from "../models/gender";
import { SimpleLocation } from "../models/simple_location";
import { SortOrder } from "../models/sort_order";
export declare class SearchUser extends SearchBuilder {
    constructor();
    setFullName(value: string): SearchUser;
    setFirstName(value: string): SearchUser;
    setLastName(value: string): SearchUser;
    setGender(value: Gender): SearchUser;
    setLocation(loc: SimpleLocation): SearchUser;
    setLivingLocationMaximumDistanceInMeters(distance: number): SearchUser;
    setLivingLocationMaximumDistanceInKilometers(distance: number): SearchUser;
    setPresentation(value: string): SearchUser;
    setOrder(order: SortOrder): SearchUser;
}
