import { Serializable } from "./model";
import { SimpleLocation } from "./simple_location";
export declare class Location implements Serializable {
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
    constructor(o?: {});
    getJsonParameters(): {};
    toJson(): string;
    latitude: number;
    longitude: number;
    location: SimpleLocation;
}
