import {AppPlatform} from "./app_platform";
import {BaseLocation} from "./base_location";
import {Model} from "./model";

export class NotificationAck extends Model {
    private _location?: BaseLocation;

    app_platform?: AppPlatform;
    device_id?: string;
    app_version?: string;
    advertising_id?: string = null;
    notification_key?: string;
    notification_action?: string;

    get location(): BaseLocation {
        return this._location;
    }

    set location(a: BaseLocation) {
        this._location = new BaseLocation(a);
    }

    setAppPlatform(v: AppPlatform): NotificationAck {
        this.app_platform = v;
        return this;
    }
}