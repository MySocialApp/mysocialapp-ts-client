import {Configuration} from "../configuration";

module "msa";

export class Rest {
    protected conf: Configuration;

    constructor(o: {}) {
        for (let i in o) {
            this[i] = o;
        }
    }
}