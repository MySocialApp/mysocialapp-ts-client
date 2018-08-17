import { Notification } from "./notification";
import { Model } from "./model";
export declare class PreviewNotification extends Model {
    private _last_notification;
    config_id: string;
    type: string;
    id_str: string;
    total: number;
    readonly id: string;
    consume(): Promise<PreviewNotification>;
    last_notification: Notification;
}
