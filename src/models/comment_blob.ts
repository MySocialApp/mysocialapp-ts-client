import {Comment} from "./comment";
import {Model} from "./model";
import moment = require("moment");

export class CommentBlob extends Model {
    total: number;
    _samples: Comment[];
    _friendComments: [string,string][];

    get samples(): Comment[] {
        return this._samples;
    }

    set samples(comments: Comment[]) {
        let list = [] as Comment[];
        for (let comment of comments) {
            list.push(new Comment(comment, this.conf));
        }
        this._samples = list;
    }

    get friendComments(): [string,moment.Moment][] {
        if (this._friendComments != null) {
            return this._friendComments.map(t => [t[0],moment(t[1])] as [string,moment.Moment]);
        }
    }
}