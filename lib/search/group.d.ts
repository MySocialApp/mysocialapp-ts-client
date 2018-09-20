import { SearchBuilder } from "./search";
import { SimpleLocation } from "../models/simple_location";
import { SortOrder } from "../models/sort_order";
export declare class SearchGroup extends SearchBuilder {
    constructor();
    setFullName(value: string): SearchGroup;
    setLocation(loc: SimpleLocation): SearchGroup;
    setOrder(order: SortOrder): SearchGroup;
}
