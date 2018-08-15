import {FluentAbstract} from "./fluent_abstract";
import {User} from "./models/user";

export class FluentUser extends FluentAbstract {
    async list(page: number, size: number = 10, params = {}): User[] {
        return this.session.clientService.user.list(page, undefined, size, undefined, params);
    }

    async get(id: string): User {
        return this.session.clientService.user.get(id);
    }

    async getByExternalId(id: string): User {
        return this.session.clientService.userExternal.get(id);
    }

    /**
     * TODO : complete search with search builder
     * @param {{}} search
     * @param {number} page
     * @param {number} size
     * @returns {Promise<User[]>}
     */
    async search(search: {}, page: number, size: number = 10): User[] {
        return this.session.clientService.user.list(page, undefined, size);
    }
}