import {FluentAbstract} from "./fluent_abstract";
import {Photo} from "./models/photo";

export class FluentPhoto extends FluentAbstract {
    list(page: number, size: number = 10): Promise<Photo[]> {
        return this.session.clientService.photo.list(page, size);
    }

    get(id: string): Promise<Photo> {
        return this.session.clientService.photo.get(id);
    }

    async create(file: File, photo: Photo): Promise<Photo> {
        let resp = await this.session.clientService.photo.create(file, photo.message, photo.tag_entities);
        return new Photo(resp.object);
    }

    delete(id: string): Promise<void> {
        return this.session.clientService.photo.delete(id);
    }
}