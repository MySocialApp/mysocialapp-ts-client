import { Configuration } from "../configuration";
export interface ModelInterface {
    load(o: object, conf: Configuration): any;
}
export interface Serializable {
    toJson(): string;
}
export declare class Model implements ModelInterface, Serializable {
    protected conf: Configuration;
    load(o: any, conf?: Configuration): void;
    constructor(o?: {}, conf?: Configuration);
    toJson(): string;
}
