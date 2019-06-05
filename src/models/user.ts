import {Photo} from "./photo";
import {CustomField} from "./custom_field";
import {UserStat} from "./user_stat";
import {Status} from "./status";
import {Location} from "./location";
import {Flag} from "./flag";
import {Model} from "./model";
import {Gender} from "./gender";
import {Feed} from "./feed";
import {RestUserWall} from "../rest/user_wall";
import {FeedPost} from "./feed_post";
import {RestUserWallMessage} from "../rest/user_wall_message";
import {RestUserFriend} from "../rest/user_friend";
import {PhotoAlbum} from "./photo_album";
import {RestUserAlbum} from "../rest/user_album";
import {ConversationMessagePost} from "./conversation_message_post";
import {ConversationMessage} from "./conversation_message";
import {RestConversation} from "../rest/conversation";
import {Conversation} from "./conversation";
import {RestUserFollowing} from "../rest/user_following";
import {RestUserFollower} from "../rest/user_follower";
import {RestUserStat} from "../rest/user_stat";
import {RestAdminUserEnable} from "../rest/admin_user_enable";
import {RestUserNotify} from "../rest/user_notify";
import {Group} from "./group";
import {Event} from "./event";
import {RestUserGroup} from "../rest/user_group";
import {RestUserEvent} from "../rest/user_event";

export class User extends Model {
    private _profile_photo?: Photo;
    private _custom_fields?: CustomField[] = [];
    private _living_location: Location;
    private _current_status: Status;
    private _flag: Flag;
    private _user_stat: UserStat;
    private _displayed_photo: Photo;
    private _profile_cover_photo: Photo;
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
    is_notified?: boolean;
    account_enabled?: boolean;
    account_expired?: boolean;
    external_id?: string;

    getJsonParameters(): {} {
        return {
            id: this.id,
            first_name: this.first_name,
            last_name: this.last_name,
            full_name: this.full_name,
            password: this.password,
            email: this.email,
            gender: this.gender,
            date_of_birth: this.date_of_birth,
            presentation: this.presentation,
        };
    }

    get id(): any {
        return this.id_str
    }

    set id(id: any) {
        // int64 cannot be interpreted by browsers
    }

    set displayed_photo(o: Photo) {
        this._displayed_photo = new Photo(o);
    }

    get displayed_photo(): Photo {
        return this._displayed_photo;
    }

    set profile_photo(p: Photo) {
        this._profile_photo = new Photo(p, this.conf);
    }

    get profile_photo(): Photo {
        return this._profile_photo;
    }

    set profile_cover_photo(p: Photo) {
        this._profile_cover_photo = new Photo(p, this.conf);
    }

    get profile_cover_photo(): Photo {
        return this._profile_cover_photo;
    }

    set flag(p: Flag) {
        this._flag = new Flag(p, this.conf);
    }

    get flag(): Flag {
        return this._flag;
    }

    set living_location(p: Location) {
        this._living_location = new Location(p);
    }

    get living_location(): Location {
        return this._living_location;
    }

    set current_status(p: Status) {
        this._current_status = new Status(p, this.conf);
    }

    get current_status(): Status {
        return this._current_status;
    }

    get user_stat(): UserStat {
        return this._user_stat;
    }

    set user_stat(u: UserStat) {
        if (u) {
            this._user_stat = new UserStat(u, this.conf);
        }
    }

    set custom_fields(list: CustomField[]) {
        this._custom_fields = [] as CustomField[];
        for (let c of list) {
            this._custom_fields.push(new CustomField(c, this.conf));
        }
    }

    get custom_fields(): CustomField[] {
        return this._custom_fields;
    }

    /**
     * return true if field found
     * @param {string} id
     * @param value
     * @returns {boolean}
     */
    setCustomFieldValueById(id: string, value: any): boolean {
        if (!this.custom_fields || this.custom_fields.length == 0) {
            return
        }
        for (let field of this.custom_fields) {
            if (field.field.id == id) {
                field.value = value;
                return true;
            }
        }
        return false;
    }

    async userStat(): Promise<UserStat> {
        return new RestUserStat(this.conf).get(this.id);
    }

    async listNewsFeed(page: number, size: number): Promise<Feed[]> {
        return new RestUserWall(this.conf).list(this.id, page, size);
    }

    async createFeedPost(post: FeedPost): Promise<Feed> {
        return new RestUserWallMessage(this.conf).create(this.id, post.textWallMessage);
    }

    async removeFriend(): Promise<void> {
        return new RestUserFriend(this.conf).delete(this.id);
    }

    async listFriends(page: number, size: number): Promise<User[]> {
        return new RestUserFriend(this.conf).list(this.id, page, size);
    }

    async listGroups(page: number, size: number): Promise<Group[]> {
        return new RestUserGroup(this.conf).list(this.id, page, size);
    }

    async listEvents(page: number, size: number): Promise<Event[]> {
        return new RestUserEvent(this.conf).list(this.id, page, size);
    }

    async requestAsFriend(): Promise<User> {
        return new RestUserFriend(this.conf).create(this.id);
    }

    async cancelFriendRequest(): Promise<void> {
        return new RestUserFriend(this.conf).delete(this.id);
    }

    async acceptFriendRequest(): Promise<User> {
        return new RestUserFriend(this.conf).create(this.id);
    }

    async refuseFriendRequest(): Promise<void> {
        return new RestUserFriend(this.conf).delete(this.id);
    }

    async follow(): Promise<User> {
        return new RestUserFollowing(this.conf).create(this.id);
    }

    async unfollow(): Promise<void> {
        return new RestUserFollowing(this.conf).delete(this.id);
    }

    async listFollowers(page: number, size: number): Promise<User[]> {
        return new RestUserFollower(this.conf).list(this.id, page, size);
    }

    async listFollowings(page: number, size: number): Promise<User[]> {
        return new RestUserFollowing(this.conf).list(this.id, page, size);
    }

    async beNotified(): Promise<User> {
        return new RestUserNotify(this.conf).create(this.id);
    }

    async noMoreNotified(): Promise<void> {
        return new RestUserNotify(this.conf).delete(this.id);
    }

    async listPhotoAlbum(page: number, size: number): Promise<PhotoAlbum[]> {
        return new RestUserAlbum(this.conf).list(this.id, page, size);
    }

    async sendPrivateMessage(message: ConversationMessagePost): Promise<ConversationMessage> {
        let conversation = new Conversation().addMember(this);
        conversation = await new RestConversation(this.conf).create(conversation);
        return conversation.sendMessage(message);
    }

    async enable(): Promise<User> {
        return new RestAdminUserEnable(this.conf).enable(this.id);
    }

    async disable(): Promise<User> {
        return new RestAdminUserEnable(this.conf).disable(this.id);
    }

}
