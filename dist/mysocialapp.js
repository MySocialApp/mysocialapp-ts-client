"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const user_settings_1 = require("./user_settings");
const account_1 = require("../rest/account");
const utils_1 = require("./utils");
class Account extends user_1.User {
    getJsonParameters() {
        let data = {
            id: this.id,
            email: this.email,
            first_name: this.first_name,
            last_name: this.last_name,
            gender: this.gender,
            date_of_birth: this.date_of_birth,
            presentation: this.presentation,
        };
        if (this.living_location) {
            data['living_location'] = this.living_location.getJsonParameters();
        }
        if (this.password) {
            data['password'] = this.password;
        }
        if (this.custom_fields) {
            data['custom_fields'] = utils_1.listToParameters(this.custom_fields);
        }
        if (this.id) {
            data['id'] = this.id;
        }
        return data;
    }
    set user_settings(u) {
        this._user_settings = new user_settings_1.UserSettings(u, this.conf);
    }
    get user_settings() {
        return this._user_settings;
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new account_1.RestAccount(this.conf)).update(this);
        });
    }
}
exports.Account = Account;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
class AccountEvents extends model_1.Model {
}
exports.AccountEvents = AccountEvents;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ActivityType;
(function (ActivityType) {
    ActivityType["Publish"] = "PUBLISH";
    ActivityType["Edit"] = "EDIT";
    ActivityType["Delete"] = "DELETE";
    ActivityType["Like"] = "LIKE";
    ActivityType["Dislike"] = "DISLIKE";
    ActivityType["Join"] = "JOIN";
    ActivityType["Leave"] = "LEAVE";
    ActivityType["Mention"] = "MENTION";
    ActivityType["Add"] = "ADD";
    ActivityType["Remove"] = "REMOVE";
})(ActivityType = exports.ActivityType || (exports.ActivityType = {}));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppPlatform;
(function (AppPlatform) {
    AppPlatform["Browser"] = "Browser";
    AppPlatform["Typescript"] = "Typescript";
})(AppPlatform = exports.AppPlatform || (exports.AppPlatform = {}));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
class AuthenticationToken extends model_1.Model {
}
exports.AuthenticationToken = AuthenticationToken;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const model_1 = require("./model");
const user_1 = require("./user");
const photo_1 = require("./photo");
class Base extends model_1.Model {
    constructor() {
        super(...arguments);
        this.body_image_url = null;
        this.body_image_text = null;
    }
    get id() {
        return this.id_str;
    }
    set id(id) {
        // int64 cannot be interpreted by browsers
    }
    set owner(o) {
        this._owner = new user_1.User(o);
    }
    get owner() {
        return this._owner;
    }
    set displayed_photo(o) {
        this._displayed_photo = new photo_1.Photo(o);
    }
    get displayed_photo() {
        return this._displayed_photo;
    }
    get getCreatedDate() {
        return this.created_date ? moment(this.created_date) : null;
    }
    // must be override
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(((resolve, reject) => {
                reject();
            }));
        });
    }
    // must be override
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(((resolve, reject) => {
                reject();
            }));
        });
    }
}
exports.Base = Base;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
class BaseLocation extends model_1.Model {
}
exports.BaseLocation = BaseLocation;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const like_blob_1 = require("./like_blob");
const feed_1 = require("../rest/feed");
const feed_like_1 = require("../rest/feed_like");
const comment_blob_1 = require("./comment_blob");
const feed_comment_1 = require("../rest/feed_comment");
class BaseWall extends base_1.Base {
    get comments() {
        return this._comments;
    }
    set comments(c) {
        this._comments = new comment_blob_1.CommentBlob(c, this.conf);
    }
    set likes(likes) {
        this._likes = new like_blob_1.LikeBlob(likes, this.conf);
    }
    get likes() {
        return this._likes;
    }
    getLikersTotal() {
        return this.likes ? this.likes.total : 0;
    }
    setLikersTotal(i) {
        this.likes.total = i;
    }
    isLiked() {
        return this.likes.hasLike === true;
    }
    getLikes() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new feed_like_1.RestFeedLike(this.conf)).get(this.id_str);
        });
    }
    addLike() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new feed_like_1.RestFeedLike(this.conf)).create(this.id_str);
        });
    }
    deleteLike() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new feed_like_1.RestFeedLike(this.conf)).delete(this.id_str);
        });
    }
    getComments() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new feed_comment_1.RestFeedComment(this.conf)).list(this.id_str);
        });
    }
    addComment(comment) {
        return __awaiter(this, void 0, void 0, function* () {
            return (new feed_comment_1.RestFeedComment(this.conf)).create(this.id_str, comment);
        });
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new feed_1.RestFeed(this.conf)).delete(this.id_str);
        });
    }
    get commentsTotal() {
        return this.comments ? this.comments.total : 0;
    }
    get commentsSamples() {
        return this.comments ? this.comments.samples : null;
    }
}
exports.BaseWall = BaseWall;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const photo_1 = require("./photo");
const base_1 = require("./base");
const tag_entities_1 = require("./tag_entities");
class Comment extends base_1.Base {
    set photo(o) {
        this._photo = new photo_1.Photo(o, this.conf);
    }
    get photo() {
        return this._photo;
    }
    get tag_entities() {
        return this._tag_entities;
    }
    set tag_entities(t) {
        this._tag_entities = new tag_entities_1.TagEntities(t);
    }
}
exports.Comment = Comment;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comment_1 = require("./comment");
const model_1 = require("./model");
class CommentBlob extends model_1.Model {
    get samples() {
        return this._samples;
    }
    set samples(comments) {
        let list = [];
        for (let comment in comments) {
            list.push(new comment_1.Comment(comment, this.conf));
        }
        this._samples = list;
    }
}
exports.CommentBlob = CommentBlob;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommentPost {
    setMessage(message) {
        this.mMessage = message;
        return this;
    }
    setImage(file) {
        this.mFile = file;
        return this;
    }
    toJson() {
        return JSON.stringify(this.getJsonParameters());
    }
    getJsonParameters() {
        return { message: this.mMessage };
    }
}
exports.CommentPost = CommentPost;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const conversation_messages_1 = require("./conversation_messages");
const base_1 = require("./base");
const conversation_message_1 = require("../rest/conversation_message");
const conversation_1 = require("../rest/conversation");
const utils_1 = require("./utils");
class Conversation extends base_1.Base {
    getJsonParameters() {
        return {
            members: utils_1.listToParameters(this.members),
            name: this.name,
        };
    }
    get members() {
        return this._members;
    }
    setName(name) {
        this.name = name;
        return this;
    }
    addMember(user) {
        if (this.members == undefined) {
            this.members = [];
        }
        this.members.push(user);
        return this;
    }
    addMembers(users) {
        for (let user of users) {
            this.addMember(user);
        }
        return this;
    }
    set members(members) {
        this._members = [];
        for (let m of members) {
            this._members.push(new user_1.User(m));
        }
    }
    get messages() {
        return this._messages;
    }
    set messages(o) {
        this._messages = new conversation_messages_1.ConversationMessages(o, this.conf);
    }
    sendMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!message.isMultipart) {
                return (new conversation_message_1.RestConversationMessage(this.conf)).create(this.id, message.getConversationMessage());
            }
            return (new conversation_message_1.RestConversationMessage(this.conf)).postFile(this.id, message);
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new conversation_1.RestConversation(this.conf)).update(this.id, this);
        });
    }
}
exports.Conversation = Conversation;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const tag_entities_1 = require("./tag_entities");
const conversation_1 = require("./conversation");
class ConversationMessage extends model_1.Model {
    set id(id) {
    }
    get id() {
        return this.id_str;
    }
    getJsonParameters() {
        return {
            message: this.message,
            tag_entities: this.tag_entities,
        };
    }
    get tag_entities() {
        return this._tag_entities;
    }
    set tag_entities(t) {
        this._tag_entities = new tag_entities_1.TagEntities(t);
    }
    get photo() {
        return this._photo;
    }
    set photo(p) {
        this._photo = p;
    }
    get conversation() {
        return this._conversation;
    }
    set conversation(c) {
        this._conversation = new conversation_1.Conversation(c, this.conf);
    }
    replyBack(conversationMessagePost) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conversation.sendMessage(conversationMessagePost);
        });
    }
}
exports.ConversationMessage = ConversationMessage;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conversation_message_1 = require("./conversation_message");
class ConversationMessagePost {
    constructor() {
        this.mMessage = "";
        this.mImage = null;
    }
    setMessage(message) {
        this.mMessage = message;
        return this;
    }
    setImage(f) {
        this.mImage = f;
        return this;
    }
    get isMultipart() {
        return this.mImage !== null;
    }
    getConversationMessage() {
        let c = (new conversation_message_1.ConversationMessage());
        c.message = this.mMessage;
        return c;
    }
    get image() {
        return this.mImage;
    }
    get message() {
        return this.mMessage;
    }
}
exports.ConversationMessagePost = ConversationMessagePost;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const conversation_message_1 = require("./conversation_message");
const conversation_message_2 = require("../rest/conversation_message");
class ConversationMessages extends model_1.Model {
    set samples(messages) {
        let list = [];
        for (let m of messages) {
            list.push(new conversation_message_1.ConversationMessage(m, this.conf));
        }
        this._samples = list;
    }
    get samples() {
        return this._samples;
    }
    list(page, size) {
        return __awaiter(this, void 0, void 0, function* () {
            return (new conversation_message_2.RestConversationMessage(this.conf)).list(this.conversation_id, page, size);
        });
    }
}
exports.ConversationMessages = ConversationMessages;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const simple_location_1 = require("./simple_location");
const constant_1 = require("../constant");
const moment = require("moment");
class CustomField extends model_1.Model {
    getJsonParameters() {
        let data = {
            field: this.field.getJsonParameters()
        };
        if (this.data != undefined) {
            data['data'] = this.data.getJsonParameters();
            data['data']['field_id'] = this.field.id;
        }
        return data;
    }
    set field(fields) {
        this._field = new Field(fields, this.conf);
    }
    get field() {
        return this._field;
    }
    set data(data) {
        this._data = new CustomFieldData(data, this.conf);
    }
    get data() {
        return this._data;
    }
    get field_type() {
        return this.field.field_type;
    }
    get position() {
        return this.field.position;
    }
    get label() {
        return this.field.labels[this.conf.interfaceLanguage];
    }
    get description() {
        return this.field.descriptions[this.conf.interfaceLanguage];
    }
    get placeholder() {
        return this.field.placeholders[this.conf.interfaceLanguage];
    }
    get possibleValues() {
        return this.field.values[this.conf.interfaceLanguage];
    }
    get value() {
        return this.data !== undefined ? this.data.value : null;
    }
    set value(value) {
        if (this.data === undefined) {
            this.data = {};
        }
        this.data.value = value;
    }
    get booleanValue() {
        return this.data !== undefined ? this.data.value : null;
    }
    set booleanValue(value) {
        this.value = value;
    }
    get stringsValue() {
        return this.data !== undefined ? this.data.value : null;
    }
    set stringsValue(value) {
        this.value = value;
    }
    get stringValue() {
        return this.data !== undefined ? this.data.value : null;
    }
    set stringValue(value) {
        this.value = value;
    }
    get numberValue() {
        return this.data !== undefined ? this.data.value : null;
    }
    set numberValue(value) {
        this.value = value;
    }
    get locationValue() {
        return this.data !== undefined ? new simple_location_1.SimpleLocation(this.data.value) : null;
    }
    set locationValue(value) {
        this.value = value;
    }
    set dateValue(value) {
        this.value = value.format(constant_1.dateFormat);
    }
    get dateValue() {
        return moment(this.value);
    }
}
exports.CustomField = CustomField;
class Field extends model_1.Model {
    getJsonParameters() {
        return {
            id: this.id,
            field_type: this.field_type,
        };
    }
    set id(id) {
        // Long type doesn't work with browser
    }
    get id() {
        return this.id_str;
    }
}
class CustomFieldData extends model_1.Model {
    getJsonParameters() {
        return {
            field_id: this.field_id,
            value: this.value,
        };
    }
    set field_id(id) {
    }
    get field_id() {
        return this.field_id_str;
    }
}
exports.CustomFieldData = CustomFieldData;
var CustomFieldType;
(function (CustomFieldType) {
    CustomFieldType["InputText"] = "INPUT_TEXT";
    CustomFieldType["InputTextarea"] = "INPUT_TEXTAREA";
    CustomFieldType["InputNumber"] = "INPUT_NUMBER";
    CustomFieldType["InputBoolean"] = "INPUT_BOOLEAN";
    CustomFieldType["InputDate"] = "INPUT_DATE";
    CustomFieldType["InputUrl"] = "INPUT_URL";
    CustomFieldType["InputEmail"] = "INPUT_EMAIL";
    CustomFieldType["InputPhone"] = "INPUT_PHONE";
    CustomFieldType["InputLocation"] = "INPUT_LOCATION";
    CustomFieldType["InputSelect"] = "INPUT_SELECT";
    CustomFieldType["InputCheckbox"] = "INPUT_CHECKBOX";
})(CustomFieldType = exports.CustomFieldType || (exports.CustomFieldType = {}));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
class Empty extends model_1.Model {
    toJson() {
        return "";
    }
}
exports.Empty = Empty;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EntityType;
(function (EntityType) {
    EntityType["User"] = "USER";
    EntityType["Ride"] = "RIDE";
    EntityType["Group"] = "GROUP";
    EntityType["Event"] = "EVENT";
    EntityType["Photo"] = "PHOTO";
    EntityType["PhotoAlbum"] = "PHOTO_ALBUM";
    EntityType["Status"] = "STATUS";
    EntityType["Conversation"] = "CONVERSATION";
    EntityType["TextWallMessage"] = "TEXT_WALL_MESSAGE";
    EntityType["Story"] = "STORY";
    EntityType["Location"] = "LOCATION";
    EntityType["Comment"] = "COMMENT";
    EntityType["Like"] = "LIKE";
    EntityType["UrlTag"] = "URL_TAG";
    EntityType["HashTag"] = "HASH_TAG";
    EntityType["UserMentionTag"] = "USER_MENTION_TAG";
    EntityType["ConversationMessage"] = "CONVERSATION_MESSAGE";
})(EntityType = exports.EntityType || (exports.EntityType = {}));

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_wall_1 = require("./base_wall");
const event_member_1 = require("./event_member");
const photo_1 = require("./photo");
const location_1 = require("./location");
const constant_1 = require("../constant");
const event_1 = require("../rest/event");
const event_wall_1 = require("../rest/event_wall");
const custom_field_1 = require("./custom_field");
const utils_1 = require("./utils");
class Event extends base_wall_1.BaseWall {
    getJsonParameters() {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            max_seats: this.max_seats,
            start_date: this.start_date,
            end_date: this.end_date,
            event_member_access_control: this.event_member_access_control,
            location: this.location ? this.location.getJsonParameters() : null,
            custom_fields: this._custom_fields ? utils_1.listToParameters(this._custom_fields) : null,
        };
    }
    join() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new event_1.RestEvent(this.conf)).join(this.id);
        });
    }
    leave() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new event_1.RestEvent(this.conf)).leave(this.id);
        });
    }
    /**
     * must be creator of the event
     */
    cancel() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new event_1.RestEvent(this.conf)).cancel(this.id);
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new event_1.RestEvent(this.conf)).update(this);
        });
    }
    addMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            return (new event_wall_1.RestEventWall(this.conf)).createMessage(this.id, message);
        });
    }
    get profile_cover_photo() {
        return this._profile_cover_photo;
    }
    set profile_cover_photo(p) {
        this._profile_cover_photo = new photo_1.Photo(p, this.conf);
    }
    get location() {
        return this._location;
    }
    set location(l) {
        this._location = new location_1.Location(l);
    }
    get members() {
        return this._members;
    }
    set members(members) {
        if (!members) {
            return;
        }
        let list = [];
        for (let m of members) {
            list.push(new event_member_1.EventMember(m, this.conf));
        }
        this._members = list;
    }
    setStartDate(d) {
        this.start_date = d.format(constant_1.dateFormat);
        return this;
    }
    setEndDate(d) {
        this.end_date = d.format(constant_1.dateFormat);
        return this;
    }
    setMaxSeats(m) {
        this.max_seats = m;
        return this;
    }
    setDescription(d) {
        this.description = d;
        return this;
    }
    setName(n) {
        this.name = n;
        return this;
    }
    setLocation(l) {
        this.location = l;
        return this;
    }
    setAccessControl(ac) {
        this.event_member_access_control = ac;
        return this;
    }
    get custom_fields() {
        return this._custom_fields;
    }
    set custom_fields(c) {
        if (!c) {
            return;
        }
        let list = [];
        for (let m of c) {
            list.push(new custom_field_1.CustomField(m, this.conf));
        }
        this._custom_fields = list;
    }
}
exports.Event = Event;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
class EventMember extends model_1.Model {
}
exports.EventMember = EventMember;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventMemberAccessControl;
(function (EventMemberAccessControl) {
    EventMemberAccessControl["Public"] = "PUBLIC";
    EventMemberAccessControl["FriendOfFriend"] = "FRIEND_OF_FRIEND";
})(EventMemberAccessControl = exports.EventMemberAccessControl || (exports.EventMemberAccessControl = {}));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventStatus;
(function (EventStatus) {
    EventStatus["WantToParticipate"] = "WANT_TO_PARTICIPATE";
    EventStatus["WaitingConfirmation"] = "WAITING_CONFIRMATION";
    EventStatus["Confirmed"] = "CONFIRMED";
    EventStatus["WaitingForFreeSeat"] = "WAITING_FOR_FREE_SEAT";
    EventStatus["NoResponse"] = "NO_RESPONSE";
    EventStatus["NotAvailable"] = "NOT_AVAILABLE";
    EventStatus["HasCancelled"] = "HAS_CANCELLED";
    EventStatus["HasCancelledAfterHavingConfirmed"] = "HAS_CANCELLED_AFTER_HAVING_CONFIRMED";
})(EventStatus = exports.EventStatus || (exports.EventStatus = {}));

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const user_1 = require("./user");
const base_wall_1 = require("./base_wall");
const feed_1 = require("../rest/feed");
var ActionType;
(function (ActionType) {
    ActionType["Publish"] = "PUBLISH";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
class Feed extends model_1.Model {
    constructor() {
        super(...arguments);
        this.action = ActionType.Publish;
    }
    set target(o) {
        this._target = new base_wall_1.BaseWall(o, this.conf);
    }
    get target() {
        return this._target;
    }
    set object(o) {
        this._object = new base_wall_1.BaseWall(o, this.conf);
    }
    get object() {
        return this._object;
    }
    set actor(o) {
        this._actor = new user_1.User(o, this.conf);
    }
    get actor() {
        return this._actor;
    }
    get created_date() {
        return this.object.created_date;
    }
    set created_date(s) {
    }
    get createdDate() {
        return this.object ? this.object.getCreatedDate : null;
    }
    get body_message() {
        return this.object.body_message ? this.object.body_message : '';
    }
    addLike() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.object.addLike();
        });
    }
    getLikes() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.object.getLikes();
        });
    }
    deleteLike() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.object.deleteLike();
        });
    }
    addComment(comment) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.object.addComment(comment);
        });
    }
    getComments() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.object.getComments();
        });
    }
    abuse() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new feed_1.RestFeed(this.conf)).abuse(this.object.id);
        });
    }
    ignore() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new feed_1.RestFeed(this.conf)).ignore(this.object.id);
        });
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new feed_1.RestFeed(this.conf)).delete(this.object.id);
        });
    }
}
exports.Feed = Feed;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const access_control_1 = require("./access_control");
const text_wall_message_1 = require("./text_wall_message");
class FeedPost {
    toJson() {
        return JSON.stringify(this.getJsonParameters());
    }
    getJsonParameters() {
        return {
            message: this._message,
            access_control: this._visibility !== undefined ? this._visibility : access_control_1.AccessControl.Friend
        };
    }
    setMessage(message) {
        this._message = message;
        return this;
    }
    setImage(image) {
        this._image = image;
        return this;
    }
    setTagEntities(t) {
        this._tag_entities = t;
    }
    setVisibility(visible) {
        this._visibility = visible;
        return this;
    }
    hasPhoto() {
        return this._image !== undefined;
    }
    get textWallMessage() {
        return new text_wall_message_1.TextWallMessage({}).setVisibility(this._visibility).setMessage(this._message).setTagEntities(this._tag_entities);
    }
}
exports.FeedPost = FeedPost;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FileData {
    loadFromBase64(data) {
        this.data = data;
        return this;
    }
    get blob() {
        return this.file;
    }
    /**
     * Works only with browsers, do not use with nodejs
     * @param {File} file
     * @returns {FileData}
     */
    loadFromFileBrowser(file) {
        this.file = file;
        return this;
    }
    toString() {
        return this.data;
    }
}
exports.FileData = FileData;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
class Flag extends model_1.Model {
}
exports.Flag = Flag;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const user_1 = require("./user");
class FriendRequests extends model_1.Model {
    set incoming(list) {
        let users;
        for (let u in list) {
            users.push(new user_1.User(u));
        }
        this._incoming = users;
    }
    get incoming() {
        return this._incoming;
    }
    set outgoing(list) {
        let users;
        for (let u in list) {
            users.push(new user_1.User(u));
        }
        this._outgoing = users;
    }
    get outgoing() {
        return this._outgoing;
    }
}
exports.FriendRequests = FriendRequests;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Gender;
(function (Gender) {
    Gender["Male"] = "MALE";
    Gender["Female"] = "FEMALE";
})(Gender = exports.Gender || (exports.Gender = {}));

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class GenericFormData {
    constructor() {
        this.parts = [];
    }
    set(name, value, contentType, filename) {
        this.parts.push(new GenericFormDataValue(name, value, contentType, filename));
    }
    append(name, value, contentType, filename) {
        this.set(name, value, filename, contentType);
    }
    getHeaders() {
        return {
            "Content-Type": 'multipart/form-data; boundary="' + this.getBoundary() + '"',
        };
    }
    getBoundary() {
        return this.boundary ? this.boundary : this.boundary = Date.now().toString();
    }
    getBody() {
        return __awaiter(this, void 0, void 0, function* () {
            let bodyParts = [];
            for (let part of this.parts) {
                bodyParts.push(...yield part.getBodyPart(this.getBoundary()));
            }
            bodyParts.push('--' + this.getBoundary() + '--', '');
            return bodyParts.join('\r\n');
        });
    }
}
exports.GenericFormData = GenericFormData;
const allowedChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ._-+,@£$€!½§~'=()[]{}0123456789";
class GenericFormDataValue {
    constructor(name, value, contentType = "text/plain", filename = null) {
        this.name = name;
        this.value = value;
        this.filename = filename;
        this.contentType = contentType;
    }
    getBodyPart(boundary) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.filename != undefined) {
                return yield this.getArrayBufferPart(boundary);
            }
            return [
                '--' + boundary,
                'Content-Disposition: form-data; name="' + this.name + '"',
                'Content-Type: ' + this.contentType + "; charset=UTF-8",
                '',
                this.value
            ];
        });
    }
    getBase64Part(boundary) {
        return __awaiter(this, void 0, void 0, function* () {
            let body;
            if (typeof this.value == typeof new Blob()) {
                let reader = new FileReader();
                reader.onload = function () {
                    body = String(reader.result).split(',')[1];
                };
                reader.readAsDataURL(this.value);
            }
            else {
                body = (new Buffer(this.value)).toString('base64');
            }
            return [
                '--' + boundary,
                'Content-Disposition: form-data; name="' + this.name + '"; filename="' + this.filename + '"',
                'Content-Type: ' + this.contentType,
                'Content-Transfer-Encoding: base64',
                '',
                body
            ];
        });
    }
}

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_wall_1 = require("./base_wall");
const photo_1 = require("./photo");
const custom_field_1 = require("./custom_field");
const group_member_1 = require("./group_member");
const location_1 = require("./location");
const group_1 = require("../rest/group");
const group_wall_1 = require("../rest/group_wall");
const utils_1 = require("./utils");
class Group extends base_wall_1.BaseWall {
    getJsonParameters() {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            group_member_access_control: this.group_member_access_control,
            location: this.location ? this.location.getJsonParameters() : null,
            custom_fields: this._custom_fields ? utils_1.listToParameters(this._custom_fields) : null,
        };
    }
    join() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new group_1.RestGroup(this.conf)).join(this.id);
        });
    }
    leave() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new group_1.RestGroup(this.conf)).leave(this.id);
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new group_1.RestGroup(this.conf)).update(this);
        });
    }
    addMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            return (new group_wall_1.RestGroupWall(this.conf)).createMessage(this.id, message);
        });
    }
    setName(name) {
        this.name = name;
        return this;
    }
    setDescription(desc) {
        this.description = desc;
        return this;
    }
    setAccessControl(ac) {
        this.group_member_access_control = ac;
        return this;
    }
    setLocation(l) {
        this.location = l;
        return this;
    }
    get custom_fields() {
        return this._custom_fields;
    }
    set custom_fields(c) {
        if (!c) {
            return;
        }
        let list = [];
        for (let m of c) {
            list.push(new custom_field_1.CustomField(m, this.conf));
        }
        this._custom_fields = list;
    }
    get members() {
        return this._members;
    }
    set members(members) {
        if (!members) {
            return;
        }
        let list = [];
        for (let m of members) {
            list.push(new group_member_1.GroupMember(m, this.conf));
        }
        this._members = list;
    }
    get profile_cover_photo() {
        return this._profile_cover_photo;
    }
    set profile_cover_photo(p) {
        this._profile_cover_photo = new photo_1.Photo(p, this.conf);
    }
    get profile_photo() {
        return this._profile_photo;
    }
    set profile_photo(p) {
        this._profile_photo = new photo_1.Photo(p, this.conf);
    }
    get location() {
        return this._location;
    }
    set location(l) {
        this._location = new location_1.Location(l);
    }
}
exports.Group = Group;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const group_1 = require("./group");
const model_1 = require("./model");
const user_1 = require("./user");
class GroupMember extends model_1.Model {
    get group() {
        return this._group;
    }
    set group(g) {
        this._group = new group_1.Group(g, this.conf);
    }
    get user() {
        return this._user;
    }
    set user(g) {
        this._user = new user_1.User(g, this.conf);
    }
}
exports.GroupMember = GroupMember;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GroupMemberAccessControl;
(function (GroupMemberAccessControl) {
    GroupMemberAccessControl["Public"] = "PUBLIC";
    GroupMemberAccessControl["FriendOfFriend"] = "FRIEND_OF_FRIEND";
})(GroupMemberAccessControl = exports.GroupMemberAccessControl || (exports.GroupMemberAccessControl = {}));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GroupStatus;
(function (GroupStatus) {
    GroupStatus["WaitingForApproval"] = "WAITING_FOR_APPROVAL";
    GroupStatus["NotAvailable"] = "NOT_AVAILABLE";
    GroupStatus["Member"] = "MEMBER";
    GroupStatus["WasMember"] = "WAS_MEMBER";
    GroupStatus["WasWaitingForApproval"] = "WAS_WAITING_FOR_APPROVAL";
})(GroupStatus = exports.GroupStatus || (exports.GroupStatus = {}));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tag_entity_abstract_1 = require("./tag_entity_abstract");
class HashTag extends tag_entity_abstract_1.TagEntityAbstract {
    getJsonParameters() {
        return {
            text: this.text,
            start_index: this.start_index,
            indices: this.indices,
        };
    }
    get text_shown() {
        return this.text;
    }
    get indices() {
        return [this.start_index, this.end_index];
    }
    set indices(indices) {
        if (!indices) {
            return;
        }
        if (indices.length == 2) {
            this.start_index = indices[0];
            this.end_index = indices[1];
            return;
        }
    }
}
exports.HashTag = HashTag;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const model_1 = require("./model");
class Like extends model_1.Model {
    get id() {
        return this.id_str;
    }
    set id(id) {
        // int64 cannot be interpreted by browsers
    }
    set owner(o) {
        this._owner = new user_1.User(o);
    }
    get owner() {
        return this._owner;
    }
}
exports.Like = Like;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const like_1 = require("./like");
const model_1 = require("./model");
class LikeBlob extends model_1.Model {
    get samples() {
        return this._samples;
    }
    set samples(likes) {
        this._samples = [];
        for (let l of likes) {
            this._samples.push(new like_1.Like(l, this.conf));
        }
    }
}
exports.LikeBlob = LikeBlob;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __importStar(require("lodash"));
const simple_location_1 = require("./simple_location");
class Location {
    constructor(o) {
        _.forOwn(o, (value, key) => {
            this[key] = value;
        });
    }
    getJsonParameters() {
        return {
            location: this._location.getJsonParameters()
        };
    }
    toJson() {
        return JSON.stringify(this.getJsonParameters());
    }
    set latitude(l) {
        if (this.location === undefined) {
            this.location = new simple_location_1.SimpleLocation();
        }
        this.location.latitude = l;
    }
    get latitude() {
        return this.location ? this.location.latitude : null;
    }
    set longitude(l) {
        if (this.location === undefined) {
            this.location = new simple_location_1.SimpleLocation();
        }
        this.location.longitude = l;
    }
    get longitude() {
        return this.location ? this.location.longitude : null;
    }
    set location(location) {
        this._location = new simple_location_1.SimpleLocation(location);
    }
    get location() {
        return this._location;
    }
}
exports.Location = Location;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
class LoginCredentials extends model_1.Model {
    toJson() {
        return JSON.stringify(this.getJsonParameters());
    }
    getJsonParameters() {
        return { username: this.username, password: this.password };
    }
}
exports.LoginCredentials = LoginCredentials;

"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __importStar(require("lodash"));
class Model {
    load(o, conf) {
        if (conf !== undefined) {
            this.conf = conf;
        }
        _.forOwn(o, (value, key) => {
            this[key] = value;
        });
    }
    constructor(o, conf) {
        if (o !== undefined) {
            this.load(o, conf);
        }
        if (conf !== undefined) {
            this.load(o, conf);
        }
    }
    toJson() {
        return JSON.stringify(this.getJsonParameters());
    }
    getJsonParameters() {
        return this;
    }
}
exports.Model = Model;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const model_1 = require("./model");
class Notification extends model_1.Model {
    get root_url() {
        if (this.url === undefined) {
            return undefined;
        }
        let url = new URL(this.url);
        return url.protocol + '//' + url.host;
    }
    get id() {
        if (this.url === undefined) {
            return undefined;
        }
        return (new URL(this.url)).pathname.split("/")[2];
    }
    get owner() {
        return this.payload['owner'] !== undefined ? new user_1.User(this.payload['user']) : null;
    }
    get recipient_user_id() {
        return this.payload['owner'];
    }
    get recipient_device_id() {
        return this.payload['recipient_device_id'];
    }
}
exports.Notification = Notification;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_location_1 = require("./base_location");
const model_1 = require("./model");
class NotificationAck extends model_1.Model {
    constructor() {
        super(...arguments);
        this.advertising_id = null;
    }
    get location() {
        return this._location;
    }
    set location(a) {
        this._location = new base_location_1.BaseLocation(a);
    }
}
exports.NotificationAck = NotificationAck;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const tag_entities_1 = require("./tag_entities");
const base_1 = require("./base");
class Photo extends model_1.Model {
    get tag_entities() {
        return new tag_entities_1.TagEntities(this._tag_entities);
    }
    set tag_entities(o) {
        this._tag_entities = new tag_entities_1.TagEntities(o);
    }
    get target() {
        return new base_1.Base(this._target);
    }
    set target(o) {
        this._target = new base_1.Base(o);
    }
}
exports.Photo = Photo;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const photo_1 = require("./photo");
class PhotoAlbum extends model_1.Model {
    set photos(photos) {
        let list = [];
        for (let p in photos) {
            list.push(new photo_1.Photo(p, this.conf));
        }
        this._photos = list;
    }
    get photos() {
        return this._photos;
    }
}
exports.PhotoAlbum = PhotoAlbum;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const notification_1 = require("./notification");
const model_1 = require("./model");
const notification_2 = require("../rest/notification");
class PreviewNotification extends model_1.Model {
    get id() {
        return this.id_str;
    }
    consume() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new notification_2.RestNotification(this.conf)).getUnreadAndConsume(this.id);
        });
    }
    get last_notification() {
        return this._last_notification;
    }
    set last_notification(l) {
        this._last_notification = new notification_1.Notification(l);
    }
}
exports.PreviewNotification = PreviewNotification;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
class ResetIdentifier extends model_1.Model {
}
exports.ResetIdentifier = ResetIdentifier;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
class SearchQuery {
    get user() {
        return this._user;
    }
    set user(u) {
        this._user = new user_1.User(u);
    }
}
exports.SearchQuery = SearchQuery;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchResult {
}
exports.SearchResult = SearchResult;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const feed_1 = require("./feed");
const group_1 = require("./group");
const event_1 = require("./event");
const model_1 = require("./model");
class SearchResultTypes extends model_1.Model {
    set users(o) {
        this._users = new UserSearchResult(o);
    }
    get users() {
        return this._users;
    }
    set feeds(o) {
        this._feeds = new FeedsSearchResult(o);
    }
    get feeds() {
        return this._feeds;
    }
    set groups(o) {
        this._groups = new GroupSearchResult(o);
    }
    get groups() {
        return this._groups;
    }
    set events(o) {
        this._events = new EventSearchResult(o);
    }
    get events() {
        return this._events;
    }
}
exports.SearchResultTypes = SearchResultTypes;
class UserSearchResult extends model_1.Model {
    set data(users) {
        if (!users) {
            return;
        }
        let list = [];
        for (let user of users) {
            list.push(new user_1.User(user));
        }
        this._data = list;
    }
}
exports.UserSearchResult = UserSearchResult;
class FeedsSearchResult extends model_1.Model {
    set data(feeds) {
        if (!feeds) {
            return;
        }
        let list = [];
        for (let feed of feeds) {
            list.push(new feed_1.Feed(feed));
        }
        this._data = list;
    }
}
exports.FeedsSearchResult = FeedsSearchResult;
class GroupSearchResult extends model_1.Model {
    set data(groups) {
        if (!groups) {
            return;
        }
        let list = [];
        for (let group of groups) {
            list.push(new group_1.Group(group));
        }
        this._data = list;
    }
}
exports.GroupSearchResult = GroupSearchResult;
class EventSearchResult extends model_1.Model {
    set data(events) {
        if (!events) {
            return;
        }
        let list = [];
        for (let event of events) {
            list.push(new event_1.Event(event));
        }
        this._data = list;
    }
}
exports.EventSearchResult = EventSearchResult;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const search_result_types_1 = require("./search_result_types");
const model_1 = require("./model");
class SearchResults extends model_1.Model {
    set results_by_type(results) {
        this._results_by_type = new search_result_types_1.SearchResultTypes(results);
    }
    get results_by_type() {
        return this._results_by_type;
    }
}
exports.SearchResults = SearchResults;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SimpleLocation {
    constructor(o) {
        if (o !== undefined && o['latitude'] !== undefined) {
            this.latitude = o['latitude'];
        }
        if (o !== undefined && o['longitude'] !== undefined) {
            this.longitude = o['longitude'];
        }
    }
    toJson() {
        return JSON.stringify(this.getJsonParameters());
    }
    getJsonParameters() {
        return {
            latitude: this.latitude,
            longitude: this.longitude,
        };
    }
}
exports.SimpleLocation = SimpleLocation;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SortOrder;
(function (SortOrder) {
    SortOrder["Asc"] = "ASC";
    SortOrder["Desc"] = "DESC";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_wall_1 = require("./base_wall");
const status_like_1 = require("../rest/status_like");
const status_comment_1 = require("../rest/status_comment");
const status_1 = require("../rest/status");
class Status extends base_wall_1.BaseWall {
    get body_message() {
        return this.message;
    }
    getLikes() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new status_like_1.RestStatusLike(this.conf)).list(this.id);
        });
    }
    addLike() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new status_like_1.RestStatusLike(this.conf)).create(this.id_str);
        });
    }
    deleteLike() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new status_like_1.RestStatusLike(this.conf)).delete(this.id_str);
        });
    }
    getComments() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new status_comment_1.RestStatusComment(this.conf)).list(this.id_str);
        });
    }
    addComment(comment) {
        return __awaiter(this, void 0, void 0, function* () {
            return (new status_comment_1.RestStatusComment(this.conf)).create(this.id_str, comment);
        });
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new status_1.RestStatus(this.conf)).delete(this.id_str);
        });
    }
}
exports.Status = Status;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const user_mention_tag_1 = require("./user_mention_tag");
const url_tag_1 = require("./url_tag");
const hash_tag_1 = require("./hash_tag");
const utils_1 = require("./utils");
class TagEntities extends model_1.Model {
    getJsonParameters() {
        return {
            user_mention_tags: utils_1.listToParameters(this.user_mention_tags),
            url_tags: utils_1.listToParameters(this.url_tags),
            hash_tags: utils_1.listToParameters(this.hash_tags)
        };
    }
    get user_mention_tags() {
        return this._user_mention_tags;
    }
    set user_mention_tags(list) {
        let listObj = [];
        for (let u of list) {
            listObj.push(new user_mention_tag_1.UserMentionTag(u));
        }
        this._user_mention_tags = listObj;
    }
    get url_tags() {
        return this._url_tags;
    }
    set url_tags(list) {
        let listObj = [];
        for (let u of list) {
            listObj.push(new url_tag_1.URLTag(u));
        }
        this._url_tags = listObj;
    }
    get hash_tags() {
        return this._hash_tags;
    }
    set hash_tags(list) {
        let listObj = [];
        for (let u of list) {
            listObj.push(new hash_tag_1.HashTag(u));
        }
        this._hash_tags = listObj;
    }
}
exports.TagEntities = TagEntities;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
class TagEntity extends model_1.Model {
    getJsonParameters() {
        return {
            type: this.type,
            text: this.text,
            text_shown: this.text_shown,
            indices: this.indices,
        };
    }
}
exports.TagEntity = TagEntity;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tag_entities_1 = require("./tag_entities");
const model_1 = require("./model");
class TagEntityAbstract extends model_1.Model {
    getJsonParameters() {
        return {
            tag_entities: this.tag_entities.getJsonParameters(),
        };
    }
    get tag_entities() {
        return this._tag_entities;
    }
    set tag_entities(t) {
        this._tag_entities = new tag_entities_1.TagEntities(t);
    }
}
exports.TagEntityAbstract = TagEntityAbstract;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_wall_1 = require("./base_wall");
const tag_entities_1 = require("./tag_entities");
class TextWallMessage extends base_wall_1.BaseWall {
    getJsonParameters() {
        return {
            message: this.message,
            tag_entities: this.tag_entities ? this.tag_entities.getJsonParameters() : null,
            access_control: this.access_control,
        };
    }
    get tag_entities() {
        return this._tag_entities;
    }
    set tag_entities(t) {
        this._tag_entities = new tag_entities_1.TagEntities(t);
    }
    setMessage(message) {
        this.message = message;
        return this;
    }
    setTagEntities(t) {
        this.tag_entities = t;
        return this;
    }
    setVisibility(ac) {
        this.access_control = ac;
        return this;
    }
}
exports.TextWallMessage = TextWallMessage;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tag_entity_abstract_1 = require("./tag_entity_abstract");
class URLTag extends tag_entity_abstract_1.TagEntityAbstract {
    get text() {
        return this.original_url;
    }
    get text_shown() {
        return this.original_url_to_display;
    }
    get indices() {
        return [this.start_index, this.end_index];
    }
    set indices(indices) {
        if (!indices) {
            return;
        }
        if (indices.length == 2) {
            this.start_index = indices[0];
            this.end_index = indices[1];
            return;
        }
    }
}
exports.URLTag = URLTag;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const photo_1 = require("./photo");
const custom_field_1 = require("./custom_field");
const status_1 = require("./status");
const location_1 = require("./location");
const flag_1 = require("./flag");
const model_1 = require("./model");
class User extends model_1.Model {
    constructor() {
        super(...arguments);
        this._custom_fields = [];
    }
    getJsonParameters() {
        return {
            id: this.id,
            first_name: this.first_name,
            last_name: this.last_name,
            password: this.password,
            email: this.email,
            gender: this.gender,
            date_of_birth: this.date_of_birth,
            presentation: this.presentation,
        };
    }
    get id() {
        return this.id_str;
    }
    set id(id) {
        // int64 cannot be interpreted by browsers
    }
    set displayed_photo(o) {
        this._displayed_photo = new photo_1.Photo(o);
    }
    get displayed_photo() {
        return this._displayed_photo;
    }
    set profile_photo(p) {
        this._profile_photo = new photo_1.Photo(p, this.conf);
    }
    get profile_photo() {
        return this._profile_photo;
    }
    set flag(p) {
        this._flag = new flag_1.Flag(p, this.conf);
    }
    get flag() {
        return this._flag;
    }
    set living_location(p) {
        this._living_location = new location_1.Location(p);
    }
    get living_location() {
        return this._living_location;
    }
    set current_status(p) {
        this._current_status = new status_1.Status(p, this.conf);
    }
    get current_status() {
        return this._current_status;
    }
    set custom_fields(list) {
        this._custom_fields = [];
        for (let c of list) {
            this._custom_fields.push(new custom_field_1.CustomField(c, this.conf));
        }
    }
    get custom_fields() {
        return this._custom_fields;
    }
}
exports.User = User;
var Gender;
(function (Gender) {
    Gender["Male"] = "MALE";
    Gender["Female"] = "FEMALE";
})(Gender = exports.Gender || (exports.Gender = {}));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tag_entity_abstract_1 = require("./tag_entity_abstract");
const user_1 = require("./user");
const feed_1 = require("./feed");
class UserMentionTag extends tag_entity_abstract_1.TagEntityAbstract {
    get text() {
        return this.mentioned_user ? this.mentioned_user.displayed_name : "";
    }
    get text_shown() {
        // TODO
        return "";
    }
    get indices() {
        return [this.start_index, this.end_index];
    }
    set indices(indices) {
        if (!indices) {
            return;
        }
        if (indices.length == 2) {
            this.start_index = indices[0];
            this.end_index = indices[1];
            return;
        }
    }
    get mentioned_user() {
        return this._mentioned_user;
    }
    set mentioned_user(u) {
        this._mentioned_user = new user_1.User(u);
    }
    get target() {
        return this._target;
    }
    set target(u) {
        this._target = new feed_1.Feed(u);
    }
}
exports.UserMentionTag = UserMentionTag;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
class UserSettings extends model_1.Model {
    set notification(n) {
        this._notification = new UserSettingsNotification(n);
    }
    get notification() {
        return this._notification;
    }
}
exports.UserSettings = UserSettings;
class UserSettingsNotification extends model_1.Model {
}
exports.UserSettingsNotification = UserSettingsNotification;
var MailFrequency;
(function (MailFrequency) {
    MailFrequency["Never"] = "NEVER";
    MailFrequency["RealTime"] = "READ_TIME";
    MailFrequency["Daily"] = "DAILY";
    MailFrequency["Weekly"] = "WEEKLY";
})(MailFrequency = exports.MailFrequency || (exports.MailFrequency = {}));
var LanguageZone;
(function (LanguageZone) {
    LanguageZone["EN"] = "EN";
    LanguageZone["FR"] = "FR";
    LanguageZone["DE"] = "DE";
})(LanguageZone = exports.LanguageZone || (exports.LanguageZone = {}));
var InterfaceLanguage;
(function (InterfaceLanguage) {
    InterfaceLanguage["EN"] = "EN";
    InterfaceLanguage["FR"] = "FR";
    InterfaceLanguage["DE"] = "DE";
})(InterfaceLanguage = exports.InterfaceLanguage || (exports.InterfaceLanguage = {}));
exports.DefaultInterfaceLanguage = InterfaceLanguage.EN;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
class UserStat extends model_1.Model {
}
exports.UserStat = UserStat;
var UserStatus;
(function (UserStatus) {
    UserStatus["Disabled"] = "DISABLED";
    UserStatus["Riding"] = "RIDING";
    UserStatus["Unknown"] = "UNKNOWN";
    UserStatus["Connected"] = "CONNECTED";
    UserStatus["Away"] = "AWAY";
    UserStatus["NotConnected"] = "NOT_CONNECTED";
})(UserStatus = exports.UserStatus || (exports.UserStatus = {}));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function listToParameters(models) {
    if (!models) {
        return null;
    }
    let list = [];
    for (let m of models) {
        if (m.getJsonParameters !== undefined) {
            list.push(m.getJsonParameters());
        }
    }
    return list;
}
exports.listToParameters = listToParameters;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const account_1 = require("../models/account");
const photo_1 = require("../models/photo");
const generic_form_data_1 = require("../models/generic_form_data");
class RestAccount extends rest_1.Rest {
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.get(new account_1.Account(), '/account');
        });
    }
    update(acc) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.put(new account_1.Account(), "/account", acc);
        });
    }
    delete(loginCredentials) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.delete("/account", { data: loginCredentials.toJson() });
        });
    }
    getCover() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.get(new photo_1.Photo(), "/account/profile/cover/photo");
        });
    }
    updateCover(image) {
        return __awaiter(this, void 0, void 0, function* () {
            let fd = new generic_form_data_1.GenericFormData();
            fd.set("file", image.blob, 'image/png', "image.png");
            return this.conf.postMultipart(new photo_1.Photo(), "/account/profile/cover/photo", fd);
        });
    }
    getProfilePhoto() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.get(new photo_1.Photo(), "/account/profile/photo");
        });
    }
    updateProfilePhoto(image) {
        return __awaiter(this, void 0, void 0, function* () {
            let fd = new generic_form_data_1.GenericFormData();
            fd.set("file", image.blob, 'image/png', "image.png");
            return this.conf.postMultipart(new photo_1.Photo(), "/account/profile/photo", fd);
        });
    }
}
exports.RestAccount = RestAccount;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const conversation_1 = require("../models/conversation");
const conversation_message_1 = require("../models/conversation_message");
const generic_form_data_1 = require("../models/generic_form_data");
class RestConversation extends rest_1.Rest {
    list(page, size = 20) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = {
                page: page,
                size: size,
                messageSamples: 1,
            };
            return this.conf.getList(new conversation_1.Conversation(), "/conversation?" + rest_1.Rest.encodeQueryData(params));
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.get(new conversation_1.Conversation(), "/conversation/" + id);
        });
    }
    create(conversation) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new conversation_1.Conversation(), "/conversation", conversation);
        });
    }
    update(id, conversation) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.put(new conversation_1.Conversation(), "/conversation/" + id, conversation);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.delete("/conversation/" + id);
        });
    }
    consume(id, page, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = rest_1.Rest.params("/conversation/{id}/message/consume", { id: id }) + rest_1.Rest.encodeQueryData({
                page: page,
                size: size,
            });
            return this.conf.getList(new conversation_message_1.ConversationMessage(), path);
        });
    }
    addPhoto(id, photo, message, tagEntities) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = new generic_form_data_1.GenericFormData();
            f.set("file", photo.blob, 'image/png', "image.png");
            if (message !== undefined && message != "") {
                f.append("message", message);
            }
            if (tagEntities !== undefined) {
                f.append("tag_entities", tagEntities.toJson());
            }
            let path = rest_1.Rest.params("/conversation/{id}/message/photo", { id: id });
            return this.conf.postMultipart(new conversation_message_1.ConversationMessage(), path, f);
        });
    }
}
exports.RestConversation = RestConversation;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const conversation_message_1 = require("../models/conversation_message");
const generic_form_data_1 = require("../models/generic_form_data");
class RestConversationMessage extends rest_1.Rest {
    list(id, page, size) {
        return __awaiter(this, void 0, void 0, function* () {
            size = size !== undefined ? size : 10;
            let path = rest_1.Rest.params("/conversation/{id}/message", { id: id });
            path = path + '?' + rest_1.Rest.encodeQueryData({ page: page, size: size });
            return this.conf.getList(new conversation_message_1.ConversationMessage(), path);
        });
    }
    create(id, message) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = rest_1.Rest.params("/conversation/{id}/message", { id: id });
            return this.conf.post(new conversation_message_1.ConversationMessage(), path, message);
        });
    }
    postFile(id, message) {
        return __awaiter(this, void 0, void 0, function* () {
            let fd = new generic_form_data_1.GenericFormData();
            fd.set("file", message.image.blob, 'image/png', "image.png");
            fd.set("message", message.message);
            let path = rest_1.Rest.params("/conversation/{id}/message", { id: id });
            return this.conf.postMultipart(new conversation_message_1.ConversationMessage(), path, fd);
        });
    }
}
exports.RestConversationMessage = RestConversationMessage;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorResponse {
    constructor(error) {
        this.error = error;
    }
    get message() {
        return this.error.response ? this.error.response.data.message : '';
    }
    get exception() {
        return this.error.response ? this.error.response.data.exception : '';
    }
    get path() {
        return this.error.response ? this.error.response.data.path : '';
    }
    get status() {
        return this.error.response && this.error.response.data.status ? this.error.response.data.status : 0;
    }
}
exports.ErrorResponse = ErrorResponse;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const event_1 = require("../models/event");
const custom_field_1 = require("../models/custom_field");
const event_member_1 = require("../models/event_member");
const empty_1 = require("../models/empty");
const photo_1 = require("../models/photo");
const feed_1 = require("../models/feed");
const generic_form_data_1 = require("../models/generic_form_data");
class RestEvent extends rest_1.Rest {
    list(page, limited, size, location, params) {
        return __awaiter(this, void 0, void 0, function* () {
            params = params !== undefined ? params : {};
            params['page'] = page;
            params['limited'] = limited === true;
            params['size'] = size;
            if (location !== undefined) {
                params['latitude'] = location.latitude;
                params['longitude'] = location.longitude;
            }
            return this.conf.getList(new event_1.Event(), "/event?" + rest_1.Rest.encodeQueryData(params));
        });
    }
    listByZone(page, limited, size, lowerLatitude, lowerLongitude, upperLatitude, upperLongitude) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = {
                lower_latitude: lowerLatitude,
                lower_longitude: lowerLongitude,
                upper_latitude: upperLatitude,
                upper_longitude: upperLongitude
            };
            return this.list(page, limited, size, undefined, params);
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.get(new event_1.Event(), "/event/" + id);
        });
    }
    create(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new event_1.Event(), "/event", event);
        });
    }
    update(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.put(new event_1.Event(), "/event/" + event.id, event);
        });
    }
    cancel(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.postVoid(rest_1.Rest.params("/event/{id}/cancel", { id: id }), new empty_1.Empty());
        });
    }
    getCustomFields() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new custom_field_1.CustomField(), "/event/customfield");
        });
    }
    getEventCustomFields(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new custom_field_1.CustomField(), rest_1.Rest.params("/event/{id}/customfield", { id: id }));
        });
    }
    getMembers(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new event_member_1.EventMember(), rest_1.Rest.params("event/{id}/member", { id: id }));
        });
    }
    join(eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new event_member_1.EventMember(), rest_1.Rest.params("/event/{id}/member", { id: eventId }), new empty_1.Empty());
        });
    }
    leave(eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.delete(rest_1.Rest.params("/event/{id}/member", { id: eventId }));
        });
    }
    getPhotos(eventId, page) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = { page: page !== undefined ? page : 0 };
            let path = rest_1.Rest.params("/event/{id}/photo", { id: eventId }) + rest_1.Rest.encodeQueryData(params);
            return this.conf.getList(new photo_1.Photo(), path);
        });
    }
    addPhoto(eventId, photo, message, accessControl, tagEntities) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = new generic_form_data_1.GenericFormData();
            f.set("file", photo.blob, 'image/png', "image.png");
            if (message !== undefined) {
                f.append("message", message);
            }
            if (accessControl !== undefined) {
                f.append("access_control", accessControl);
            }
            if (tagEntities !== undefined) {
                f.append("tag_entities", tagEntities.toJson());
            }
            return this.conf.postMultipart(new feed_1.Feed(), rest_1.Rest.params("/event/{id}/photo", { id: eventId }), f);
        });
    }
    getProfilePhoto(eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.get(new photo_1.Photo(), rest_1.Rest.params("/event/{id}/profile/photo", { id: eventId }));
        });
    }
    updateProfilePhoto(eventId, photo) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = new generic_form_data_1.GenericFormData();
            f.set("file", photo.blob, 'image/png', "image.png");
            return this.conf.postMultipart(new photo_1.Photo(), rest_1.Rest.params("/event/{id}/profile/photo", { id: eventId }), f);
        });
    }
    getProfileCoverPhoto(eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.get(new photo_1.Photo(), rest_1.Rest.params("/event/{id}/profile/cover/photo", { id: eventId }));
        });
    }
    updateProfileCoverPhoto(eventId, photo) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = new generic_form_data_1.GenericFormData();
            f.set("file", photo.blob, 'image/png', "image.png");
            return this.conf.postMultipart(new photo_1.Photo(), rest_1.Rest.params("/event/{id}/profile/cover/photo", { id: eventId }), f);
        });
    }
}
exports.RestEvent = RestEvent;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const feed_1 = require("../models/feed");
class RestEventWall extends rest_1.Rest {
    list(eventId, page, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = rest_1.Rest.params("/event/{id}/wall?", { id: eventId }) + rest_1.Rest.encodeQueryData({
                page: page,
                size: size !== undefined ? size : 20
            });
            return this.conf.getList(new feed_1.Feed(), path);
        });
    }
    createMessage(eventId, message) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new feed_1.Feed(), rest_1.Rest.params("/event/{id}/wall/message", { id: eventId }), message);
        });
    }
    updateMessage(eventId, messageId, message) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = rest_1.Rest.params("/event/{id}/wall/message/{messageId}", { id: eventId, messageId: messageId });
            return this.conf.put(new feed_1.Feed(), path, message);
        });
    }
    deleteMessage(eventId, messageId) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = rest_1.Rest.params("/event/{id}/wall/message/{messageId}", { id: eventId, messageId: messageId });
            return this.conf.delete(path);
        });
    }
}
exports.RestEventWall = RestEventWall;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const feed_1 = require("../models/feed");
const empty_1 = require("../models/empty");
class RestFeed extends rest_1.Rest {
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.get(new feed_1.Feed(), rest_1.Rest.params('/feed/{id}', { id: id }));
        });
    }
    list(page = 0, size = 10, params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            params['page'] = page;
            params['size'] = size;
            return this.conf.getList(new feed_1.Feed(), '/feed?' + rest_1.Rest.encodeQueryData(params));
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.delete(rest_1.Rest.params("/feed/{id}", { id: id }));
        });
    }
    addMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new feed_1.Feed(), "/feed/message", message);
        });
    }
    updateMessage(messageId, message) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new feed_1.Feed(), "/feed/message/" + messageId, message);
        });
    }
    abuse(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.postVoid(rest_1.Rest.params("/feed/{id}/abuse", { id: id }), new empty_1.Empty());
        });
    }
    ignore(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.postVoid(rest_1.Rest.params("/feed/{id}/ignore", { id: id }), new empty_1.Empty());
        });
    }
}
exports.RestFeed = RestFeed;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const comment_1 = require("../models/comment");
const generic_form_data_1 = require("../models/generic_form_data");
class RestFeedComment extends rest_1.Rest {
    create(id, comment) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new comment_1.Comment(), rest_1.Rest.params("feed/{id}/comment", { id: id }), comment);
        });
    }
    list(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new comment_1.Comment(), rest_1.Rest.params("feed/{id}/comment", { id: id }));
        });
    }
    addPhoto(id, photo, message, tagEntities) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = new generic_form_data_1.GenericFormData();
            f.set("file", photo.blob, 'image/png', "image.png");
            if (message !== undefined) {
                f.append("name", message);
            }
            if (tagEntities !== undefined) {
                f.append("tag_entities", tagEntities.toJson());
            }
            return this.conf.postMultipart(new comment_1.Comment(), rest_1.Rest.params("/feed/{id}/comment/photo", { id: id }), f);
        });
    }
}
exports.RestFeedComment = RestFeedComment;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const feed_1 = require("../models/feed");
const empty_1 = require("../models/empty");
class RestFeedLike extends rest_1.Rest {
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new feed_1.Feed(), rest_1.Rest.params("feed/{id}/like", { id: id }));
        });
    }
    create(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new feed_1.Feed(), rest_1.Rest.params("feed/{id}/like", { id: id }), new empty_1.Empty());
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.delete(rest_1.Rest.params("feed/{id}/like", { id: id }));
        });
    }
}
exports.RestFeedLike = RestFeedLike;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const user_1 = require("../models/user");
const friend_requests_1 = require("../models/friend_requests");
class RestFriend extends rest_1.Rest {
    list(page, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = { page: page, size: size !== undefined ? size : size };
            return this.conf.getList(new user_1.User(), "/friend?" + rest_1.Rest.encodeQueryData(params));
        });
    }
    listRequests() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.get(new friend_requests_1.FriendRequests(), "/friend/request");
        });
    }
}
exports.RestFriend = RestFriend;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const group_1 = require("../models/group");
const custom_field_1 = require("../models/custom_field");
const feed_1 = require("../models/feed");
const photo_1 = require("../models/photo");
const empty_1 = require("../models/empty");
const group_member_1 = require("../models/group_member");
const generic_form_data_1 = require("../models/generic_form_data");
class RestGroup extends rest_1.Rest {
    list(page, limited, size, location, params) {
        return __awaiter(this, void 0, void 0, function* () {
            params = params !== undefined ? params : {};
            params['page'] = page;
            params['limited'] = limited === true;
            params['size'] = size;
            if (location !== undefined) {
                params['latitude'] = location.latitude;
                params['longitude'] = location.longitude;
            }
            return this.conf.getList(new group_1.Group(), "/group?" + rest_1.Rest.encodeQueryData(params));
        });
    }
    listByZone(page, limited, size, lowerLatitude, lowerLongitude, upperLatitude, upperLongitude) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = {
                lower_latitude: lowerLatitude,
                lower_longitude: lowerLongitude,
                upper_latitude: upperLatitude,
                upper_longitude: upperLongitude
            };
            return this.list(page, limited, size, undefined, params);
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.get(new group_1.Group(), "/group/" + id);
        });
    }
    create(group) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new group_1.Group(), "/group", group);
        });
    }
    update(group) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.put(new group_1.Group(), "/group/" + group.id, group);
        });
    }
    cancel(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.delete("/group/" + id);
        });
    }
    getCustomFields() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new custom_field_1.CustomField(), "/group/customfield");
        });
    }
    getGroupCustomFields(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new custom_field_1.CustomField(), rest_1.Rest.params("/group/{id}/customfield", { id: id }));
        });
    }
    getMembers(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new group_member_1.GroupMember(), rest_1.Rest.params("/group/{id}/member", { id: id }));
        });
    }
    join(eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new group_member_1.GroupMember(), rest_1.Rest.params("/group/{id}/member", { id: eventId }), new empty_1.Empty());
        });
    }
    leave(eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.delete(rest_1.Rest.params("/group/{id}/member", { id: eventId }));
        });
    }
    getPhotos(eventId, page) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = { page: page !== undefined ? page : 0 };
            let path = rest_1.Rest.params("/group/{id}/photo", { id: eventId }) + rest_1.Rest.encodeQueryData(params);
            return this.conf.getList(new photo_1.Photo(), path);
        });
    }
    createPhoto(eventId, photo, message, accessControl, tagEntities) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = new generic_form_data_1.GenericFormData();
            f.set("file", photo.blob, 'image/png', "image.png");
            if (message !== undefined) {
                f.append("message", message);
            }
            if (accessControl !== undefined) {
                f.append("access_control", accessControl);
            }
            if (tagEntities !== undefined) {
                f.append("tag_entities", tagEntities.toJson());
            }
            return this.conf.postMultipart(new feed_1.Feed(), rest_1.Rest.params("/group/{id}/photo", { id: eventId }), f);
        });
    }
    getProfilePhoto(eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.get(new photo_1.Photo(), rest_1.Rest.params("/group/{id}/profile/photo", { id: eventId }));
        });
    }
    updateProfilePhoto(eventId, photo) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = new generic_form_data_1.GenericFormData();
            f.set("file", photo.blob, 'image/png', "image.png");
            return this.conf.postMultipart(new photo_1.Photo(), rest_1.Rest.params("/group/{id}/profile/photo", { id: eventId }), f);
        });
    }
    getProfileCoverPhoto(eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.get(new photo_1.Photo(), rest_1.Rest.params("/group/{id}/profile/cover/photo", { id: eventId }));
        });
    }
    updateProfileCoverPhoto(eventId, photo) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = new generic_form_data_1.GenericFormData();
            f.set("file", photo.blob, 'image/png', "image.png");
            return this.conf.postMultipart(new photo_1.Photo(), rest_1.Rest.params("/group/{id}/profile/cover/photo", { id: eventId }), f);
        });
    }
}
exports.RestGroup = RestGroup;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const feed_1 = require("../models/feed");
class RestGroupWall extends rest_1.Rest {
    list(groupId, page, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = rest_1.Rest.params("/group/{id}/wall?", { id: groupId }) + rest_1.Rest.encodeQueryData({
                page: page,
                size: size !== undefined ? size : 20
            });
            return this.conf.getList(new feed_1.Feed(), path);
        });
    }
    createMessage(groupId, message) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new feed_1.Feed(), rest_1.Rest.params("/group/{id}/wall/message", { id: groupId }), message);
        });
    }
    updateMessage(groupId, messageId, message) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = rest_1.Rest.params("/group/{id}/wall/message/{messageId}", { id: groupId, messageId: messageId });
            return this.conf.put(new feed_1.Feed(), path, message);
        });
    }
    deleteMessage(groupId, messageId) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = rest_1.Rest.params("/group/{id}/wall/message/{messageId}", { id: groupId, messageId: messageId });
            return this.conf.delete(path);
        });
    }
}
exports.RestGroupWall = RestGroupWall;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const authentication_token_1 = require("../models/authentication_token");
class RestLogin extends rest_1.Rest {
    create(cred) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new authentication_token_1.AuthenticationToken(), '/login', cred);
        });
    }
}
exports.RestLogin = RestLogin;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const error_1 = require("./error");
class RestLogout extends rest_1.Rest {
    do() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.conf.httpClient.post('/logout');
                return;
            }
            catch (err) {
                throw new error_1.ErrorResponse(err);
            }
        });
    }
}
exports.RestLogout = RestLogout;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const notification_ack_1 = require("../models/notification_ack");
const preview_notification_1 = require("../models/preview_notification");
class RestNotification extends rest_1.Rest {
    ack(notificationAck) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new notification_ack_1.NotificationAck(), "/notification/ack", notificationAck);
        });
    }
    listRead(page, size) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new preview_notification_1.PreviewNotification(), "/notification/read");
        });
    }
    listUnread(page, size) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new preview_notification_1.PreviewNotification(), "/notification/unread");
        });
    }
    listUnreadAndConsume(page, size) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new preview_notification_1.PreviewNotification(), "/notification/unread/consume");
        });
    }
    getUnreadAndConsume(notificationId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.get(new preview_notification_1.PreviewNotification(), rest_1.Rest.params("notification/{id}/unread/consume", { id: notificationId }));
        });
    }
}
exports.RestNotification = RestNotification;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const photo_1 = require("../models/photo");
const feed_1 = require("../models/feed");
const generic_form_data_1 = require("../models/generic_form_data");
class RestPhoto extends rest_1.Rest {
    list(page, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = { page: page, size: size !== undefined ? size : 10 };
            return this.conf.getList(new photo_1.Photo(), "/photo?" + rest_1.Rest.encodeQueryData(params));
        });
    }
    get(photoId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.get(new photo_1.Photo(), "/photo/" + photoId);
        });
    }
    delete(photoId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.delete("/photo/" + photoId);
        });
    }
    create(photo, message, tagEntities, albumName) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = new generic_form_data_1.GenericFormData();
            f.set("file", photo.blob, 'image/png', "image.png");
            if (message !== undefined) {
                f.append("name", message);
            }
            if (tagEntities !== undefined) {
                f.append("tag_entities", tagEntities.toJson());
            }
            if (albumName !== undefined) {
                f.append("album", albumName);
            }
            return this.conf.postMultipart(new feed_1.Feed(), "/photo", f);
        });
    }
    update(photoId, photo) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.put(new photo_1.Photo(), "/photo/" + photoId, photo);
        });
    }
}
exports.RestPhoto = RestPhoto;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const photo_album_1 = require("../models/photo_album");
class RestPhotoAlbum extends rest_1.Rest {
    list(page, size) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new photo_album_1.PhotoAlbum(), "/photo/album?" + rest_1.Rest.encodeQueryData({
                page: page,
                size: size
            }));
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = rest_1.Rest.params("/photo/album/{id}", { id: id });
            return this.conf.get(new photo_album_1.PhotoAlbum(), path);
        });
    }
    create(photoAlbum) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new photo_album_1.PhotoAlbum(), "/photo/album", photoAlbum);
        });
    }
    update(id, photoAlbum) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.put(new photo_album_1.PhotoAlbum(), "/photo/album/" + id, photoAlbum);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.delete("/photo/album/" + id);
        });
    }
}
exports.RestPhotoAlbum = RestPhotoAlbum;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const comment_1 = require("../models/comment");
const generic_form_data_1 = require("../models/generic_form_data");
class RestPhotoComment extends rest_1.Rest {
    list(photoId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new comment_1.Comment(), rest_1.Rest.params("photo/{id}/comment", { id: photoId }));
        });
    }
    create(photoId, comment) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new comment_1.Comment(), rest_1.Rest.params("/photo/{id}/comment", { id: photoId }), comment);
        });
    }
    createPhoto(photoId, photo, message, tagEntities, albumName) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = new generic_form_data_1.GenericFormData();
            f.set("file", photo.blob, 'image/png', "image.png");
            if (message !== undefined) {
                f.append("name", message);
            }
            if (tagEntities !== undefined) {
                f.append("tag_entities", tagEntities.toJson());
            }
            if (albumName !== undefined) {
                f.append("album", albumName);
            }
            return this.conf.postMultipart(new comment_1.Comment(), rest_1.Rest.params("/photo/{id}/comment/photo", { id: photoId }), f);
        });
    }
}
exports.RestPhotoComment = RestPhotoComment;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const like_1 = require("../models/like");
const empty_1 = require("../models/empty");
class RestPhotoLike extends rest_1.Rest {
    list(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new like_1.Like(), rest_1.Rest.params("/photo/{id}/like", { id: id }));
        });
    }
    create(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new like_1.Like(), rest_1.Rest.params("/photo/{id}/like", { id: id }), new empty_1.Empty());
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.delete(rest_1.Rest.params("/photo/{id}/like", { id: id }));
        });
    }
}
exports.RestPhotoLike = RestPhotoLike;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const account_1 = require("../models/account");
const rest_1 = require("./rest");
class RestRegister extends rest_1.Rest {
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new account_1.Account(), "/register", user);
        });
    }
}
exports.RestRegister = RestRegister;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rest {
    constructor(conf) {
        this.conf = conf;
    }
    static params(path, params) {
        for (let index in params) {
            let search = '{' + index + '}';
            path = path.replace(search, params[index]);
        }
        return path;
    }
    static encodeQueryData(data) {
        let ret = [];
        for (let d in data)
            ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
        return ret.join('&');
    }
}
exports.Rest = Rest;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const search_results_1 = require("../models/search_results");
class RestSearch extends rest_1.Rest {
    get(page, size, params) {
        return __awaiter(this, void 0, void 0, function* () {
            params = params !== undefined ? params : {};
            params['page'] = page;
            params['size'] = size !== undefined ? size : size;
            return this.conf.get(new search_results_1.SearchResults(), "/search?" + rest_1.Rest.encodeQueryData(params));
        });
    }
}
exports.RestSearch = RestSearch;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const feed_1 = require("../models/feed");
class RestShadowEntityFeed extends rest_1.Rest {
    list(id, page, size = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = rest_1.Rest.params("shadow/entity/{id}/wall?", { id: id }) + rest_1.Rest.encodeQueryData({ page: page, size: size });
            return this.conf.getList(new feed_1.Feed(), path);
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.get(new feed_1.Feed(), "shadow/entity/" + id);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.delete("shadow/entity/" + id);
        });
    }
}
exports.RestShadowEntityFeed = RestShadowEntityFeed;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const feed_1 = require("../models/feed");
class RestShadowEntityFeedMessage extends rest_1.Rest {
    list(id, page, size = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = rest_1.Rest.params("shadow/entity/{id}/wall/message?", { id: id }) + rest_1.Rest.encodeQueryData({
                page: page,
                size: size
            });
            return this.conf.getList(new feed_1.Feed(), path);
        });
    }
    create(id, message) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new feed_1.Feed(), rest_1.Rest.params("shadow/entity/{id}/wall/message", { id: id }), message);
        });
    }
    update(id, messageId, message) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = rest_1.Rest.params("shadow/entity/{id}/wall/message/{messageId}", { id: id, messageId: messageId });
            return this.conf.put(new feed_1.Feed(), path, message);
        });
    }
    delete(id, messageId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.delete(rest_1.Rest.params("shadow/entity/{id}/wall/message/{messageId}", {
                id: id,
                messageId: messageId
            }));
        });
    }
}
exports.RestShadowEntityFeedMessage = RestShadowEntityFeedMessage;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const feed_1 = require("../models/feed");
const generic_form_data_1 = require("../models/generic_form_data");
class RestShadowEntityPhoto extends rest_1.Rest {
    list(id, page, size = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = rest_1.Rest.params("shadow/entity/{id}/photo?", { id: id }) + rest_1.Rest.encodeQueryData({
                page: page,
                size: size
            });
            return this.conf.getList(new feed_1.Feed(), path);
        });
    }
    create(id, photo, message, accessControl, tagEntities) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = new generic_form_data_1.GenericFormData();
            f.set("file", photo.blob, 'image/png', "image.png");
            if (message !== undefined) {
                f.append("message", message);
            }
            if (accessControl !== undefined) {
                f.append("access_control", accessControl);
            }
            if (tagEntities !== undefined) {
                f.append("tag_entities", tagEntities.toJson());
            }
            return this.conf.postMultipart(new feed_1.Feed(), rest_1.Rest.params("/shadow/entity/{id}/photo", { id: id }), f);
        });
    }
}
exports.RestShadowEntityPhoto = RestShadowEntityPhoto;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const photo_1 = require("../models/photo");
const generic_form_data_1 = require("../models/generic_form_data");
class RestShadowEntityProfileCoverPhoto extends rest_1.Rest {
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = rest_1.Rest.params("shadow/entity/{id}/profile/cover/photo", { id: id });
            return this.conf.get(new photo_1.Photo(), path);
        });
    }
    set(id, photo) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = new generic_form_data_1.GenericFormData();
            f.set("file", photo.blob, 'image/png', "image.png");
            return this.conf.postMultipart(new photo_1.Photo(), rest_1.Rest.params("/shadow/entity/{id}/profile/cover/photo", { id: id }), f);
        });
    }
}
exports.RestShadowEntityProfileCoverPhoto = RestShadowEntityProfileCoverPhoto;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const photo_1 = require("../models/photo");
const generic_form_data_1 = require("../models/generic_form_data");
class RestShadowEntityProfilePhoto extends rest_1.Rest {
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = rest_1.Rest.params("shadow/entity/{id}/profile/photo", { id: id });
            return this.conf.get(new photo_1.Photo(), path);
        });
    }
    set(id, photo) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = new generic_form_data_1.GenericFormData();
            f.set("file", photo.blob, 'image/png', "image.png");
            return this.conf.postMultipart(new photo_1.Photo(), rest_1.Rest.params("/shadow/entity/{id}/profile/photo", { id: id }), f);
        });
    }
}
exports.RestShadowEntityProfilePhoto = RestShadowEntityProfilePhoto;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const status_1 = require("../models/status");
class RestStatus extends rest_1.Rest {
    list(page) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new status_1.Status(), "/status?page=" + page);
        });
    }
    get(statusId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.get(new status_1.Status(), "/status/" + statusId);
        });
    }
    create(status) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new status_1.Status(), "/status", status);
        });
    }
    update(statusId, status) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.put(new status_1.Status(), "/status/" + statusId, status);
        });
    }
    delete(statusId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.delete("/status/" + statusId);
        });
    }
}
exports.RestStatus = RestStatus;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const comment_1 = require("../models/comment");
const photo_1 = require("../models/photo");
const generic_form_data_1 = require("../models/generic_form_data");
class RestStatusComment extends rest_1.Rest {
    list(statusId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new comment_1.Comment(), rest_1.Rest.params("/status/{id}/comment", { id: statusId }));
        });
    }
    create(statusId, comment) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new comment_1.Comment(), rest_1.Rest.params("/status/{id}/comment", { id: statusId }), comment);
        });
    }
    update(statusId, commentId, comment) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = rest_1.Rest.params("/status/{id}/comment/{commentId}", { id: statusId, commentId: commentId });
            return this.conf.put(new comment_1.Comment(), path, comment);
        });
    }
    createPhoto(statusId, photo, message, tagEntities) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = new generic_form_data_1.GenericFormData();
            f.set("file", photo.blob, 'image/png', "image.png");
            if (message !== undefined) {
                f.append("name", message);
            }
            if (tagEntities !== undefined) {
                f.append("tag_entities", tagEntities.toJson());
            }
            let path = rest_1.Rest.params("/status/{id}/comment/photo", { id: statusId });
            return this.conf.postMultipart(new photo_1.Photo(), path, f);
        });
    }
}
exports.RestStatusComment = RestStatusComment;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const like_1 = require("../models/like");
const empty_1 = require("../models/empty");
class RestStatusLike extends rest_1.Rest {
    list(statusId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new like_1.Like(), rest_1.Rest.params("status/{id}/like", { id: statusId }));
        });
    }
    create(statusId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new like_1.Like(), rest_1.Rest.params("status/{id}/like", { id: statusId }), new empty_1.Empty());
        });
    }
    delete(statusId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.delete(rest_1.Rest.params("status/{id}/like", { id: statusId }));
        });
    }
}
exports.RestStatusLike = RestStatusLike;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const user_1 = require("../models/user");
class RestUser extends rest_1.Rest {
    list(page, limited, size, location, params) {
        return __awaiter(this, void 0, void 0, function* () {
            params = params !== undefined ? params : {};
            params['page'] = page;
            params['limited'] = limited === true;
            params['size'] = size;
            if (location !== undefined) {
                params['latitude'] = location.latitude;
                params['longitude'] = location.longitude;
            }
            return this.conf.getList(new user_1.User(), "/user?" + rest_1.Rest.encodeQueryData(params));
        });
    }
    listByZone(page, limited, size, lowerLatitude, lowerLongitude, upperLatitude, upperLongitude) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = {
                lower_latitude: lowerLatitude,
                lower_longitude: lowerLongitude,
                upper_latitude: upperLatitude,
                upper_longitude: upperLongitude
            };
            return this.list(page, limited, size, undefined, params);
        });
    }
    get(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.get(new user_1.User(), "/user/" + userId);
        });
    }
    getActiveUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new user_1.User(), "/user/active");
        });
    }
}
exports.RestUser = RestUser;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const user_1 = require("../models/user");
class RestUserEvent extends rest_1.Rest {
    list(eventId, page, size, params) {
        return __awaiter(this, void 0, void 0, function* () {
            params = params !== undefined ? params : {};
            params['page'] = page;
            params['size'] = size;
            let path = rest_1.Rest.params("/user/{id}/event?", { id: eventId }) + rest_1.Rest.encodeQueryData(params);
            return this.conf.getList(new user_1.User(), path);
        });
    }
}
exports.RestUserEvent = RestUserEvent;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
class RestUserExternal extends user_1.User {
    get(externalId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.get(new user_1.User(), "/user/external/" + externalId);
        });
    }
}
exports.RestUserExternal = RestUserExternal;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const user_1 = require("../models/user");
const empty_1 = require("../models/empty");
class RestUserFriend extends rest_1.Rest {
    list(userId, page, size, params) {
        return __awaiter(this, void 0, void 0, function* () {
            params = params !== undefined ? params : {};
            params['page'] = page;
            params['size'] = size;
            let path = rest_1.Rest.params("/user/{userId}/friend?", { userId: userId }) + rest_1.Rest.encodeQueryData(params);
            return this.conf.getList(new user_1.User(), path);
        });
    }
    create(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new user_1.User(), rest_1.Rest.params("/user/{userId}/friend?", { userId: userId }), new empty_1.Empty());
        });
    }
    delete(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.delete(rest_1.Rest.params("/user/{userId}/friend?", { userId: userId }));
        });
    }
}
exports.RestUserFriend = RestUserFriend;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const group_1 = require("../models/group");
class RestUserGroup extends rest_1.Rest {
    list(userId, page, size, params) {
        return __awaiter(this, void 0, void 0, function* () {
            params = params !== undefined ? params : {};
            params['page'] = page;
            params['size'] = size;
            let path = rest_1.Rest.params("/user/{userId}/group", { userId: userId }) + rest_1.Rest.encodeQueryData(params);
            return this.conf.getList(new group_1.Group(), path);
        });
    }
}
exports.RestUserGroup = RestUserGroup;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const feed_1 = require("../models/feed");
class RestUserWall extends rest_1.Rest {
    list(userId, page, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = { page: page, size: size !== undefined ? size : 20 };
            let path = rest_1.Rest.params("/user/{id}/wall?", { id: userId }) + rest_1.Rest.encodeQueryData(params);
            return this.conf.getList(new feed_1.Feed(), path);
        });
    }
}
exports.RestUserWall = RestUserWall;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const feed_1 = require("../models/feed");
class RestUserWallMessage extends rest_1.Rest {
    list(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new feed_1.Feed(), rest_1.Rest.params("/user/{userId}/wall/message", { userId: userId }));
        });
    }
    create(userId, message) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new feed_1.Feed(), rest_1.Rest.params("/user/{userId}/wall/message", { userId: userId }), message);
        });
    }
    update(userId, messageId, message) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.put(new feed_1.Feed(), rest_1.Rest.params("/user/{userId}/wall/message/{messageId}", {
                userId: userId,
                messageId: messageId
            }), message);
        });
    }
    delete(userId, messageId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.delete(rest_1.Rest.params("/user/{userId}/wall/message/{messageId}", {
                userId: userId,
                messageId: messageId
            }));
        });
    }
}
exports.RestUserWallMessage = RestUserWallMessage;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WebsocketConversation {
}
exports.WebsocketConversation = WebsocketConversation;
