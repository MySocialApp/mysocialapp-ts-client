import {FluentAbstract} from "./fluent_abstract";
import {Event} from "./models/event";
import {CustomField} from "./models/custom_field";
import {EventOptions} from "./models/event_options";
import {SearchEvent} from "./search/event";
import {SearchResults} from "./models/search_results";

export class FluentEvent extends FluentAbstract {
    async list(page: number, size: number = 10, search?: EventOptions): Promise<Event[]> {
        if (!search) {
            search = new EventOptions();
        }
        search.setPage(page).setSize(size);
        return this.session.clientService.event.listFromParams(search.toQueryParams());
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

    /**
     * if limited = true in received full information about event
     * - free_seats
     * - taken_seats
     * - members
     *
     * @param id
     * @param limited
     */
    async get(id: string, limited: boolean = true): Promise<Event> {
        return this.session.clientService.event.get(id, limited);
    }

    async create(event: Event): Promise<Event> {
        return this.session.clientService.event.create(event);
    }

    async search(search: SearchEvent, page: number, size: number = 10): Promise<SearchResults> {
        return this.session.clientService.search.get(page, size, search.toQueryParams());
    }

    async getAvailableCustomFields(): Promise<CustomField[]> {
        return this.session.clientService.event.getCustomFields();
    }
}