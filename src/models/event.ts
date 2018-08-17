import {BaseWall} from "./base_wall";
import {EventMember} from "./event_member";
import {EventMemberAccessControl} from "./event_member_access_control";
import {Photo} from "./photo";
import {Location} from "./location";
import {dateFormat} from "../constant";
import {RestEvent} from "../rest/event";
import {TextWallMessage} from "./text_wall_message";
import {Feed} from "./feed";
import {RestEventWall} from "../rest/event_wall";
import {CustomField} from "./custom_field";
import {Model} from "./model";
import moment = require("moment");

export class Event extends BaseWall {
    private _custom_fields: CustomField[];
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
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            max_seats: this.max_seats,
            start_date: this.start_date,
            end_date: this.end_date,
            event_member_access_control: this.event_member_access_control,
            location: this.location ? this.location.getJsonParameters() : null,
            custom_fields: this._custom_fields ? Model.listToParameters(this._custom_fields) : null,
        };
    }

    async join(): Promise<EventMember> {
        return (new RestEvent(this.conf)).join(this.id);
    }

    async leave(): Promise<void> {
        return (new RestEvent(this.conf)).leave(this.id);
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

    get profile_cover_photo(): Photo {
        return this._profile_cover_photo;
    }

    set profile_cover_photo(p: Photo) {
        this._profile_cover_photo = new Photo(p, this.conf);
    }

    get location(): Location {
        return this._location;
    }

    set location(l: Location) {
        this._location = new Location(l, this.conf);
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
        this.start_date = d.format(dateFormat);
        return this;
    }

    setEndDate(d: moment.Moment): Event {
        this.end_date = d.format(dateFormat);
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