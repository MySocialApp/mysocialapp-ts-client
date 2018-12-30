import {Rest} from "./rest";
import {Status} from "../models/status";

export class RestStatus extends Rest {
    async list(page: number): Promise<Status[]> {
        return this.conf.getList(new Status(), "/status?page=" + page) as Promise<Status[]>;
    }

    async get(statusId: string): Promise<Status> {
        return this.conf.get(new Status(), "/status/" + statusId) as Promise<Status>;
    }

    async create(status: Status): Promise<Status> {
        return this.conf.post(new Status(), "/status", status) as Promise<Status>;
    }

    async update(statusId: string, status: Status): Promise<Status> {
        return this.conf.put(new Status(), "/status/" + statusId, status) as Promise<Status>;
    }

    async delete(statusId: string): Promise<void> {
        return this.conf.deleteVoid("/status/" + statusId);
    }
}
