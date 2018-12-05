import { Like } from "./like";
import { Model } from "./model";
export declare class LikeBlob extends Model {
    total: number;
    has_like: boolean;
    _samples: Like[];
    samples: Like[];
}
