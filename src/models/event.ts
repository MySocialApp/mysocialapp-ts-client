import {BaseWall} from "./base_wall";
import {EventMember} from "./event_member";
import {EventMemberAccessControl} from "./event_member_access_control";
import {Photo} from "./photo";
import {TagEntities} from "./tag_entities";
import {Location} from "./location";
import {dateFormat} from "../constant";
import {RestEvent} from "../rest/event";
import moment = require("moment");
import {TextWallMessage} from "./text_wall_message";
import {Feed} from "./feed";
import {RestEventWall} from "../rest/event_wall";

export class Event extends BaseWall {
    private _tag_entities?: TagEntities;
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
            name: this.name,
            description: this.description,
            max_seats: this.max_seats,
            start_date: this.start_date,
            end_date: this.end_date,
            event_member_access_control: this.event_member_access_control,
            location: this._location.getJsonParameters()
        };
    }

    async join(): void {
        return (new RestEvent(this.conf)).join(this.id);
    }

    async leave(): void {
        return (new RestEvent(this.conf)).leave(this.id);
    }

    async update(e: Event): Event {
        return (new RestEvent(this.conf)).update(e);
    }

    async addMessage(message: TextWallMessage): Feed {
        return (new RestEventWall(this.conf)).createMessage(this.id, message);
    }

    get tag_entities(): TagEntities {
        return this._tag_entities;
    }

    set tag_entities(t: TagEntities) {
        this._tag_entities = new TagEntities(t);
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
        let list = [] as EventMember[];
        for (let m of members) {
            list.push(new EventMember(m, this.conf))
        }
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
}