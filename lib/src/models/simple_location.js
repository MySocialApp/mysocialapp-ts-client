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
}
exports.SimpleLocation = SimpleLocation;
