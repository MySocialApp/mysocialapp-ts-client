import { Model } from "./model";
export declare class AccountEvents extends Model {
    conversation: {
        total_unreads: number;
    };
    friend_request: {
        total_incoming_requests: number;
    };
    notification: {
        total_unreads: number;
    };
}
