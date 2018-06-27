module "msa";

export class Model {
    constructor(o: {}) {
        for (let i in o) {
            this[i] = o;
        }
    }
}