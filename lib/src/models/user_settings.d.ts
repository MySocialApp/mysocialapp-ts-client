import { Model } from "./model";
export declare class UserSettings extends Model {
    stat_status_enabled: boolean;
    private _notification;
    language_zone: LanguageZone;
    interface_language: InterfaceLanguage;
    notification: UserSettingsNotification;
}
export declare class UserSettingsNotification extends Model {
    enabled: boolean;
    push_enabled: boolean;
    mail_enabled: boolean;
    mail_frequency: MailFrequency;
    event_enabled: boolean;
    maximum_distance: number;
    messaging_enabled: boolean;
    comment_enabled: boolean;
    like_enabled: boolean;
    offer_enabled: boolean;
    sound_enabled: boolean;
    newsletter_enabled: boolean;
}
export declare enum MailFrequency {
    Never = "NEVER",
    RealTime = "READ_TIME",
    Daily = "DAILY",
    Weekly = "WEEKLY"
}
export declare enum LanguageZone {
    EN = "EN",
    FR = "FR",
    DE = "DE"
}
export declare enum InterfaceLanguage {
    EN = "EN",
    FR = "FR",
    DE = "DE"
}
export declare const DefaultInterfaceLanguage: InterfaceLanguage;
