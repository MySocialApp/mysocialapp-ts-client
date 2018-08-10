import {FluentAbstract} from "./fluent_abstract";
import {PhotoAlbum} from "./models/photo_album";

export class FluentPhotoAlbum extends FluentAbstract {
    list(page: number, size: number = 10): Promise<PhotoAlbum[]> {
        return this.session.clientService.photoAlbum.list(page, size);
    }

    get(id: string): Promise<PhotoAlbum> {
        return this.session.clientService.photoAlbum.get(id);
    }

    delete(id: string): Promise<void> {
        return this.session.clientService.photoAlbum.delete(id);
    }
}