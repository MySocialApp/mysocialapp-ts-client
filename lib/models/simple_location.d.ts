import { Serializable } from "./model";
export declare class SimpleLocation implements Serializable {
    latitude: number;
    longitude: number;
    constructor(o?: {});
    toJson(): string;
    getJsonParameters(): {};
}
