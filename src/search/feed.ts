import {SearchBuilder} from "./search";
import {SimpleLocation} from "../models/simple_location";
import {SortOrder} from "../models/sort_order";
import {SearchType} from "../models/search_type";
import {Gender} from "../models/gender";

export class SearchFeed extends SearchBuilder {

    constructor() {
        super();
        this.params.set("type", SearchType.Feed);
    }

    setName(value: string): SearchFeed {
        this.params.set("name", value);
        return this;
    }

    setOwnerFirstName(value: string): SearchFeed {
        this.params.set("first_name", value);
        return this;
    }

    setOwnerLastName(value: string): SearchFeed {
        this.params.set("last_name", value);
        return this;
    }

    setOwnerGender(value: Gender): SearchFeed {
        this.params.set("gender", value);
        return this;
    }

    setOwnerLivingLocation(loc: SimpleLocation): SearchFeed {
        this.params.set("latitude", String(loc.latitude));
        this.params.set("longitude", String(loc.longitude));
        return this;
    }

    setOwnerLivingLocationMaximumDistanceInMeters(distance: number): SearchFeed {
        this.params.set('maximum_distance', String(distance));
        return this;
    }

    setOwnerLivingLocationMaximumDistanceInKilometers(distance: number): SearchFeed {
        this.setOwnerLivingLocationMaximumDistanceInMeters(distance * 1000);
        return this;
    }

    setTextToSearch(text: string): SearchFeed {
        this.params.set("q", text);
        return this;
    }

    setOrder(order: SortOrder): SearchFeed {
        this.params.set('sort_order', order);
        return this;
    }

}
