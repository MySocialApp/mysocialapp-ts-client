import {SearchBuilder} from "./search";
import {SimpleLocation} from "../models/simple_location";
import {SortOrder} from "../models/sort_order";
import {SearchType} from "../models/search_type";
import {Gender} from "../models/gender";

export class SearchGroup extends SearchBuilder {

    constructor() {
        super();
        this.params.set("type", SearchType.Group);
    }

    setName(value: string): SearchGroup {
        this.params.set("name", value);
        return this;
    }

    setOwnerFirstName(value: string): SearchGroup {
        this.params.set("first_name", value);
        return this;
    }

    setOwnerLastName(value: string): SearchGroup {
        this.params.set("last_name", value);
        return this;
    }

    setGender(value: Gender): SearchGroup {
        this.params.set("gender", value);
        return this;
    }

    setLocation(loc: SimpleLocation): SearchGroup {
        this.params.set("latitude", String(loc.latitude));
        this.params.set("longitude", String(loc.longitude));
        return this;
    }

    setLocationMaximumDistanceInMeters(distance: number): SearchGroup {
        this.params.set('maximum_distance', String(distance));
        return this;
    }

    setLocationMaximumDistanceInKilometers(distance: number): SearchGroup {
        this.setLocationMaximumDistanceInMeters(distance * 1000);
        return this;
    }

    setOrder(order: SortOrder): SearchGroup {
        this.params.set('sort_order', order);
        return this;
    }

}
