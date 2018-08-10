import {FluentAbstract} from "./fluent_abstract";
import {User} from "./models/user";

export class FluentUser extends FluentAbstract {
    list(page: number, size: number = 10, params = {}): Promise<User[]> {
        return this.session.clientService.user.list(page, undefined, size, undefined, params);
    }

    get(id: string): Promise<User> {
        return this.session.clientService.user.get(id);
    }

    getByExternalId(id: string): Promise<User> {
        return this.session.clientService.userExternal.get(id);
    }

    /**
     * TODO : complete search with search builder
     * @param {{}} search
     * @param {number} page
     * @param {number} size
     * @returns {Promise<User[]>}
     */
    search(search: {}, page: number, size: number = 10): Promise<User[]> {
        return this.session.clientService.user.list(page, undefined, size);
    }
}