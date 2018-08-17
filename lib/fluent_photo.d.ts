import { FluentAbstract } from "./fluent_abstract";
import { Photo } from "./models/photo";
export declare class FluentPhoto extends FluentAbstract {
    list(page: number, size?: number): Promise<Photo[]>;
    get(id: string): Promise<Photo>;
    create(file: File, photo: Photo): Promise<Photo>;
    delete(id: string): Promise<void>;
}
