import * as _ from 'lodash';

export interface ModelInterface {
    load(o: object)
}

export class Model implements ModelInterface {
    load(o: any) {
        console.log(o);
        _.forOwn(o, (value, key) => //This binds `this`
        {
            this[key] = value
        });
    }

    constructor(o?: object) {
        if (o !== undefined) {
            this.load(o);
        }
    }
}