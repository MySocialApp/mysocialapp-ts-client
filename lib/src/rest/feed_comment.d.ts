import { Rest } from "./rest";
import { Comment } from "../models/comment";
import { CommentPost } from "../models/comment_post";
export declare class RestFeedComment extends Rest {
    add(id: string, comment: CommentPost): Promise<Comment>;
    list(id: string): Promise<Comment[]>;
}
