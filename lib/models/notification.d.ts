import { User } from "./user";
import { Model } from "./model";
export declare class Notification extends Model {
    config_id?: string;
    type?: string;
    created_date?: string;
    title?: string;
    description?: string;
    url?: string;
    image_url?: string;
    notification_key: string;
    request_ack?: boolean;
    show_notification: boolean;
    force_notification_sound: boolean;
    payload?: {};
    readonly root_url: string;
    readonly id: string;
    readonly owner: User;
    readonly recipient_user_id: string;
    readonly recipient_device_id: string;
}
