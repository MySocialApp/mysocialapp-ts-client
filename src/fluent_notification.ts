import {FluentAbstract} from "./fluent_abstract";
import {PreviewNotification} from "./models/preview_notification";

export class FluentNotification extends FluentAbstract {
    async list(page: number, size: number = 10): PreviewNotification[] {
        return this.session.clientService.notification.listUnread(page, size);
    }

    async listAndConsume(page: number, size: number = 10): PreviewNotification[] {
        return this.session.clientService.notification.listUnreadAndConsume(page, size);
    }
}