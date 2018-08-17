"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SimpleLocation {
    constructor(o) {
        if (o !== undefined && o['latitude'] !== undefined) {
            this.latitude = o['latitude'];
        }
        if (o !== undefined && o['longitude'] !== undefined) {
            this.longitude = o['longitude'];
        }
    }
    toJson() {
        return JSON.stringify(this.getJsonParameters());
    }
    getJsonParameters() {
        return {
            latitude: this.latitude,
            longitude: this.longitude,
        };
    }
}
exports.SimpleLocation = SimpleLocation;
