import {ClientConfiguration} from "./client_configuration";
import {Configuration} from "./configuration";
import {RestLogin} from "./rest/login";
import {RestFeed} from "./rest/feed";
import {RestUserWallMessage} from "./rest/user_wall_message";
import {RestAccount} from "./rest/account";
import {RestLogout} from "./rest/logout";
import {RestConversationMessage} from "./rest/conversation_message";
import {RestRegister} from "./rest/register";
import {RestUserWall} from "./rest/user_wall";
import {RestConversation} from "./rest/conversation";
import {RestEvent} from "./rest/event";
import {RestEventWall} from "./rest/event_wall";
import {RestFeedComment} from "./rest/feed_comment";
import {RestFeedExternal} from "./rest/feed_external";
import {RestFeedLike} from "./rest/feed_like";
import {RestFriend} from "./rest/friend";
import {RestGroup} from "./rest/group";
import {RestGroupWall} from "./rest/group_wall";
import {RestNotification} from "./rest/notification";
import {RestPhoto} from "./rest/photo";
import {RestPhotoAlbum} from "./rest/photo_album";
import {RestPhotoLike} from "./rest/photo_like";
import {RestPhotoComment} from "./rest/photo_comment";
import {RestSearch} from "./rest/search";
import {RestStatus} from "./rest/status";
import {RestStatusComment} from "./rest/status_comment";
import {RestStatusLike} from "./rest/status_like";
import {RestUser} from "./rest/user";
import {RestUserEvent} from "./rest/user_event";
import {RestUserExternal} from "./rest/user_external";
import {RestUserFriend} from "./rest/user_friend";
import {RestUserGroup} from "./rest/user_group";
import {RestShadowEntityFeed} from "./rest/shadow_entity_feed";
import {RestShadowEntityFeedMessage} from "./rest/shadow_entity_feed_message";
import {RestShadowEntityProfilePhoto} from "./rest/shadow_entity_profile_photo";
import {RestShadowEntityProfileCoverPhoto} from "./rest/shadow_entity_profile_cover_photo";
import {RestShadowEntityPhoto} from "./rest/shadow_entity_photo";
import {RestUserFollowing} from "./rest/user_following";
import {RestUserFollower} from "./rest/user_follower";
import {RestUserStat} from "./rest/user_stat";
import {RestAdminUserEnable} from "./rest/admin_user_enable";
import {RestUserNotify} from "./rest/user_notify";

export class ClientService {
    clientConfiguration?: ClientConfiguration;
    configuration: Configuration;

    private restAdminUserEnable?: RestAdminUserEnable;
    private restAccount?: RestAccount;
    private restConversation?: RestConversation;
    private restConversationMessage?: RestConversationMessage;
    private restEvent?: RestEvent;
    private restEventWall?: RestEventWall;
    private restFeed?: RestFeed;
    private restFeedComment?: RestFeedComment;
    private restFeedExternal?: RestFeedExternal;
    private restFeedLike?: RestFeedLike;
    private restFriend?: RestFriend;
    private restGroup?: RestGroup;
    private restGroupWall?: RestGroupWall;
    private restLogin?: RestLogin;
    private restLogout?: RestLogout;
    private restNotification?: RestNotification;
    private restPhoto?: RestPhoto;
    private restPhotoAlbum?: RestPhotoAlbum;
    private restPhotoComment?: RestPhotoComment;
    private restPhotoLike?: RestPhotoLike;
    private restRegister?: RestRegister;
    private restSearch?: RestSearch;
    private restStatus?: RestStatus;
    private restStatusComment?: RestStatusComment;
    private restStatusLike?: RestStatusLike;
    private restUser?: RestUser;
    private restUserStat?: RestUserStat;
    private restUserEvent?: RestUserEvent;
    private restUserExternal?: RestUserExternal;
    private restUserFriend?: RestUserFriend;
    private restUserFollowing?: RestUserFollowing;
    private restUserFollower?: RestUserFollower;
    private restUserGroup?: RestUserGroup;
    private restUserNotify?: RestUserNotify;
    private restUserWall?: RestUserWall;
    private restUserWallMessage?: RestUserWallMessage;
    private restShadowEntityFeed?: RestShadowEntityFeed;
    private restShadowEntityPhoto?: RestShadowEntityPhoto;
    private restShadowEntityFeedMessage?: RestShadowEntityFeedMessage;
    private restShadowEntityProfilePhoto?: RestShadowEntityProfilePhoto;
    private restShadowEntityProfileCoverPhoto?: RestShadowEntityProfileCoverPhoto;

    /**
     *
     * @param {Configuration} configuration
     * @param {ClientConfiguration} clientConf
     */
    constructor(configuration: Configuration, clientConf?: ClientConfiguration) {
        this.configuration = configuration;
        this.clientConfiguration = clientConf;
    }

    get adminUserEnable(): RestAdminUserEnable {
        return this.restAdminUserEnable !== undefined ? this.restAdminUserEnable : this.restAdminUserEnable = new RestAdminUserEnable(this.configuration);
    }

    get account(): RestAccount {
        return this.restAccount !== undefined ? this.restAccount : this.restAccount = new RestAccount(this.configuration);
    }

    get conversation(): RestConversation {
        return this.restConversation !== undefined ? this.restConversation : this.restConversation = new RestConversation(this.configuration);
    }

    get conversationMessage(): RestConversationMessage {
        return this.restConversationMessage !== undefined ? this.restConversationMessage : this.restConversationMessage = new RestConversationMessage(this.configuration);
    }

    get event(): RestEvent {
        return this.restEvent !== undefined ? this.restEvent : this.restEvent = new RestEvent(this.configuration);
    }

    get eventWall(): RestEventWall {
        return this.restEventWall !== undefined ? this.restEventWall : this.restEventWall = new RestEventWall(this.configuration);
    }

    get feed(): RestFeed {
        return this.restFeed !== undefined ? this.restFeed : this.restFeed = new RestFeed(this.configuration);
    }

    get feedComment(): RestFeedComment {
        return this.restFeedComment !== undefined ? this.restFeedComment : this.restFeedComment = new RestFeedComment(this.configuration);
    }

    get feedExternal(): RestFeedExternal {
        return this.restFeedExternal !== undefined ? this.restFeedExternal : this.restFeedExternal = new RestFeedExternal(this.configuration);
    }

    get feedLike(): RestFeedLike {
        return this.restFeedLike !== undefined ? this.restFeedLike : this.restFeedLike = new RestFeedLike(this.configuration);
    }

    get friend(): RestFriend {
        return this.restFriend !== undefined ? this.restFriend : this.restFriend = new RestFriend(this.configuration);
    }

    get group(): RestGroup {
        return this.restGroup !== undefined ? this.restGroup : this.restGroup = new RestGroup(this.configuration);
    }

    get groupWall(): RestGroupWall {
        return this.restGroupWall !== undefined ? this.restGroupWall : this.restGroupWall = new RestGroupWall(this.configuration);
    }

    get login(): RestLogin {
        return this.restLogin !== undefined ? this.restLogin : this.restLogin = new RestLogin(this.configuration);
    }

    get logout(): RestLogout {
        return this.restLogout !== undefined ? this.restLogout : this.restLogout = new RestLogout(this.configuration);
    }

    get notification(): RestNotification {
        return this.restNotification !== undefined ? this.restNotification : this.restNotification = new RestNotification(this.configuration);
    }

    get photo(): RestPhoto {
        return this.restPhoto !== undefined ? this.restPhoto : this.restPhoto = new RestPhoto(this.configuration);
    }

    get photoAlbum(): RestPhotoAlbum {
        return this.restPhotoAlbum !== undefined ? this.restPhotoAlbum : this.restPhotoAlbum = new RestPhotoAlbum(this.configuration);
    }

    get photoComment(): RestPhotoComment {
        return this.restPhotoComment !== undefined ? this.restPhotoComment : this.restPhotoComment = new RestPhotoComment(this.configuration);
    }

    get photoLike(): RestPhotoLike {
        return this.restPhotoLike !== undefined ? this.restPhotoLike : this.restPhotoLike = new RestPhotoLike(this.configuration);
    }

    get register(): RestRegister {
        return this.restRegister !== undefined ? this.restRegister : this.restRegister = new RestRegister(this.configuration);
    }

    get search(): RestSearch {
        return this.restSearch !== undefined ? this.restSearch : this.restSearch = new RestSearch(this.configuration);
    }

    get status(): RestStatus {
        return this.restStatus !== undefined ? this.restStatus : this.restStatus = new RestStatus(this.configuration);
    }

    get statusComment(): RestStatusComment {
        return this.restStatusComment !== undefined ? this.restStatusComment : this.restStatusComment = new RestStatusComment(this.configuration);
    }

    get statusLike(): RestStatusLike {
        return this.restStatusLike !== undefined ? this.restStatusLike : this.restStatusLike = new RestStatusLike(this.configuration);
    }

    get user(): RestUser {
        return this.restUser !== undefined ? this.restUser : this.restUser = new RestUser(this.configuration);
    }

    get userStat(): RestUserStat {
        return this.restUserStat !== undefined ? this.restUserStat : this.restUserStat = new RestUserStat(this.configuration);
    }

    get userEvent(): RestUserEvent {
        return this.restUserEvent !== undefined ? this.restUserEvent : this.restUserEvent = new RestUserEvent(this.configuration);
    }

    get userExternal(): RestUserExternal {
        return this.restUserExternal !== undefined ? this.restUserExternal : this.restUserExternal = new RestUserExternal(this.configuration);
    }

    get userFriend(): RestUserFriend {
        return this.restUserFriend !== undefined ? this.restUserFriend : this.restUserFriend = new RestUserFriend(this.configuration);
    }

    get userFollowing(): RestUserFollowing {
        return this.restUserFollowing !== undefined ? this.restUserFollowing : this.restUserFollowing = new RestUserFollowing(this.configuration);
    }

    get userFollower(): RestUserFollower {
        return this.restUserFollower !== undefined ? this.restUserFollower : this.restUserFollower = new RestUserFollower(this.configuration);
    }

    get userGroup(): RestUserGroup {
        return this.restUserGroup !== undefined ? this.restUserGroup : this.restUserGroup = new RestUserGroup(this.configuration);
    }

    get userNotify(): RestUserNotify {
        return this.restUserNotify !== undefined ? this.restUserNotify : this.restUserNotify = new RestUserNotify(this.configuration);
    }

    get userWall(): RestUserWall {
        return this.restUserWall !== undefined ? this.restUserWall : this.restUserWall = new RestUserWall(this.configuration);
    }

    get userWallMessage(): RestUserWallMessage {
        return this.restUserWallMessage !== undefined ? this.restUserWallMessage : this.restUserWallMessage = new RestUserWallMessage(this.configuration);
    }

    get shadowEntityFeed(): RestShadowEntityFeed {
        return this.restShadowEntityFeed !== undefined ? this.restShadowEntityFeed : this.restShadowEntityFeed = new RestShadowEntityFeed(this.configuration);
    }

    get shadowEntityPhoto(): RestShadowEntityPhoto {
        return this.restShadowEntityPhoto !== undefined ? this.restShadowEntityPhoto : this.restShadowEntityPhoto = new RestShadowEntityPhoto(this.configuration);
    }

    get shadowEntityFeedMessage(): RestShadowEntityFeedMessage {
        return this.restShadowEntityFeedMessage !== undefined ? this.restShadowEntityFeedMessage : this.restShadowEntityFeedMessage = new RestShadowEntityFeedMessage(this.configuration);
    }

    get shadowEntityProfilePhoto(): RestShadowEntityProfilePhoto {
        return this.restShadowEntityProfilePhoto !== undefined ? this.restShadowEntityProfilePhoto : this.restShadowEntityProfilePhoto = new RestShadowEntityProfilePhoto(this.configuration);
    }

    get shadowEntityProfileCoverPhoto(): RestShadowEntityProfileCoverPhoto {
        return this.restShadowEntityProfileCoverPhoto !== undefined ? this.restShadowEntityProfileCoverPhoto : this.restShadowEntityProfileCoverPhoto = new RestShadowEntityProfileCoverPhoto(this.configuration);
    }

}
