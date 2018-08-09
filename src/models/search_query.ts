import {User} from "./user";

export class SearchQuery {
    user?: User;
    q?: string;
    name?: string;
    content?: string;
    maximum_distance_in_meters?: number;
    sort_order?: string;
    start_date?: string;
    end_date?: string;
    date_field?: string;
}