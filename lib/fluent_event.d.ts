import { FluentAbstract } from "./fluent_abstract";
import { Event } from "./models/event";
export declare class FluentEvent extends FluentAbstract {
    list(page: number, size?: number, options?: {}): Promise<Event[]>;
    stream(): {};
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
}
