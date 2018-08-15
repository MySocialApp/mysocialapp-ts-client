import {FluentAbstract} from "./fluent_abstract";
import {PhotoAlbum} from "./models/photo_album";

export class FluentPhotoAlbum extends FluentAbstract {
    async list(page: number, size: number = 10): PhotoAlbum[] {
        return this.session.clientService.photoAlbum.list(page, size);
    }

    async get(id: string): PhotoAlbum {
        return this.session.clientService.photoAlbum.get(id);
    }

    async delete(id: string): void {
        return this.session.clientService.photoAlbum.delete(id);
    }
}