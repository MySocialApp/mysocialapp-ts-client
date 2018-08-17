import { FluentAbstract } from "./fluent_abstract";
import { Group } from "./models/group";
export declare class FluentGroup extends FluentAbstract {
    list(page: number, size?: number, options?: {}): Promise<Group[]>;
    stream(): {};
    get(id: string): Promise<Group>;
    create(group: Group): Promise<Group>;
    /**
     * TODO : complete search with search builder
     * @param {{}} search
     * @param {number} page
     * @param {number} size
     * @returns {Promise<Group[]>}
     */
    search(search: {}, page: number, size?: number): Promise<Group[]>;
}
