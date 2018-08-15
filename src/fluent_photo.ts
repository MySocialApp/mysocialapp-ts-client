import {FluentAbstract} from "./fluent_abstract";
import {Photo} from "./models/photo";

export class FluentPhoto extends FluentAbstract {
    async list(page: number, size: number = 10): Photo[] {
        return this.session.clientService.photo.list(page, size);
    }

    async get(id: string): Photo {
        return this.session.clientService.photo.get(id);
    }

    async create(file: File, photo: Photo): Photo {
        let resp = await this.session.clientService.photo.create(file, photo.message, photo.tag_entities);
        return new Photo(resp.object);
    }

    async delete(id: string): void {
        return this.session.clientService.photo.delete(id);
    }
}