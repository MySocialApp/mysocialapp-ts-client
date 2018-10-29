import {FluentAbstract} from "./fluent_abstract";
import {User} from "./models/user";

export class FluentFriend extends FluentAbstract {

    async list(page: number, size: number = 10): Promise<User[]> {
        return this.session.clientService.friend.list(page, size);
    }

    async listIncomingFriendRequests(): Promise<User[]> {
        let req = await this.session.clientService.friend.listRequests();
        return req.incoming ? req.incoming : [];
    }

    async listOutgoingFriendRequests(): Promise<User[]> {
        let req = await this.session.clientService.friend.listRequests();
        return req.outgoing ? req.outgoing : [];
    }
}