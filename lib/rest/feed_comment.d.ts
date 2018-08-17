import { Rest } from "./rest";
import { Comment } from "../models/comment";
import { CommentPost } from "../models/comment_post";
import { TagEntities } from "../models/tag_entities";
export declare class RestFeedComment extends Rest {
    create(id: string, comment: CommentPost): Promise<Comment>;
    list(id: string): Promise<Comment[]>;
    addPhoto(id: string, photo: File, message?: string, tagEntities?: TagEntities): Promise<Comment>;
}
