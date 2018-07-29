import { Configuration } from "../configuration";
export declare class Rest {
    protected conf: Configuration;
    constructor(conf: Configuration);
    static params(path: string, params: {}): string;
    static encodeQueryData(data: {}): string;
}
