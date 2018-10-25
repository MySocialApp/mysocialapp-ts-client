import {FluentAbstract} from "./fluent_abstract";
import {Group} from "./models/group";
import {CustomField} from "./models/custom_field";

export class FluentGroup extends FluentAbstract {

    async list(page: number, size: number = 10, options: {} = {}): Promise<Group[]> {
        return this.session.clientService.group.list(page, undefined, size, undefined, options);
    }

    async* stream() {
        let page = 0;
        while (true) {
            let feeds = await this.list(page++);
            if (!feeds.length) {
                return;
            }
            for (let feed of feeds) {
                yield feed;
            }
        }
    }

    async get(id: string): Promise<Group> {
        return this.session.clientService.group.get(id);
    }


    async create(group: Group): Promise<Group> {
        return this.session.clientService.group.create(group);
    }

    /**
     * TODO : complete search with search builder
     * @param {{}} search
     * @param {number} page
     * @param {number} size
     * @returns {Promise<Group[]>}
     */
    async search(search: {}, page: number, size: number = 10): Promise<Group[]> {
        return this.session.clientService.group.list(page, undefined, size);
    }

    async getAvailableCustomFields(): Promise<CustomField[]> {
        return this.session.clientService.group.getCustomFields();
    }
}