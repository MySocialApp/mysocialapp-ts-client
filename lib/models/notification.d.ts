import { User } from "./user";
import { Model } from "./model";
import { NotificationAck } from "./notification_ack";
export declare class Notification extends Model {
    private _owner?;
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
    id: any;
    readonly owner: User;
    readonly recipient_user_id: string;
    readonly recipient_device_id: string;
    ack(n: NotificationAck): Promise<NotificationAck>;
}
