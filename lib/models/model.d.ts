import { Configuration } from "../configuration";
export interface ModelInterface {
    load(o: object, conf: Configuration): any;
}
export interface Serializable {
    toJson(): string;
    getJsonParameters(): {};
}
export declare class Model implements ModelInterface, Serializable {
    protected conf: Configuration;
    load(o: any, conf?: Configuration): void;
    constructor(o?: {}, conf?: Configuration);
    toJson(): string;
    getJsonParameters(): {};
}
