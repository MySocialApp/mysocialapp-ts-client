import {Comment} from "./comment";
import {Model} from "./model";

export class CommentBlob extends Model {
    total: number;
    _samples: Comment[];

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
}