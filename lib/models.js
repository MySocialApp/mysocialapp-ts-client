"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const access_control_1 = require("./models/access_control");
const account_1 = require("./models/account");
const account_events_1 = require("./models/account_events");
const activity_type_1 = require("./models/activity_type");
const app_platform_1 = require("./models/app_platform");
const authentication_token_1 = require("./models/authentication_token");
const base_1 = require("./models/base");
const base_location_1 = require("./models/base_location");
const base_wall_1 = require("./models/base_wall");
const comment_1 = require("./models/comment");
const comment_blob_1 = require("./models/comment_blob");
const comment_post_1 = require("./models/comment_post");
const conversation_1 = require("./models/conversation");
const conversation_message_1 = require("./models/conversation_message");
const conversation_message_post_1 = require("./models/conversation_message_post");
const conversation_messages_1 = require("./models/conversation_messages");
const custom_field_1 = require("./models/custom_field");
const entity_type_1 = require("./models/entity_type");
const event_member_1 = require("./models/event_member");
const event_member_access_control_1 = require("./models/event_member_access_control");
const event_options_1 = require("./models/event_options");
const event_status_1 = require("./models/event_status");
const feed_1 = require("./models/feed");
const feed_post_1 = require("./models/feed_post");
const file_1 = require("./models/file");
const flag_1 = require("./models/flag");
const friend_requests_1 = require("./models/friend_requests");
const gender_1 = require("./models/gender");
const group_1 = require("./models/group");
const group_member_1 = require("./models/group_member");
const group_member_access_control_1 = require("./models/group_member_access_control");
const group_status_1 = require("./models/group_status");
const hash_tag_1 = require("./models/hash_tag");
const like_1 = require("./models/like");
const like_blob_1 = require("./models/like_blob");
const login_credentials_1 = require("./models/login_credentials");
const model_1 = require("./models/model");
const notification_1 = require("./models/notification");
const notification_ack_1 = require("./models/notification_ack");
const photo_1 = require("./models/photo");
const photo_album_1 = require("./models/photo_album");
const preview_notification_1 = require("./models/preview_notification");
const reset_identifier_1 = require("./models/reset_identifier");
const search_query_1 = require("./models/search_query");
const search_result_1 = require("./models/search_result");
const search_results_1 = require("./models/search_results");
const search_result_types_1 = require("./models/search_result_types");
const search_type_1 = require("./models/search_type");
const simple_location_1 = require("./models/simple_location");
const sort_order_1 = require("./models/sort_order");
const status_1 = require("./models/status");
const tag_entities_1 = require("./models/tag_entities");
const tag_entity_1 = require("./models/tag_entity");
const tag_entity_abstract_1 = require("./models/tag_entity_abstract");
const text_wall_message_1 = require("./models/text_wall_message");
const url_tag_1 = require("./models/url_tag");
const user_1 = require("./models/user");
const user_mention_tag_1 = require("./models/user_mention_tag");
const user_settings_1 = require("./models/user_settings");
const user_stat_1 = require("./models/user_stat");
const group_options_1 = require("./models/group_options");
exports.models = {
    AccessControl: access_control_1.AccessControl,
    Account: account_1.Account,
    AccountEvents: account_events_1.AccountEvents,
    ActivityType: activity_type_1.ActivityType,
    AppPlatform: app_platform_1.AppPlatform,
    AuthenticationToken: authentication_token_1.AuthenticationToken,
    Base: base_1.Base,
    BaseLocation: base_location_1.BaseLocation,
    BaseWall: base_wall_1.BaseWall,
    Comment: comment_1.Comment,
    CommentBlob: comment_blob_1.CommentBlob,
    CommentPost: comment_post_1.CommentPost,
    Conversation: conversation_1.Conversation,
    ConversationMessage: conversation_message_1.ConversationMessage,
    ConversationMessagePost: conversation_message_post_1.ConversationMessagePost,
    ConversationMessages: conversation_messages_1.ConversationMessages,
    CustomField: custom_field_1.CustomField,
    EntityType: entity_type_1.EntityType,
    Event: Event,
    EventMember: event_member_1.EventMember,
    EventMemberAccessControl: event_member_access_control_1.EventMemberAccessControl,
    EventOptions: event_options_1.EventOptions,
    EventStatus: event_status_1.EventStatus,
    Feed: feed_1.Feed,
    FeedPost: feed_post_1.FeedPost,
    FileData: file_1.FileData,
    Flag: flag_1.Flag,
    FriendRequests: friend_requests_1.FriendRequests,
    Gender: gender_1.Gender,
    Group: group_1.Group,
    GroupMember: group_member_1.GroupMember,
    GroupMemberAccessControl: group_member_access_control_1.GroupMemberAccessControl,
    GroupOptions: group_options_1.GroupOptions,
    GroupStatus: group_status_1.GroupStatus,
    HashTag: hash_tag_1.HashTag,
    Like: like_1.Like,
    LikeBlob: like_blob_1.LikeBlob,
    Location: Location,
    LoginCredentials: login_credentials_1.LoginCredentials,
    Model: model_1.Model,
    Notification: notification_1.Notification,
    NotificationAck: notification_ack_1.NotificationAck,
    Photo: photo_1.Photo,
    PhotoAlbum: photo_album_1.PhotoAlbum,
    PreviewNotification: preview_notification_1.PreviewNotification,
    ResetIdentifier: reset_identifier_1.ResetIdentifier,
    SearchQuery: search_query_1.SearchQuery,
    SearchResult: search_result_1.SearchResult,
    SearchResultTypes: search_result_types_1.SearchResultTypes,
    SearchResults: search_results_1.SearchResults,
    SearchType: search_type_1.SearchType,
    SimpleLocation: simple_location_1.SimpleLocation,
    SortOrder: sort_order_1.SortOrder,
    Status: status_1.Status,
    TagEntities: tag_entities_1.TagEntities,
    TagEntity: tag_entity_1.TagEntity,
    TagEntityAbstract: tag_entity_abstract_1.TagEntityAbstract,
    TextWallMessage: text_wall_message_1.TextWallMessage,
    URLTag: url_tag_1.URLTag,
    User: user_1.User,
    UserMentionTag: user_mention_tag_1.UserMentionTag,
    UserSettings: user_settings_1.UserSettings,
    UserStat: user_stat_1.UserStat,
};
