import {BaseWall} from "./base_wall";
import {EventMember} from "./event_member";
import {EventMemberAccessControl} from "./event_member_access_control";
import {Photo} from "./photo";
import {TagEntities} from "./tag_entities";
import {Location} from "./location";

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
        for(let m of members) {
            list.push(new EventMember(m, this.conf))
        }
    }
}