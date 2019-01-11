import {Like} from "./like";
import {Model} from "./model";
import moment = require("moment");

export class LikeBlob extends Model {
    total: number;
    has_like: boolean;
    _samples: Like[];
    _friendLikes: [string,string][];

    get samples(): Like[] {
        return this._samples;
    }

    set samples(likes: Like[]) {
        this._samples = [] as Like[];
        for (let l of likes) {
            this._samples.push(new Like(l, this.conf));
        }
    }

    get friendLikes(): [string,moment.Moment][] {
        if (this._friendLikes != null) {
            return this._friendLikes.map(t => [t[0],moment(t[1])] as [string,moment.Moment]);
        }
    }
}