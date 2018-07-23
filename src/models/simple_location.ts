export class SimpleLocation {
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
}