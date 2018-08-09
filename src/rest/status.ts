import {Rest} from "./rest";
import {Status} from "../models/status";

export class RestStatus extends Rest {
    list(page: number): Promise<Status[]> {
        return this.conf.getList(new Status(), "/status?page=" + page) as Promise<Status[]>;
    }

    get(statusId: string): Promise<Status> {
        return this.conf.get(new Status(), "/status/" + statusId) as Promise<Status>;
    }

    create(status: Status): Promise<Status> {
        return this.conf.post(new Status(), "/status", status) as Promise<Status>;
    }

    update(statusId: string, status: Status): Promise<Status> {
        return this.conf.put(new Status(), "/status/" + statusId, status) as Promise<Status>;
    }

    delete(statusId: string): Promise<void> {
        return this.conf.delete("/status/" + statusId);
    }
}