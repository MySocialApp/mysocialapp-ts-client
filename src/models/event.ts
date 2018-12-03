import {BaseWall} from "./base_wall";
import {EventMember} from "./event_member";
import {EventMemberAccessControl} from "./event_member_access_control";
import {Photo} from "./photo";
import {Location} from "./location";
import {apiDateFormat} from "../constant";
import {RestEvent} from "../rest/event";
import {TextWallMessage} from "./text_wall_message";
import {Feed} from "./feed";
import {RestEventWall} from "../rest/event_wall";
import {CustomField} from "./custom_field";
import {listToParameters} from "./utils";
import {FileData} from "./file";
import moment = require("moment");
import {FeedPost} from "./feed_post";

export class Event extends BaseWall {
    private _custom_fields: CustomField[];
    private _profile_photo?: Photo;
    private _profile_cover_photo?: Photo;
    private _members?: EventMember[];
    private _location?: Location;
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


    getJsonParameters(): {} {
        let o = {
            id: this.id,
            name: this.name,
            description: this.description,
            max_seats: this.max_seats,
            start_date: this.start_date,
            end_date: this.end_date,
            event_member_access_control: this.event_member_access_control,
        };
        if (this.custom_fields) {
            o['custom_fields'] = listToParameters(this.custom_fields);
        }
        if (this.location) {
            o['location'] = this.location.getJsonParameters();
        }
        if (this.payload) {
            o['payload'] = this.payload;
        }
        return o;
    }

    async listNewsFeed(page: number, size: number): Promise<Feed[]> {
        return new RestEventWall(this.conf).list(this.id, page, size);
    }

    async createFeedPost(feedPost: FeedPost): Promise<Feed> {
        return new RestEventWall(this.conf).createMessage(this.id, feedPost.textWallMessage);
    }

    async join(): Promise<EventMember> {
        return (new RestEvent(this.conf)).join(this.id);
    }

    async leave(): Promise<void> {
        return (new RestEvent(this.conf)).leave(this.id);
    }

    async confirmParticipation(): Promise<void> {
        this.join();
    }

    /**
     * must be creator of the event
     */
    async cancel(): Promise<void> {
        return (new RestEvent(this.conf)).cancel(this.id);
    }

    async update(): Promise<Event> {
        return (new RestEvent(this.conf)).update(this);
    }

    async addMessage(message: TextWallMessage): Promise<Feed> {
        return (new RestEventWall(this.conf)).createMessage(this.id, message);
    }

    get profile_photo(): Photo {
        return this._profile_photo;
    }

    set profile_photo(p: Photo) {
        this._profile_photo = new Photo(p, this.conf);
    }

    get image(): Photo {
        return this.profile_photo;
    }

    updateImage(file: FileData): Promise<Photo> {
        return new RestEvent(this.conf).updateProfilePhoto(this.id, file);
    }

    get profile_cover_photo(): Photo {
        return this._profile_cover_photo;
    }

    set profile_cover_photo(p: Photo) {
        this._profile_cover_photo = new Photo(p, this.conf);
    }

    get cover_image(): Photo {
        return this.profile_cover_photo;
    }

    updateCoverImage(file: FileData): Promise<Photo> {
        return new RestEvent(this.conf).updateProfileCoverPhoto(this.id, file);
    }

    get location(): Location {
        return this._location;
    }

    set location(l: Location) {
        this._location = new Location(l);
    }

    get members(): EventMember[] {
        return this._members;
    }

    set members(members: EventMember[]) {
        if (!members) {
            return;
        }
        let list = [] as EventMember[];
        for (let m of members) {
            list.push(new EventMember(m, this.conf))
        }
        this._members = list;
    }

    setStartDate(d: moment.Moment): Event {
        this.start_date = d.format(apiDateFormat);
        return this;
    }

    setEndDate(d: moment.Moment): Event {
        this.end_date = d.format(apiDateFormat);
        return this;
    }

    setMaxSeats(m: number): Event {
        this.max_seats = m;
        return this;
    }

    setDescription(d: string): Event {
        this.description = d;
        return this;
    }

    setName(n: string): Event {
        this.name = n;
        return this;
    }

    setLocation(l: Location): Event {
        this.location = l;
        return this;
    }

    setAccessControl(ac: EventMemberAccessControl): Event {
        this.event_member_access_control = ac;
        return this;
    }

    get custom_fields(): CustomField[] {
        return this._custom_fields;
    }

    set custom_fields(c: CustomField[]) {
        if (!c) {
            return;
        }
        let list = [] as CustomField[];
        for (let m of c) {
            list.push(new CustomField(m, this.conf))
        }
        this._custom_fields = list;
    }
}