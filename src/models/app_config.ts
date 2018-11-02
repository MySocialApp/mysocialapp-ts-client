import {Model} from "./model";

export class AppConfig extends Model {
    id: number;
    id_str: string;
    type: string;
    displayed_name: string;
    config_id: string;
    package_id: string;
    created_date: string;
    updated_date: string;
    private _owner: AppConfigOwner;
    name: string;
    short_name: string;
    description: string;
    short_description: string;
    language: string;
    contact_email: string;
    web_site_url: string;
    logo_url: string;
    logo_xxxxxhdpi_url: string;
    logo_xxxxhdpi_url: string;
    logo_xxxhdpi_url: string;
    logo_xxhdpi_url: string;
    logo_xhdpi_url: string;
    logo_hdpi_url: string;
    logo_mdpi_url: string;
    primary_color: string;
    secondary_color: string;
    splash_logo_image_url: string;
    splash_background_image_url: string;
    authentication_required: boolean;
    features: string[];
    eula_url: string;
    demo_mode: boolean;
    api_root_url: string;
    android_app_url: string;
    ios_app_url: string;
    ios_scheme: string;
    preview_app_url: string;
    logo_48x48_url: string;
    logo_72x72_url: string;
    logo_96x96_url: string;
    logo_144x144_url: string;
    logo_192x192_url: string;
    logo_256x256_url: string;
    logo_512x512_url: string;



    set owner(o: AppConfigOwner) {
        this._owner = new AppConfigOwner(o, this.conf);
    }

    get owner(): AppConfigOwner {
        return this._owner;
    }
}

class AppConfigOwner extends Model {
    private _id_str: string;
    admin: boolean;
    partner: false;
    mobile_app_creator: false;
    basic_user: true;
    type: string;

    set id(id: any) {

    }

    get id(): any {
        return this._id_str;
    }

    set id_str(id: string) {
        this._id_str = id;
    }

    get id_str(): string {
        return this._id_str;
    }
}