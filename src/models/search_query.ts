import {User} from "./user";

export class SearchQuery {
    private _user?: User;
    q?: string;
    name?: string;
    content?: string;
    maximum_distance_in_meters?: number;
    sort_order?: string;
    start_date?: string;
    end_date?: string;
    date_field?: string;

    get user(): User {
        return this._user;
    }

    set user(u: User) {
        this._user = new User(u);
    }
}