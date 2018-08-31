import { Rest } from "./rest";
import { Comment } from "../models/comment";
import { Photo } from "../models/photo";
import { TagEntities } from "../models/tag_entities";
import { FileData } from "../models/file";
import { CommentPost } from "../models/comment_post";
export declare class RestStatusComment extends Rest {
    list(statusId: string): Promise<Comment[]>;
    create(statusId: string, comment: CommentPost): Promise<Comment>;
    update(statusId: string, commentId: string, comment: Comment): Promise<Comment>;
    createPhoto(statusId: string, photo: FileData, message?: string, tagEntities?: TagEntities): Promise<Photo>;
}
