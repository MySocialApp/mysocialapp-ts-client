import {FluentAbstract} from "./fluent_abstract";
import {Group} from "./models/group";
import {Event} from "./models/event";

export class FluentGroup extends FluentAbstract {

    list(page: number, size: number = 10, options: {} = {}): Promise<Group[]> {
        return this.session.clientService.group.list(page, undefined, size, undefined, options);
    }

    get(id: string): Promise<Group> {
        return this.session.clientService.group.get(id);
    }


    create(group: Group): Promise<Group> {
        return this.session.clientService.group.create(group);
    }

    /**
     * TODO : complete search with search builder
     * @param {{}} search
     * @param {number} page
     * @param {number} size
     * @returns {Promise<Group[]>}
     */
    search(search: {}, page: number, size: number = 10): Promise<Group[]> {
        return this.session.clientService.group.list(page, undefined, size);
    }
}