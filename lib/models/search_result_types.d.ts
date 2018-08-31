import { User } from "./user";
import { Feed } from "./feed";
import { Group } from "./group";
import { Event } from "./event";
import { Model } from "./model";
export declare class SearchResultTypes extends Model {
    private _users?;
    private _feeds?;
    private _groups?;
    private _events?;
    users: UserSearchResult;
    feeds: FeedsSearchResult;
    groups: GroupSearchResult;
    events: EventSearchResult;
}
interface SearchResultValue<T> {
    matched_count: number;
    data: T[];
}
export declare class UserSearchResult extends Model implements SearchResultValue<User> {
    matched_count: number;
    _data: User[];
    data: User[];
}
export declare class FeedsSearchResult extends Model implements SearchResultValue<Feed> {
    matched_count: number;
    _data: Feed[];
    data: Feed[];
}
export declare class GroupSearchResult extends Model implements SearchResultValue<Group> {
    matched_count: number;
    _data: Group[];
    data: Group[];
}
export declare class EventSearchResult extends Model implements SearchResultValue<Event> {
    matched_count: number;
    _data: Event[];
    data: Event[];
}
export {};
