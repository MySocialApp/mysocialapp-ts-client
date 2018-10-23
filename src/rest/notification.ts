import {Rest} from "./rest";
import {NotificationAck} from "../models/notification_ack";
import {PreviewNotification} from "../models/preview_notification";

export class RestNotification extends Rest {
    async ack(notificationAck: NotificationAck): Promise<NotificationAck> {
        return this.conf.post(new NotificationAck(), "/notification/ack", notificationAck) as Promise<NotificationAck>;
    }

    async listRead(page: number, size: number): Promise<PreviewNotification[]> {
        let path = "/notification/read?" + Rest.encodeQueryData({page:page, size:size});
        return this.conf.getList(new PreviewNotification(), path) as Promise<PreviewNotification[]>;
    }

    async listUnread(page: number, size: number): Promise<PreviewNotification[]> {
        let path = "/notification/unread?" + Rest.encodeQueryData({page:page, size:size});
        return this.conf.getList(new PreviewNotification(), path) as Promise<PreviewNotification[]>;
    }

    async listUnreadAndConsume(page: number, size: number): Promise<PreviewNotification[]> {
        let path = "/notification/unread/consume?" + Rest.encodeQueryData({page:page, size:size});
        return this.conf.getList(new PreviewNotification(), path) as Promise<PreviewNotification[]>;
    }

    async getUnreadAndConsume(notificationId: string): Promise<PreviewNotification> {
        return this.conf.get(new PreviewNotification(), Rest.params("notification/{id}/unread/consume", {id: notificationId})) as Promise<PreviewNotification>;
    }
}