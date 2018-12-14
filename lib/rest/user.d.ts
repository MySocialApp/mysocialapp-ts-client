import { Rest } from "./rest";
import { SimpleLocation } from "../models/simple_location";
import { User } from "../models/user";
import { Users } from "../models/users";
export declare class RestUser extends Rest {
    list(page: number, limited?: boolean, size?: number, location?: SimpleLocation, params?: {}): Promise<Users>;
    listByZone(page: number, limited: boolean, size: number, lowerLatitude: number, lowerLongitude: number, upperLatitude: number, upperLongitude: number): Promise<Users>;
    get(userId: string): Promise<User>;
    getActiveUsers(): Promise<User[]>;
}
