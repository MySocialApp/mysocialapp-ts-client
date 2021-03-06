import { AccessControl } from "./access_control";
import { Model } from "./model";
import { InterfaceLanguage } from "./user_settings";
import { SimpleLocation } from "./simple_location";
import moment = require("moment");
export declare class CustomField extends Model {
    _field: Field;
    _data: CustomFieldData;
    getJsonParameters(): {};
    field: Field;
    data: CustomFieldData;
    readonly field_type: CustomFieldType;
    readonly position: number;
    readonly label: string;
    readonly description: string;
    readonly placeholder: string;
    readonly possibleValues: string[];
    value: any;
    booleanValue: boolean;
    stringsValue: string[];
    stringValue: string;
    numberValue: number;
    locationValue: SimpleLocation;
    dateValue: moment.Moment;
}
declare class Field extends Model {
    id_str: string;
    field_type: CustomFieldType;
    created_date: string;
    updated_date: string;
    access_control: AccessControl;
    position: number;
    important: boolean;
    default_value: any;
    labels: Map<string, string>;
    descriptions: Map<InterfaceLanguage, string>;
    placeholders: Map<InterfaceLanguage, string>;
    values: Map<InterfaceLanguage, string[]>;
    getJsonParameters(): {};
    id: any;
}
export declare class CustomFieldData extends Model {
    field_id_str: string;
    created_date: string;
    updated_date: string;
    value: any;
    getJsonParameters(): {};
    field_id: any;
}
export declare enum CustomFieldType {
    InputText = "INPUT_TEXT",
    InputTextarea = "INPUT_TEXTAREA",
    InputNumber = "INPUT_NUMBER",
    InputBoolean = "INPUT_BOOLEAN",
    InputDate = "INPUT_DATE",
    InputUrl = "INPUT_URL",
    InputEmail = "INPUT_EMAIL",
    InputPhone = "INPUT_PHONE",
    InputLocation = "INPUT_LOCATION",
    InputSelect = "INPUT_SELECT",
    InputCheckbox = "INPUT_CHECKBOX"
}
export {};
