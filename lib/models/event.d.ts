import { BaseWall } from "./base_wall";
import { EventMember } from "./event_member";
import { EventMemberAccessControl } from "./event_member_access_control";
import { Photo } from "./photo";
import { Location } from "./location";
import { TextWallMessage } from "./text_wall_message";
import { Feed } from "./feed";
import { CustomField } from "./custom_field";
import { FileData } from "./file";
import moment = require("moment");
import { FeedPost } from "./feed_post";
export declare class Event extends BaseWall {
    private _custom_fields;
    private _profile_photo?;
    private _profile_cover_photo?;
    private _members?;
    private _location?;
    name?: string;
    description?: string;
    cancelled?: boolean;
    max_seats?: number;
    free_seats?: number;
    taken_seats?: number;
    total_members?: number;
    start_date?: string;
    end_date?: string;
    event_member_access_control?: EventMemberAccessControl;
    member: boolean;
    static_maps_url?: string;
    distance_in_meters?: number;
    available: boolean;
    remaining_seconds_before_start?: number;
    getJsonParameters(): {};
    listNewsFeed(page: number, size: number): Promise<Feed[]>;
    createFeedPost(feedPost: FeedPost): Promise<Feed>;
    join(): Promise<EventMember>;
    leave(): Promise<void>;
    confirmParticipation(): Promise<void>;
    /**
     * must be creator of the event
     */
    cancel(): Promise<void>;
    /**
     * only for owner or moderator
     */
    delete(): Promise<void>;
    changeOwner(newOwnerId: string): Promise<Event>;
    update(): Promise<Event>;
    addMessage(message: TextWallMessage): Promise<Feed>;
    profile_photo: Photo;
    readonly image: Photo;
    updateImage(file: FileData): Promise<Photo>;
    profile_cover_photo: Photo;
    readonly cover_image: Photo;
    updateCoverImage(file: FileData): Promise<Photo>;
    location: Location;
    members: EventMember[];
    setStartDate(d: moment.Moment): Event;
    setEndDate(d: moment.Moment): Event;
    setMaxSeats(m: number): Event;
    setDescription(d: string): Event;
    setName(n: string): Event;
    setLocation(l: Location): Event;
    setAccessControl(ac: EventMemberAccessControl): Event;
    custom_fields: CustomField[];
}
