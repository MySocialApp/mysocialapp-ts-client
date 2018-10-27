import {FluentAbstract} from "./fluent_abstract";
import {Group} from "./models/group";
import {CustomField} from "./models/custom_field";
import {GroupOptions} from "./models/group_options";
import {SearchGroup} from "./search/group";
import {SearchResults} from "./models/search_results";

export class FluentGroup extends FluentAbstract {

    async list(page: number, size: number = 10, options?: GroupOptions): Promise<Group[]> {
        return this.session.clientService.group.list(page, undefined, size, undefined, options.toQueryParams());
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

    async search(search: SearchGroup, page: number, size: number = 10): Promise<SearchResults> {
        return this.session.clientService.search.get(page, size, search.toQueryParams());
    }

    async getAvailableCustomFields(): Promise<CustomField[]> {
        return this.session.clientService.group.getCustomFields();
    }
}