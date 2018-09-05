import {SearchBuilder} from "./search";
import {SimpleLocation} from "../models/simple_location";
import {SortOrder} from "../models/sort_order";
import {SearchType} from "../models/search_type";

export class SearchGroup extends SearchBuilder {

    constructor() {
        super();
        this.params.set("type", SearchType.User);
    }

    setFullName(value: string): SearchGroup {
        this.params.set("q", value);
        return this;
    }

    setLocation(loc: SimpleLocation): SearchGroup {
        this.params.set("location", String(loc.latitude) + "," + String(loc.longitude));
        return this;
    }

    setOrder(order: SortOrder): SearchGroup {
        this.params.set('sort_order', order);
        return this;
    }

}