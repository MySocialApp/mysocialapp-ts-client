import { Rest } from "./rest";
import { Status } from "../models/status";
export declare class RestStatus extends Rest {
    list(page: number): Promise<Status[]>;
    get(statusId: string): Promise<Status>;
    create(status: Status): Promise<Status>;
    update(statusId: string, status: Status): Promise<Status>;
    delete(statusId: string): Promise<void>;
}
