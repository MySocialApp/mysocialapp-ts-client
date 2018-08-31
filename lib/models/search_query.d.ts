import { User } from "./user";
export declare class SearchQuery {
    private _user?;
    q?: string;
    name?: string;
    content?: string;
    maximum_distance_in_meters?: number;
    sort_order?: string;
    start_date?: string;
    end_date?: string;
    date_field?: string;
    user: User;
}
