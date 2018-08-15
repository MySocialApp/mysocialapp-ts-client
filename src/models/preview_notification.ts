import {Notification} from "./notification";
import {Model} from "./model";
import {RestNotification} from "../rest/notification";


export class PreviewNotification extends Model {
    config_id: string;
    type: string;
    id_str: string;
    total: number;
    last_notification: Notification;

    get id() {
        return this.id_str;
    }

    async consume(): PreviewNotification {
        return (new RestNotification(this.conf)).getUnreadAndConsume(this.id);
    }
}