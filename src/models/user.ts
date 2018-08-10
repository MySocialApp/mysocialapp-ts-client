import {Photo} from "./photo";
import {Base} from "./base";
import {CustomField} from "./custom_field";
import {UserStat} from "./user_stat";
import {Status} from "./status";
import {Flag} from "./flag";
import {Location} from "./location";
import {Model} from "./model";

export class User extends Base {
    private _profile_photo?: Photo;
    private _custom_fields?: CustomField[] = [];
    private _living_location: Location;
    private _current_status: Status;
    private _flag: Flag;
    private _user_stat: UserStat;
    updated_date?: string;
    first_name?: string;
    last_name?: string;
    password?: string;
    email?: string;
    gender?: Gender;
    date_of_birth?: string;
    presentation?: string;
    authorities?: string[];
    is_friend?: boolean;
    is_requested_as_friend?: boolean;

    getJsonParameters(): {} {
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

    set profile_photo(p: Photo) {
        this._profile_photo = new Photo(p, this.conf);
    }

    get profile_photo(): Photo {
        return this._profile_photo;
    }

    set flag(p: Flag) {
        this._flag = new Flag(p, this.conf);
    }

    get flag(): Flag {
        return this._flag;
    }

    set living_location(p: Location) {
        this._living_location = new Location(p, this.conf);
    }

    get living_location(): Location {
        return this._living_location;
    }

    set current_status(p: Status) {
        this._current_status = new Status(p, this.conf);
    }

    get current_status(): Status {
        return this._current_status;
    }

    set custom_fields(list: CustomField[]) {
        this._custom_fields = [] as CustomField[];
        for (let c of list) {
            this._custom_fields.push(new CustomField(c, this.conf));
        }
    }

    get custom_fields(): CustomField[] {
        return this._custom_fields;
    }
}

export enum Gender {
    Male = "MALE",
    Female = "FEMALE",
}