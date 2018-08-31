import { User } from "./user";
import { Model } from "./model";
export declare class Like extends Model {
    private _owner?;
    id_str?: string;
    type?: string;
    created_date: string;
    id: any;
    owner: User;
}
