import { Rest } from "./rest";
import { Comment } from "../models/comment";
import { CommentPost } from "../models/comment_post";
import { TagEntities } from "../models/tag_entities";
import { FileData } from "../models/file";
export declare class RestFeedComment extends Rest {
    create(id: string, comment: CommentPost): Promise<Comment>;
    list(id: string): Promise<Comment[]>;
    addPhoto(id: string, photo: FileData, message?: string, tagEntities?: TagEntities): Promise<Comment>;
}
