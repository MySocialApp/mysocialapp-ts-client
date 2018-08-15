import {Serializable} from "./model";

export class SimpleLocation implements Serializable {
    latitude: number;
    longitude: number;

    constructor(o?: {}) {
        if (o !== undefined && o['latitude'] !== undefined) {
            this.latitude = o['latitude'];
        }
        if (o !== undefined && o['longitude'] !== undefined) {
            this.longitude = o['longitude'];
        }
    }

    toJson(): string {
        return JSON.stringify(this.getJsonParameters());
    }

    getJsonParameters(): {} {
        return {
            latitude: this.latitude,
            longitude: this.longitude,
        };
    }
}