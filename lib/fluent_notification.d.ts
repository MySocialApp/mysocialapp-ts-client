import { FluentAbstract } from "./fluent_abstract";
import { PreviewNotification } from "./models/preview_notification";
import { User } from "./models/user";
export declare class FluentNotification extends FluentAbstract {
    list(page: number, size?: number): Promise<PreviewNotification[]>;
    listRead(page: number, size?: number): Promise<PreviewNotification[]>;
    listAndConsume(page: number, size?: number): Promise<PreviewNotification[]>;
    getTotalUnread(): Promise<number>;
    listUsers(page: number, size?: number): Promise<User[]>;
}
