import {Rest} from "./rest";
import {Status} from "../models/status";

export class RestStatus extends Rest {
    async list(page: number): Status[] {
        return this.conf.getList(new Status(), "/status?page=" + page) as Promise<Status[]>;
    }

    async get(statusId: string): Status {
        return this.conf.get(new Status(), "/status/" + statusId) as Promise<Status>;
    }

    async create(status: Status): Status {
        return this.conf.post(new Status(), "/status", status) as Promise<Status>;
    }

    async update(statusId: string, status: Status): Status {
        return this.conf.put(new Status(), "/status/" + statusId, status) as Promise<Status>;
    }

    async delete(statusId: string): void {
        return this.conf.delete("/status/" + statusId);
    }
}