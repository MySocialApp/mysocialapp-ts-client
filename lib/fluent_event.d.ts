/// <reference types="node" />
import { FluentAbstract } from "./fluent_abstract";
import { Event } from "./models/event";
import { CustomField } from "./models/custom_field";
import { EventOptions } from "./models/event_options";
export declare class FluentEvent extends FluentAbstract {
    list(page: number, size?: number, search?: EventOptions): Promise<Event[]>;
    stream(): AsyncIterableIterator<Event>;
    get(id: string): Promise<Event>;
    create(event: Event): Promise<Event>;
    /**
     * TODO : complete search with search builder
     * @param {{}} search
     * @param {number} page
     * @param {number} size
     * @returns {Promise<Event[]>}
     */
    search(search: {}, page: number, size?: number): Promise<Event[]>;
    getAvailableCustomFields(): Promise<CustomField[]>;
}
