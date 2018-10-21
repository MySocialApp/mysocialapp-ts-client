import {User} from "./user";
import {Model} from "./model";

export class Notification extends Model{
    private _owner?: User;
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

    get root_url(): string {
        if (this.url === undefined) {
            return undefined;
        }
        let url = new URL(this.url);
        return url.protocol + '//' + url.host;
    }

    get id(): any {
        if (this.url === undefined) {
            return undefined;
        }
        return (new URL(this.url)).pathname.split("/")[2];
    }

    set id(v: any) {
        // nothing
    }

    get owner(): User {
        if (this._owner === undefined) {
            this._owner = this.payload['owner'] !== undefined ? new User(this.payload['owner'], this.conf) : null;
        }
        return this._owner;
    }

    get recipient_user_id(): string {
        return this.payload['owner'];
    }

    get recipient_device_id(): string {
        return this.payload['recipient_device_id'];
    }
}