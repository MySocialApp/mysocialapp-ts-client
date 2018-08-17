import { Rest } from "./rest";
import { NotificationAck } from "../models/notification_ack";
import { PreviewNotification } from "../models/preview_notification";
export declare class RestNotification extends Rest {
    ack(notificationAck: NotificationAck): Promise<NotificationAck>;
    listRead(page: number, size: number): Promise<PreviewNotification[]>;
    listUnread(page: number, size: number): Promise<PreviewNotification[]>;
    listUnreadAndConsume(page: number, size: number): Promise<PreviewNotification[]>;
    getUnreadAndConsume(notificationId: string): Promise<PreviewNotification>;
}
