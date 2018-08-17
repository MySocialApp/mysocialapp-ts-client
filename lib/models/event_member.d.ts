import { Model } from "./model";
import { EventStatus } from "./event_status";
import { User } from "./user";
export declare class EventMember extends Model {
    created_date?: string;
    updated_date?: string;
    event?: Event;
    user?: User;
    status?: EventStatus;
}
