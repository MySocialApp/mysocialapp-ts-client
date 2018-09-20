import {Photo} from "./photo";
import {User} from "./user";
import {EntityType} from "./entity_type";
import {AccessControl} from "./access_control";
import {Serializable} from "./model";

export interface BaseImpl extends Serializable {
    type?: string;
    id?: any;
    id_str?: string;
    created_date?: string;
    displayed_name?: string;
    displayed_photo?: Photo;
    owner?: User;
    body_image_url?: string;
    body_image_text?: string;
    bodyMessage?: string;
    entity_type?: EntityType;
    access_control?: AccessControl;

    delete(): Promise<any>;

    save(): Promise<any>;
}