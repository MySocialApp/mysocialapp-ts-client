import {FluentAbstract} from "./fluent_abstract";
import {User} from "./models/user";

export class FluentFriend extends FluentAbstract {

    async list(page: number, size: number = 10): User[] {
        return this.session.clientService.friend.list(page, size);
    }

    async listIncomingFriendRequests(): User[] {
        let req = await this.session.clientService.friend.listRequests();
        return req.incoming;
    }

    async listOutgoingFriendRequests(): User[] {
        let req = await this.session.clientService.friend.listRequests();
        return req.outgoing;
    }
}