import { Like } from "./like";
import { Model } from "./model";
import moment = require("moment");
export declare class LikeBlob extends Model {
    total: number;
    has_like: boolean;
    _samples: Like[];
    _friendLikes: [string, string][];
    samples: Like[];
    readonly friendLikes: [string, moment.Moment][];
}
