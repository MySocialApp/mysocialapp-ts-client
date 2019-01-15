import {FluentAbstract} from "./fluent_abstract";
import {PreviewNotification} from "./models/preview_notification";
import {User} from "./models/user";

export class FluentNotification extends FluentAbstract {
    async list(page: number, size: number = 10): Promise<PreviewNotification[]> {
        return this.session.clientService.notification.listUnread(page, size);
    }
    async listRead(page: number, size: number = 10): Promise<PreviewNotification[]> {
        return this.session.clientService.notification.listRead(page, size);
    }

    async listAndConsume(page: number, size: number = 10): Promise<PreviewNotification[]> {
        return this.session.clientService.notification.listUnreadAndConsume(page, size);
    }

    async getTotalUnread(): Promise<number> {
        let events = await this.session.account.getEvents();
        return events.notification.total_unreads ? events.notification.total_unreads : 0;
    }

    async listUsers(page: number, size: number = 10): Promise<User[]> {
        return this.session.clientService.userNotify.list(page, size);
    }
}