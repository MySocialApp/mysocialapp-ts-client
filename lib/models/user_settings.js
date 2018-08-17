"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
class UserSettings extends model_1.Model {
    set notification(n) {
        this._notification = new UserSettingsNotification(n);
    }
    get notification() {
        return this._notification;
    }
}
exports.UserSettings = UserSettings;
class UserSettingsNotification extends model_1.Model {
}
exports.UserSettingsNotification = UserSettingsNotification;
var MailFrequency;
(function (MailFrequency) {
    MailFrequency["Never"] = "NEVER";
    MailFrequency["RealTime"] = "READ_TIME";
    MailFrequency["Daily"] = "DAILY";
    MailFrequency["Weekly"] = "WEEKLY";
})(MailFrequency = exports.MailFrequency || (exports.MailFrequency = {}));
var LanguageZone;
(function (LanguageZone) {
    LanguageZone["EN"] = "EN";
    LanguageZone["FR"] = "FR";
    LanguageZone["DE"] = "DE";
})(LanguageZone = exports.LanguageZone || (exports.LanguageZone = {}));
var InterfaceLanguage;
(function (InterfaceLanguage) {
    InterfaceLanguage["EN"] = "EN";
    InterfaceLanguage["FR"] = "FR";
    InterfaceLanguage["DE"] = "DE";
})(InterfaceLanguage = exports.InterfaceLanguage || (exports.InterfaceLanguage = {}));
exports.DefaultInterfaceLanguage = InterfaceLanguage.EN;
