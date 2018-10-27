import {SearchBuilder} from "./search";
import {Gender} from "../models/gender";
import {SimpleLocation} from "../models/simple_location";
import {SortOrder} from "../models/sort_order";
import {SearchType} from "../models/search_type";
import {BaseLocation} from "../models/base_location";

export class SearchUser extends SearchBuilder {

    constructor() {
        super();
        this.params.set("type", SearchType.User);
    }

    setFirstName(value: string): SearchUser {
        this.params.set("first_name", value);
        return this;
    }

    setLastName(value: string): SearchUser {
        this.params.set("last_name", value);
        return this;
    }

    setGender(value: Gender): SearchUser {
        this.params.set("gender_name", value);
        return this;
    }

    setLocation(loc: BaseLocation): SearchUser {
        this.params.set("latitude", String(loc.latitude));
        this.params.set("longitude", String(loc.longitude));
        return this;
    }

    setLivingLocationMaximumDistanceInMeters(distance: number): SearchUser {
        this.params.set('maximum_distance_in_meters', String(distance));
        return this;
    }

    setLivingLocationMaximumDistanceInKilometers(distance: number): SearchUser {
        this.setLivingLocationMaximumDistanceInMeters(distance * 1000);
        return this;
    }

    setPresentation(value: string): SearchUser {
        this.params.set("presentation", value);
        return this;
    }

    setOrder(order: SortOrder): SearchUser {
        this.params.set('sort_order', order);
        return this;
    }

}