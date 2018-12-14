import {FluentAbstract} from "./fluent_abstract";
import {User} from "./models/user";

export class FluentFollow extends FluentAbstract {

    async listFollowers(page: number, size: number = 10): Promise<User[]> {
        const acc = await this.session.clientService.account.get();
        return this.session.clientService.userFollower.list(acc.id, page, size);
    }

    async listFollowings(page: number, size: number = 10): Promise<User[]> {
        const acc = await this.session.clientService.account.get();
        return this.session.clientService.userFollowing.list(acc.id, page, size);
    }

}