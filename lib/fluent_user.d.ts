import { FluentAbstract } from "./fluent_abstract";
import { User } from "./models/user";
export declare class FluentUser extends FluentAbstract {
    list(page: number, size?: number, params?: {}): Promise<User[]>;
    get(id: string): Promise<User>;
    getByExternalId(id: string): Promise<User>;
    /**
     * TODO : complete search with search builder
     * @param {{}} search
     * @param {number} page
     * @param {number} size
     * @returns {Promise<User[]>}
     */
    search(search: {}, page: number, size?: number): Promise<User[]>;
}
