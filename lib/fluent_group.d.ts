/// <reference types="node" />
import { FluentAbstract } from "./fluent_abstract";
import { Group } from "./models/group";
import { CustomField } from "./models/custom_field";
import { GroupOptions } from "./models/group_options";
import { SearchGroup } from "./search/group";
import { SearchResults } from "./models/search_results";
export declare class FluentGroup extends FluentAbstract {
    list(page: number, size?: number, options?: GroupOptions): Promise<Group[]>;
    stream(): AsyncIterableIterator<Group>;
    get(id: string, limited?: boolean): Promise<Group>;
    create(group: Group): Promise<Group>;
    search(search: SearchGroup, page: number, size?: number): Promise<SearchResults>;
    getAvailableCustomFields(): Promise<CustomField[]>;
}
