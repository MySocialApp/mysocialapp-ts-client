import {Model} from "./model";

export class UserSettings extends Model {
    stat_status_enabled: boolean;
    private _notification: UserSettingsNotification;
    language_zone: LanguageZone;
    interface_language: InterfaceLanguage;

    set notification(n: UserSettingsNotification) {
        this._notification = new UserSettingsNotification(n);
    }

    get notification(): UserSettingsNotification {
        return this._notification;
    }
}

export class UserSettingsNotification extends Model {
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

export enum MailFrequency {
    Never = 'NEVER',
    RealTime = 'READ_TIME',
    Daily = 'DAILY',
    Weekly = 'WEEKLY',
}

export enum LanguageZone {
    EN = 'EN',
    FR = 'FR',
    DE = 'DE',
}

export enum InterfaceLanguage {
    EN = 'EN',
    FR = 'FR',
    DE = 'DE',
}

export const DefaultInterfaceLanguage = InterfaceLanguage.EN;