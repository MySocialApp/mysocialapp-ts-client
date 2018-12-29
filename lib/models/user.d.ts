import {Photo} from "./photo";
import {CustomField} from "./custom_field";
import {UserStat} from "./user_stat";
import {Status} from "./status";
import {Location} from "./location";
import {Flag} from "./flag";
import {Model} from "./model";
import {Gender} from "./gender";
import {Feed} from "./feed";
import {FeedPost} from "./feed_post";
import {PhotoAlbum} from "./photo_album";
import {ConversationMessagePost} from "./conversation_message_post";
import {ConversationMessage} from "./conversation_message";

export declare class User extends Model {
    private _profile_photo?;
    private _custom_fields?;
    private _living_location;
    private _current_status;
    private _flag;
    private _user_stat;
    private _displayed_photo;
    private _profile_cover_photo;
    id_str?: string;
    type?: string;
    displayed_name: string;
    created_date?: string;
    updated_date?: string;
    first_name?: string;
    last_name?: string;
    full_name?: string;
    password?: string;
    email?: string;
    gender?: Gender;
    date_of_birth?: string;
    presentation?: string;
    authorities?: string[];
    is_friend?: boolean;
    is_requested_as_friend?: boolean;
    is_following?: boolean;
    is_follower?: boolean;
    account_enabled?: boolean;
    account_expired?: boolean;
    getJsonParameters(): {};
    id: any;
    displayed_photo: Photo;
    profile_photo: Photo;
    profile_cover_photo: Photo;
    flag: Flag;
    living_location: Location;
    current_status: Status;
    user_stat: UserStat;
    custom_fields: CustomField[];
    /**
     * return true if field found
     * @param {string} id
     * @param value
     * @returns {boolean}
     */
    setCustomFieldValueById(id: string, value: any): boolean;
    userStat(): Promise<UserStat>;
    listNewsFeed(page: number, size: number): Promise<Feed[]>;
    createFeedPost(post: FeedPost): Promise<Feed>;
    removeFriend(): Promise<void>;
    listFriends(page: number, size: number): Promise<User[]>;
    requestAsFriend(): Promise<User>;
    cancelFriendRequest(): Promise<void>;
    acceptFriendRequest(): Promise<User>;
    refuseFriendRequest(): Promise<void>;
    follow(): Promise<User>;
    unfollow(): Promise<void>;
    listFollowers(page: number, size: number): Promise<User[]>;
    listFollowings(page: number, size: number): Promise<User[]>;
    listPhotoAlbum(page: number, size: number): Promise<PhotoAlbum[]>;
    sendPrivateMessage(message: ConversationMessagePost): Promise<ConversationMessage>;
}
