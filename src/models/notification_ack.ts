import {AppPlatform} from "./app_platform";
import {BaseLocation} from "./base_location";
import {Model} from "./model";

export class NotificationAck extends Model{
    device_id?: string;
    app_platform?: AppPlatform;
    app_version?: string;
    advertising_id?: string = null;
    notification_key?: string;
    notification_action?: string;
    location?: BaseLocation;

}