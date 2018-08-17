"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const simple_location_1 = require("./simple_location");
class Location extends model_1.Model {
    getJsonParameters() {
        return {
            location: this._location.getJsonParameters()
        };
    }
    set latitude(l) {
        if (this.location === undefined) {
            this.location = new simple_location_1.SimpleLocation();
        }
        this.location.latitude = l;
    }
    get latitude() {
        return this.location ? this.location.latitude : null;
    }
    set longitude(l) {
        if (this.location === undefined) {
            this.location = new simple_location_1.SimpleLocation();
        }
        this.location.longitude = l;
    }
    get longitude() {
        return this.location ? this.location.longitude : null;
    }
    set location(location) {
        this._location = new simple_location_1.SimpleLocation(location);
    }
    get location() {
        return this._location;
    }
}
exports.Location = Location;
