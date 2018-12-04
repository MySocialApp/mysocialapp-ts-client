import {Like} from "./like";
import {Model} from "./model";

export class LikeBlob extends Model {
    total: number;
    has_like: boolean;
    _samples: Like[];

    get samples(): Like[] {
        return this._samples;
    }

    set samples(likes: Like[]) {
        this._samples = [] as Like[];
        for (let l of likes) {
            this._samples.push(new Like(l, this.conf));
        }
    }
}