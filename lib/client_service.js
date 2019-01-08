"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login_1 = require("./rest/login");
const feed_1 = require("./rest/feed");
const user_wall_message_1 = require("./rest/user_wall_message");
const account_1 = require("./rest/account");
const logout_1 = require("./rest/logout");
const conversation_message_1 = require("./rest/conversation_message");
const register_1 = require("./rest/register");
const user_wall_1 = require("./rest/user_wall");
const conversation_1 = require("./rest/conversation");
const event_1 = require("./rest/event");
const event_wall_1 = require("./rest/event_wall");
const feed_comment_1 = require("./rest/feed_comment");
const feed_like_1 = require("./rest/feed_like");
const friend_1 = require("./rest/friend");
const group_1 = require("./rest/group");
const group_wall_1 = require("./rest/group_wall");
const notification_1 = require("./rest/notification");
const photo_1 = require("./rest/photo");
const photo_album_1 = require("./rest/photo_album");
const photo_like_1 = require("./rest/photo_like");
const photo_comment_1 = require("./rest/photo_comment");
const search_1 = require("./rest/search");
const status_1 = require("./rest/status");
const status_comment_1 = require("./rest/status_comment");
const status_like_1 = require("./rest/status_like");
const user_1 = require("./rest/user");
const user_event_1 = require("./rest/user_event");
const user_external_1 = require("./rest/user_external");
const user_friend_1 = require("./rest/user_friend");
const user_group_1 = require("./rest/user_group");
const shadow_entity_feed_1 = require("./rest/shadow_entity_feed");
const shadow_entity_feed_message_1 = require("./rest/shadow_entity_feed_message");
const shadow_entity_profile_photo_1 = require("./rest/shadow_entity_profile_photo");
const shadow_entity_profile_cover_photo_1 = require("./rest/shadow_entity_profile_cover_photo");
const shadow_entity_photo_1 = require("./rest/shadow_entity_photo");
const user_following_1 = require("./rest/user_following");
const user_follower_1 = require("./rest/user_follower");
const user_stat_1 = require("./rest/user_stat");
const admin_user_enable_1 = require("./rest/admin_user_enable");
class ClientService {
    /**
     *
     * @param {Configuration} configuration
     * @param {ClientConfiguration} clientConf
     */
    constructor(configuration, clientConf) {
        this.configuration = configuration;
        this.clientConfiguration = clientConf;
    }
    get adminUserEnable() {
        return this.restAdminUserEnable !== undefined ? this.restAdminUserEnable : this.restAdminUserEnable = new admin_user_enable_1.RestAdminUserEnable(this.configuration);
    }
    get account() {
        return this.restAccount !== undefined ? this.restAccount : this.restAccount = new account_1.RestAccount(this.configuration);
    }
    get conversation() {
        return this.restConversation !== undefined ? this.restConversation : this.restConversation = new conversation_1.RestConversation(this.configuration);
    }
    get conversationMessage() {
        return this.restConversationMessage !== undefined ? this.restConversationMessage : this.restConversationMessage = new conversation_message_1.RestConversationMessage(this.configuration);
    }
    get event() {
        return this.restEvent !== undefined ? this.restEvent : this.restEvent = new event_1.RestEvent(this.configuration);
    }
    get eventWall() {
        return this.restEventWall !== undefined ? this.restEventWall : this.restEventWall = new event_wall_1.RestEventWall(this.configuration);
    }
    get feed() {
        return this.restFeed !== undefined ? this.restFeed : this.restFeed = new feed_1.RestFeed(this.configuration);
    }
    get feedComment() {
        return this.restFeedComment !== undefined ? this.restFeedComment : this.restFeedComment = new feed_comment_1.RestFeedComment(this.configuration);
    }
    get feedLike() {
        return this.restFeedLike !== undefined ? this.restFeedLike : this.restFeedLike = new feed_like_1.RestFeedLike(this.configuration);
    }
    get friend() {
        return this.restFriend !== undefined ? this.restFriend : this.restFriend = new friend_1.RestFriend(this.configuration);
    }
    get group() {
        return this.restGroup !== undefined ? this.restGroup : this.restGroup = new group_1.RestGroup(this.configuration);
    }
    get groupWall() {
        return this.restGroupWall !== undefined ? this.restGroupWall : this.restGroupWall = new group_wall_1.RestGroupWall(this.configuration);
    }
    get login() {
        return this.restLogin !== undefined ? this.restLogin : this.restLogin = new login_1.RestLogin(this.configuration);
    }
    get logout() {
        return this.restLogout !== undefined ? this.restLogout : this.restLogout = new logout_1.RestLogout(this.configuration);
    }
    get notification() {
        return this.restNotification !== undefined ? this.restNotification : this.restNotification = new notification_1.RestNotification(this.configuration);
    }
    get photo() {
        return this.restPhoto !== undefined ? this.restPhoto : this.restPhoto = new photo_1.RestPhoto(this.configuration);
    }
    get photoAlbum() {
        return this.restPhotoAlbum !== undefined ? this.restPhotoAlbum : this.restPhotoAlbum = new photo_album_1.RestPhotoAlbum(this.configuration);
    }
    get photoComment() {
        return this.restPhotoComment !== undefined ? this.restPhotoComment : this.restPhotoComment = new photo_comment_1.RestPhotoComment(this.configuration);
    }
    get photoLike() {
        return this.restPhotoLike !== undefined ? this.restPhotoLike : this.restPhotoLike = new photo_like_1.RestPhotoLike(this.configuration);
    }
    get register() {
        return this.restRegister !== undefined ? this.restRegister : this.restRegister = new register_1.RestRegister(this.configuration);
    }
    get search() {
        return this.restSearch !== undefined ? this.restSearch : this.restSearch = new search_1.RestSearch(this.configuration);
    }
    get status() {
        return this.restStatus !== undefined ? this.restStatus : this.restStatus = new status_1.RestStatus(this.configuration);
    }
    get statusComment() {
        return this.restStatusComment !== undefined ? this.restStatusComment : this.restStatusComment = new status_comment_1.RestStatusComment(this.configuration);
    }
    get statusLike() {
        return this.restStatusLike !== undefined ? this.restStatusLike : this.restStatusLike = new status_like_1.RestStatusLike(this.configuration);
    }
    get user() {
        return this.restUser !== undefined ? this.restUser : this.restUser = new user_1.RestUser(this.configuration);
    }
    get userStat() {
        return this.restUserStat !== undefined ? this.restUserStat : this.restUserStat = new user_stat_1.RestUserStat(this.configuration);
    }
    get userEvent() {
        return this.restUserEvent !== undefined ? this.restUserEvent : this.restUserEvent = new user_event_1.RestUserEvent(this.configuration);
    }
    get userExternal() {
        return this.restUserExternal !== undefined ? this.restUserExternal : this.restUserExternal = new user_external_1.RestUserExternal(this.configuration);
    }
    get userFriend() {
        return this.restUserFriend !== undefined ? this.restUserFriend : this.restUserFriend = new user_friend_1.RestUserFriend(this.configuration);
    }
    get userFollowing() {
        return this.restUserFollowing !== undefined ? this.restUserFollowing : this.restUserFollowing = new user_following_1.RestUserFollowing(this.configuration);
    }
    get userFollower() {
        return this.restUserFollower !== undefined ? this.restUserFollower : this.restUserFollower = new user_follower_1.RestUserFollower(this.configuration);
    }
    get userGroup() {
        return this.restUserGroup !== undefined ? this.restUserGroup : this.restUserGroup = new user_group_1.RestUserGroup(this.configuration);
    }
    get userWall() {
        return this.restUserWall !== undefined ? this.restUserWall : this.restUserWall = new user_wall_1.RestUserWall(this.configuration);
    }
    get userWallMessage() {
        return this.restUserWallMessage !== undefined ? this.restUserWallMessage : this.restUserWallMessage = new user_wall_message_1.RestUserWallMessage(this.configuration);
    }
    get shadowEntityFeed() {
        return this.restShadowEntityFeed !== undefined ? this.restShadowEntityFeed : this.restShadowEntityFeed = new shadow_entity_feed_1.RestShadowEntityFeed(this.configuration);
    }
    get shadowEntityPhoto() {
        return this.restShadowEntityPhoto !== undefined ? this.restShadowEntityPhoto : this.restShadowEntityPhoto = new shadow_entity_photo_1.RestShadowEntityPhoto(this.configuration);
    }
    get shadowEntityFeedMessage() {
        return this.restShadowEntityFeedMessage !== undefined ? this.restShadowEntityFeedMessage : this.restShadowEntityFeedMessage = new shadow_entity_feed_message_1.RestShadowEntityFeedMessage(this.configuration);
    }
    get shadowEntityProfilePhoto() {
        return this.restShadowEntityProfilePhoto !== undefined ? this.restShadowEntityProfilePhoto : this.restShadowEntityProfilePhoto = new shadow_entity_profile_photo_1.RestShadowEntityProfilePhoto(this.configuration);
    }
    get shadowEntityProfileCoverPhoto() {
        return this.restShadowEntityProfileCoverPhoto !== undefined ? this.restShadowEntityProfileCoverPhoto : this.restShadowEntityProfileCoverPhoto = new shadow_entity_profile_cover_photo_1.RestShadowEntityProfileCoverPhoto(this.configuration);
    }
}
exports.ClientService = ClientService;
