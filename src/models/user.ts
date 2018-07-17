import {Model} from "./model";
import {Photo} from "./photo";
import {Base} from "./base";

export class User extends Base {
    private updated_date?: string;
    private profile_photo?: Photo;
}