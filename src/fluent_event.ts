import {FluentAbstract} from "./fluent_abstract";
import {Event} from "./models/event";

export class FluentEvent extends FluentAbstract {
    async list(page: number, size: number = 10, options: {} = {}): Event[] {
        return this.session.clientService.event.list(page, undefined, size, undefined, options);
    }

    async get(id: string): Event {
        return this.session.clientService.event.get(id);
    }

    async create(event: Event): Event {
        return this.session.clientService.event.create(event);
    }

    /**
     * TODO : complete search with search builder
     * @param {{}} search
     * @param {number} page
     * @param {number} size
     * @returns {Promise<Event[]>}
     */
    async search(search: {}, page: number, size: number = 10): Event[] {
        return this.session.clientService.event.list(page, undefined, size);
    }
}