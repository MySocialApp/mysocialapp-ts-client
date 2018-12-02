import {TagEntityAbstract} from "./tag_entity_abstract";
import {User} from "./user";
import {Feed} from "./feed";

export class UserMentionTag extends TagEntityAbstract {
    private _mentioned_user?: User;
    private _target?: Feed;
    start_index: number;
    end_index: number;

    get text(): string {
        return this.mentioned_user ? this.mentioned_user.displayed_name : "";
    }

    set text(t: string) {
        // TODO?
    }

    get text_shown(): string {
        // TODO
        return ""
    }

    get indices(): number[] {
        return [this.start_index, this.end_index];
    }

    set indices(indices: number[]) {
        if (!indices) {
            return
        }

        if (indices.length == 2) {
            this.start_index = indices[0];
            this.end_index = indices[1];
            return
        }
    }

    get mentioned_user(): User {
        return this._mentioned_user;
    }

    set mentioned_user(u: User) {
        this._mentioned_user = new User(u);
    }

    get target(): Feed {
        return this._target;
    }

    set target(u: Feed) {
        this._target = new Feed(u);
    }
}