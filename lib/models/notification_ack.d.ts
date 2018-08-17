import { AppPlatform } from "./app_platform";
import { BaseLocation } from "./base_location";
import { Model } from "./model";
export declare class NotificationAck extends Model {
    private _location?;
    app_platform?: AppPlatform;
    device_id?: string;
    app_version?: string;
    advertising_id?: string;
    notification_key?: string;
    notification_action?: string;
    location: BaseLocation;
}
