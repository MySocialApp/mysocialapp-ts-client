import {Rest} from "./rest";
import {SimpleLocation} from "../models/simple_location";
import {User} from "../models/user";
import {Users} from "../models/users";

export class RestUser extends Rest {
    async list(page: number, limited?: boolean, size?: number, location?: SimpleLocation, params?: {}): Promise<Users> {
        params = params !== undefined ? params : {};
        params['page'] = page;
        params['limited'] = limited === true;
        params['size'] = size;
        if (location !== undefined) {
            params['latitude'] = location.latitude;
            params['longitude'] = location.longitude;
        }
        return this.conf.get(new Users(), "/user?" + Rest.encodeQueryData(params)) as Promise<Users>;
    }

    async listByZone(page: number, limited: boolean, size: number, lowerLatitude: number, lowerLongitude: number,
                     upperLatitude: number, upperLongitude: number): Promise<Users> {
        let params = {
            lower_latitude: lowerLatitude,
            lower_longitude: lowerLongitude,
            upper_latitude: upperLatitude,
            upper_longitude: upperLongitude
        };
        return this.list(page, limited, size, undefined, params);
    }

    async get(userId: string): Promise<User> {
        return this.conf.get(new User(), "/user/" + userId) as Promise<User>;
    }

    async getActiveUsers(): Promise<User[]> {
        return this.conf.getList(new User(), "/user/active") as Promise<User[]>;
    }


}