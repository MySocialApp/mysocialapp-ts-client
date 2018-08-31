import { Rest } from "./rest";
import { Comment } from "../models/comment";
import { TagEntities } from "../models/tag_entities";
import { FileData } from "../models/file";
export declare class RestPhotoComment extends Rest {
    list(photoId: string): Promise<Comment[]>;
    create(photoId: string, comment: Comment): Promise<Comment>;
    createPhoto(photoId: string, photo: FileData, message?: string, tagEntities?: TagEntities, albumName?: string): Promise<Comment>;
}
