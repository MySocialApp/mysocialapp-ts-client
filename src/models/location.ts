import {Model} from "./model";
import {SimpleLocation} from "./simple_location";

export class Location extends Model {
    country?: string;
    distrinct?: string;
    state?: string;
    postal_code: string;
    city?: string;
    street_name?: string;
    street_number?: string;
    complete_address?: string;
    complete_city_address?: string;
    _location: SimpleLocation;

    getJsonParameters(): {} {
        return {
            location: this._location.getJsonParameters()
        };
    }

    set latitude(l: number) {
        if (this.location === undefined) {
            this.location = new SimpleLocation();
        }
        this.location.latitude = l;
    }

    get latitude(): number {
        return this.location ? this.location.latitude : null;
    }

    set longitude(l: number) {
        if (this.location === undefined) {
            this.location = new SimpleLocation();
        }
        this.location.longitude = l;
    }

    get longitude(): number {
        return this.location ? this.location.longitude : null;
    }

    set location(location: SimpleLocation) {
        this._location = new SimpleLocation(location);
        return this;
    }

    get location(): SimpleLocation {
        return this._location;
    }
}