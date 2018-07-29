export declare class ClientConfiguration {
    readTimeout: number;
    writeTimeout: number;
    headersToInclude: {
        [key: string]: string;
    };
    debug: boolean;
    constructor(o?: {
        [key: string]: any;
    });
}
