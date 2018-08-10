import {FluentAbstract} from "./fluent_abstract";
import {PreviewNotification} from "./models/preview_notification";

export class FluentNotification extends FluentAbstract {
    list(page: number, size: number = 10): Promise<PreviewNotification[]> {
        return this.session.clientService.notification.listUnread(page, size);
    }

    listAndConsume(page: number, size: number = 10): Promise<PreviewNotification[]> {
        return this.session.clientService.notification.listUnreadAndConsume(page, size);
    }
}