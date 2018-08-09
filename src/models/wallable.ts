import {User} from "./user";
import {BaseWall} from "./base_wall";
import {TagEntities} from "./tag_entities";
import {Like} from "./like";
import {CommentPost} from "./comment_post";
import {Comment} from "./comment";

export interface Wallable {
    created_date: string;
    owner?: User;
    base_target?: BaseWall;
    base_object?: BaseWall;
    body_message?: string;
    body_message_tag_entities?: TagEntities;
    body_image_url?: string;
    body_image_text?: string;
    first_url_tag_entities?: string;
    location?: Location;

    getLikes(): Promise<Like[]>;

    addLike(): Promise<Like>;

    deleteLike(): Promise<void>;

    getComments(): Promise<Comment[]>;

    addComment(commentPost: CommentPost): Promise<Comment>;

    ignore(): Promise<void>;

    abuse(): Promise<void>;

    delete(): Promise<void>;
}