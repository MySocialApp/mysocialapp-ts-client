import {Rest} from "./rest";
import {User} from "../models/user";

export class RestUserEvent extends Rest {
    list(eventId: string, page: number, size: number, params?: {}): Promise<User[]> {
        params = params !== undefined ? params : {};
        params['page'] = page;
        params['size'] = size;
        let path = Rest.params("/user/{id}/event?", {id: eventId}) + Rest.encodeQueryData(params);
        return this.conf.getList(new User(), path) as Promise<User[]>;
    }
}