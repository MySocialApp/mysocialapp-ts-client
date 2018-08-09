import {Rest} from "./rest";
import {Group} from "../models/group";

export class RestUserGroup extends Rest {
    list(userId: string, page: number, size: number, params?: {}): Promise<Group[]> {
        params = params !== undefined ? params : {};
        params['page'] = page;
        params['size'] = size;
        let path = Rest.params("/user/{userId}/group", {userId: userId}) + Rest.encodeQueryData(params);
        return this.conf.getList(new Group(), path) as Promise<Group[]>;
    }
}