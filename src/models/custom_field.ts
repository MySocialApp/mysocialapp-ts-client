import {AccessControl} from "./access_control";
import {Model} from "./model";
import {InterfaceLanguage} from "./user_settings";
import {SimpleLocation} from "./simple_location";

export class CustomField extends Model {
    _field: Field;
    _data: CustomFieldData;

    set field(fields: Field) {
        this._field = new Field(fields, this.conf)
    }

    get field(): Field {
        return this._field;
    }

    set data(data: CustomFieldData) {
        this._data = new CustomFieldData(data, this.conf);
    }

    get data(): CustomFieldData {
        return this._data;
    }

    get field_type(): CustomFieldType {
        return this.field.field_type;
    }

    get position(): number {
        return this.field.position;
    }

    get label(): string {
        return this.field.labels[this.conf.interfaceLanguage];
    }

    get description(): string {
        return this.field.descriptions[this.conf.interfaceLanguage];
    }

    get placeholder(): string {
        return this.field.placeholders[this.conf.interfaceLanguage];
    }

    get possibleValues(): string[] {
        return this.field.values[this.conf.interfaceLanguage];
    }

    get value(): any {
        return this.data !== undefined ? this.data.value : null;
    }

    set value(value: any) {
        if (this.data === undefined) {
            this.data = {} as CustomFieldData;
        }
        this.data.value = value;
    }

    get booleanValue(): boolean {
        return this.data !== undefined ? this.data.value as boolean : null;
    }

    set booleanValue(value: boolean) {
        this.value = value;
    }

    get stringsValue(): string[] {
        return this.data !== undefined ? this.data.value as string[] : null;
    }

    set stringsValue(value: string[]) {
        this.value = value;
    }

    get stringValue(): string {
        return this.data !== undefined ? this.data.value as string : null;
    }

    set stringValue(value: string) {
        this.value = value;
    }

    get numberValue(): number {
        return this.data !== undefined ? this.data.value as number : null;
    }

    set numberValue(value: number) {
        this.value = value;
    }

    get location(): SimpleLocation {
        return this.data !== undefined ? new SimpleLocation(this.data.value as {}) : null;
    }

    set location(value: SimpleLocation) {
        this.value = value;
    }
}

class Field extends Model {
    id: any;
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
}

export class CustomFieldData extends Model {
    field_id: any;
    field_id_str: string;
    created_date: string;
    updated_date: string;
    value: any;
}

export enum CustomFieldType {
    InputText = 'INPUT_TEXT',
    InputTextarea = 'INPUT_TEXTAREA',
    InputNumber = 'INPUT_NUMBER',
    InputBoolean = 'INPUT_BOOLEAN',
    InputDate = 'INPUT_DATE',
    InputUrl = 'INPUT_URL',
    InputEmail = 'INPUT_EMAIL',
    InputPhone = 'INPUT_PHONE',
    InputLocation = 'INPUT_LOCATION',
    InputSelect = 'INPUT_SELECT',
    InputCheckbox = 'INPUT_CHECKBOX',
}