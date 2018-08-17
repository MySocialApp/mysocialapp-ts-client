import { Rest } from "./rest";
import { SimpleLocation } from "../models/simple_location";
import { User } from "../models/user";
export declare class RestUser extends Rest {
    list(page: number, limited?: boolean, size?: number, location?: SimpleLocation, params?: {}): Promise<User[]>;
    listByZone(page: number, limited: boolean, size: number, lowerLatitude: number, lowerLongitude: number, upperLatitude: number, upperLongitude: number): Promise<User[]>;
    get(userId: string): Promise<User>;
    getActiveUsers(): Promise<User[]>;
}
