import { FluentAbstract } from "./fluent_abstract";
import { User } from "./models/user";
import { SearchUser } from "./search/user";
import { SearchResults } from "./models/search_results";
import { Users } from "./models/users";
export declare class FluentUser extends FluentAbstract {
    list(page: number, size?: number, params?: {}): Promise<Users>;
    get(id: string): Promise<User>;
    getByExternalId(id: string): Promise<User>;
    search(search: SearchUser, page: number, size?: number): Promise<SearchResults>;
}
