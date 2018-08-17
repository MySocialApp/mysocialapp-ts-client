import { Rest } from "./rest";
import { Comment } from "../models/comment";
import { Photo } from "../models/photo";
import { TagEntities } from "../models/tag_entities";
export declare class RestStatusComment extends Rest {
    list(statusId: string): Promise<Comment[]>;
    create(statusId: string, comment: Comment): Promise<Comment>;
    update(statusId: string, commentId: string, comment: Comment): Promise<Comment>;
    createPhoto(statusId: string, photo: File, message?: string, tagEntities?: TagEntities): Promise<Photo>;
}
