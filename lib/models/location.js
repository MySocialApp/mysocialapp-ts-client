"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __importStar(require("lodash"));
const simple_location_1 = require("./simple_location");
class Location {
    constructor(o) {
        _.forOwn(o, (value, key) => {
            this[key] = value;
        });
    }
    getJsonParameters() {
        return {
            location: this._location.getJsonParameters()
        };
    }
    toJson() {
        return JSON.stringify(this.getJsonParameters());
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
