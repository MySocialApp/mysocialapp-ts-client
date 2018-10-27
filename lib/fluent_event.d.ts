/// <reference types="node" />
import { FluentAbstract } from "./fluent_abstract";
import { Event } from "./models/event";
import { CustomField } from "./models/custom_field";
import { EventOptions } from "./models/event_options";
import { SearchEvent } from "./search/event";
import { SearchResults } from "./models/search_results";
export declare class FluentEvent extends FluentAbstract {
    list(page: number, size?: number, search?: EventOptions): Promise<Event[]>;
    stream(): AsyncIterableIterator<Event>;
    get(id: string): Promise<Event>;
    create(event: Event): Promise<Event>;
    search(search: SearchEvent, page: number, size?: number): Promise<SearchResults>;
    getAvailableCustomFields(): Promise<CustomField[]>;
}
