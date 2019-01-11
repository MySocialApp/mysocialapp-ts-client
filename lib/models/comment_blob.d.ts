import { Comment } from "./comment";
import { Model } from "./model";
import moment = require("moment");
export declare class CommentBlob extends Model {
    total: number;
    _samples: Comment[];
    _friendComments: [string, string][];
    samples: Comment[];
    readonly friendComments: [string, moment.Moment][];
}
