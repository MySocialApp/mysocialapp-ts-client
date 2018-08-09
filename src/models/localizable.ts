import {BaseLocation} from "./base_location";

export interface Localizable {
    getLocality(): BaseLocation;
}