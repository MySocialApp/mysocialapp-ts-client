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
    USER: UserSearchResult;
    readonly user: UserSearchResult;
    FEED: FeedsSearchResult;
    readonly feed: FeedsSearchResult;
    GROUP: GroupSearchResult;
    readonly group: GroupSearchResult;
    EVENT: EventSearchResult;
    readonly event: EventSearchResult;
}
interface SearchResultValue<T> {
    matched_count: number;
    data: T[];
}
export declare class UserSearchResult extends Model implements SearchResultValue<User> {
    matched_count: number;
    private _data;
    data: User[];
}
export declare class FeedsSearchResult extends Model implements SearchResultValue<Feed> {
    matched_count: number;
    private _data;
    data: Feed[];
}
export declare class GroupSearchResult extends Model implements SearchResultValue<Group> {
    matched_count: number;
    private _data;
    data: Group[];
}
export declare class EventSearchResult extends Model implements SearchResultValue<Event> {
    matched_count: number;
    private _data;
    data: Event[];
}
export {};
