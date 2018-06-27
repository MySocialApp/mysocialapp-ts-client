module 'msa'

export class ClientConfiguration {
    readTimeout: number = 10000;
    writeTimeout: number = 10000;
    headersToInclude: { [key: string]: string; } = {};
    debug: boolean = false;

    constructor(o?: { [key: string]: any; }) {
        if (o !== undefined) {
            for (let i in o) {
                this[i] = o[i];
            }

        }
    }
}