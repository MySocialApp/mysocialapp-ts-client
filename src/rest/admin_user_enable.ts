import {Rest} from "./rest";
import {User} from "../models/user";
import {Empty} from "../models/empty";

export class RestAdminUserEnable extends Rest {
    async enable(userId: string): Promise<User> {
        return this.conf.post(new User(), `/admin/user/${userId}/enable`, new Empty()) as Promise<User>;
    }

    async disable(userId: string): Promise<User> {
        return this.conf.delete(new User(), `/admin/user/${userId}/enable`) as Promise<User>;
    }
}
