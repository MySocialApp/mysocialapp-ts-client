import { FluentAbstract } from "./fluent_abstract";
import { Photo } from "./models/photo";
import { FileData } from "./models/file";
export declare class FluentPhoto extends FluentAbstract {
    list(page: number, size?: number): Promise<Photo[]>;
    get(id: string): Promise<Photo>;
    create(file: FileData, photo: Photo): Promise<Photo>;
    delete(id: string): Promise<void>;
}
