import {Notification} from "./notification";
import {Model} from "./model";
import {RestNotification} from "../rest/notification";


export class PreviewNotification extends Model {
    private _last_notification: Notification;

    config_id: string;
    type: string;
    id_str: string;
    total: number;

    get id(): any {
        return this.id_str;
    }

    set id(c: any) {
        // nothing
    }

    async consume(): Promise<PreviewNotification> {
        return (new RestNotification(this.conf)).getUnreadAndConsume(this.id);
    }

    get last_notification(): Notification {
        return this._last_notification;
    }

    set last_notification(l: Notification) {
        this._last_notification = new Notification(l);
    }
}