import { SearchBuilder } from "./search";
import { SimpleLocation } from "../models/simple_location";
import { SortOrder } from "../models/sort_order";
import { Gender } from "../models/gender";
export declare class SearchFeed extends SearchBuilder {
    constructor();
    setName(value: string): SearchFeed;
    setOwnerFirstName(value: string): SearchFeed;
    setOwnerLastName(value: string): SearchFeed;
    setOwnerGender(value: Gender): SearchFeed;
    setOwnerLivingLocation(loc: SimpleLocation): SearchFeed;
    setOwnerLivingLocationMaximumDistanceInMeters(distance: number): SearchFeed;
    setOwnerLivingLocationMaximumDistanceInKilometers(distance: number): SearchFeed;
    setTextToSearch(text: string): SearchFeed;
    setOrder(order: SortOrder): SearchFeed;
}
