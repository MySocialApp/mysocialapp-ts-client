import { AccessControl } from "./models/access_control";
import { Account } from "./models/account";
import { AccountEvents } from "./models/account_events";
import { ActivityType } from "./models/activity_type";
import { AppPlatform } from "./models/app_platform";
import { AuthenticationToken } from "./models/authentication_token";
import { Base } from "./models/base";
import { BaseLocation } from "./models/base_location";
import { BaseWall } from "./models/base_wall";
import { Comment } from "./models/comment";
import { CommentBlob } from "./models/comment_blob";
import { CommentPost } from "./models/comment_post";
import { Conversation } from "./models/conversation";
import { ConversationMessage } from "./models/conversation_message";
import { ConversationMessagePost } from "./models/conversation_message_post";
import { ConversationMessages } from "./models/conversation_messages";
import { CustomField } from "./models/custom_field";
import { EntityType } from "./models/entity_type";
import { EventMember } from "./models/event_member";
import { EventMemberAccessControl } from "./models/event_member_access_control";
import { EventOptions } from "./models/event_options";
import { EventStatus } from "./models/event_status";
import { Feed } from "./models/feed";
import { FeedPost } from "./models/feed_post";
import { FileData } from "./models/file";
import { Flag } from "./models/flag";
import { FriendRequests } from "./models/friend_requests";
import { Gender } from "./models/gender";
import { Group } from "./models/group";
import { GroupMember } from "./models/group_member";
import { GroupMemberAccessControl } from "./models/group_member_access_control";
import { GroupStatus } from "./models/group_status";
import { HashTag } from "./models/hash_tag";
import { Like } from "./models/like";
import { LikeBlob } from "./models/like_blob";
import { LoginCredentials } from "./models/login_credentials";
import { Model } from "./models/model";
import { Notification } from "./models/notification";
import { NotificationAck } from "./models/notification_ack";
import { Photo } from "./models/photo";
import { PhotoAlbum } from "./models/photo_album";
import { PreviewNotification } from "./models/preview_notification";
import { ResetIdentifier } from "./models/reset_identifier";
import { SearchQuery } from "./models/search_query";
import { SearchResult } from "./models/search_result";
import { SearchResults } from "./models/search_results";
import { SearchResultTypes } from "./models/search_result_types";
import { SearchType } from "./models/search_type";
import { SimpleLocation } from "./models/simple_location";
import { SortOrder } from "./models/sort_order";
import { Status } from "./models/status";
import { TagEntities } from "./models/tag_entities";
import { TagEntity } from "./models/tag_entity";
import { TagEntityAbstract } from "./models/tag_entity_abstract";
import { TextWallMessage } from "./models/text_wall_message";
import { URLTag } from "./models/url_tag";
import { User } from "./models/user";
import { UserMentionTag } from "./models/user_mention_tag";
import { UserSettings } from "./models/user_settings";
import { UserStat } from "./models/user_stat";
import { GroupOptions } from "./models/group_options";
import { SearchEvent } from "./search/event";
import { SearchFeed } from "./search/feed";
import { SearchGroup } from "./search/group";
import { SearchUser } from "./search/user";
import { Users } from "./models/users";
export declare class models {
    AccessControl: typeof AccessControl;
    Account: typeof Account;
    AccountEvents: typeof AccountEvents;
    ActivityType: typeof ActivityType;
    AppPlatform: typeof AppPlatform;
    AuthenticationToken: typeof AuthenticationToken;
    Base: typeof Base;
    BaseLocation: typeof BaseLocation;
    BaseWall: typeof BaseWall;
    Comment: typeof Comment;
    CommentBlob: typeof CommentBlob;
    CommentPost: typeof CommentPost;
    Conversation: typeof Conversation;
    ConversationMessage: typeof ConversationMessage;
    ConversationMessagePost: typeof ConversationMessagePost;
    ConversationMessages: typeof ConversationMessages;
    CustomField: typeof CustomField;
    EntityType: typeof EntityType;
    Event: {
        new (type: string, eventInitDict?: EventInit): Event;
        prototype: Event;
        readonly AT_TARGET: number;
        readonly BUBBLING_PHASE: number;
        readonly CAPTURING_PHASE: number;
        readonly NONE: number;
    };
    EventMember: typeof EventMember;
    EventMemberAccessControl: typeof EventMemberAccessControl;
    EventOptions: typeof EventOptions;
    EventStatus: typeof EventStatus;
    Feed: typeof Feed;
    FeedPost: typeof FeedPost;
    FileData: typeof FileData;
    Flag: typeof Flag;
    FriendRequests: typeof FriendRequests;
    Gender: typeof Gender;
    Group: typeof Group;
    GroupMember: typeof GroupMember;
    GroupMemberAccessControl: typeof GroupMemberAccessControl;
    GroupOptions: typeof GroupOptions;
    GroupStatus: typeof GroupStatus;
    HashTag: typeof HashTag;
    Like: typeof Like;
    LikeBlob: typeof LikeBlob;
    Location: {
        new (): Location;
        prototype: Location;
    };
    LoginCredentials: typeof LoginCredentials;
    Model: typeof Model;
    Notification: typeof Notification;
    NotificationAck: typeof NotificationAck;
    Photo: typeof Photo;
    PhotoAlbum: typeof PhotoAlbum;
    PreviewNotification: typeof PreviewNotification;
    ResetIdentifier: typeof ResetIdentifier;
    SearchEvent: typeof SearchEvent;
    SearchFeed: typeof SearchFeed;
    SearchGroup: typeof SearchGroup;
    SearchUser: typeof SearchUser;
    SearchQuery: typeof SearchQuery;
    SearchResult: typeof SearchResult;
    SearchResultTypes: typeof SearchResultTypes;
    SearchResults: typeof SearchResults;
    SearchType: typeof SearchType;
    SimpleLocation: typeof SimpleLocation;
    SortOrder: typeof SortOrder;
    Status: typeof Status;
    TagEntities: typeof TagEntities;
    TagEntity: typeof TagEntity;
    TagEntityAbstract: typeof TagEntityAbstract;
    TextWallMessage: typeof TextWallMessage;
    URLTag: typeof URLTag;
    User: typeof User;
    Users: typeof Users;
    UserMentionTag: typeof UserMentionTag;
    UserSettings: typeof UserSettings;
    UserStat: typeof UserStat;
}
