import {User} from "./user";
import {Feed} from "./feed";
import {Group} from "./group";
import {Event} from "./event";
import {Model} from "./model";

export class SearchResultTypes extends Model {
    private _users?: UserSearchResult;
    private _feeds?: FeedsSearchResult;
    private _groups?: GroupSearchResult;
    private _events?: EventSearchResult;

    set USER(o: UserSearchResult) {
        this._users = new UserSearchResult(o, this.conf);
    }

    get USER(): UserSearchResult {
        return this._users;
    }

    get user(): UserSearchResult {
        return this.USER;
    }

    set FEED(o: FeedsSearchResult) {
        this._feeds = new FeedsSearchResult(o, this.conf);
    }

    get FEED(): FeedsSearchResult {
        return this._feeds;
    }

    get feed(): FeedsSearchResult {
        return this.FEED;
    }

    set GROUP(o: GroupSearchResult) {
        this._groups = new GroupSearchResult(o, this.conf);
    }

    get GROUP(): GroupSearchResult {
        return this._groups;
    }

    get group(): GroupSearchResult {
        return this.GROUP;
    }

    set EVENT(o: EventSearchResult) {
        this._events = new EventSearchResult(o, this.conf);
    }

    get EVENT(): EventSearchResult {
        return this._events;
    }

    get event(): EventSearchResult {
        return this.EVENT;
    }
}

interface SearchResultValue<T> {
    matched_count: number;
    data: T[];
}

export class UserSearchResult extends Model implements SearchResultValue<User> {
    matched_count: number;
    private _data: User[];

    set data(users: User[]) {
        if (!users) {
            return
        }
        let list: User[] = [];
        for (let user of users) {
            list.push(new User(user, this.conf));
        }
        this._data = list;
    }

    get data(): User[] {
        return this._data;
    }
}

export class FeedsSearchResult extends Model implements SearchResultValue<Feed> {
    matched_count: number;
    private _data: Feed[];

    set data(feeds: Feed[]) {
        if (!feeds) {
            return
        }
        let list: Feed[] = [];
        for (let feed of feeds) {
            list.push(new Feed(feed, this.conf));
        }
        this._data = list;
    }

    get data(): Feed[] {
        return this._data;
    }
}

export class GroupSearchResult extends Model implements SearchResultValue<Group> {
    matched_count: number;
    private _data: Group[];

    set data(groups: Group[]) {
        if (!groups) {
            return
        }
        let list: Group[] = [];
        for (let group of groups) {
            list.push(new Group(group, this.conf));
        }
        this._data = list;
    }

    get data(): Group[] {
        return this._data;
    }
}

export class EventSearchResult extends Model implements SearchResultValue<Event> {
    matched_count: number;
    private _data: Event[];

    set data(events: Event[]) {
        if (!events) {
            return
        }
        let list: Event[] = [];
        for (let event of events) {
            list.push(new Event(event, this.conf));
        }
        this._data = list;
    }

    get data(): Event[] {
        return this._data;
    }
}