import { FluentAbstract } from "./fluent_abstract";
import { PreviewNotification } from "./models/preview_notification";
export declare class FluentNotification extends FluentAbstract {
    list(page: number, size?: number): Promise<PreviewNotification[]>;
    listAndConsume(page: number, size?: number): Promise<PreviewNotification[]>;
}
