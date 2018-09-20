"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const simple_location_1 = require("./simple_location");
const constant_1 = require("../constant");
const moment = require("moment");
class CustomField extends model_1.Model {
    getJsonParameters() {
        let data = {
            field: this.field.getJsonParameters()
        };
        if (this.data != undefined) {
            data['data'] = this.data.getJsonParameters();
            data['data']['field_id'] = this.field.id;
        }
        return data;
    }
    set field(fields) {
        this._field = new Field(fields, this.conf);
    }
    get field() {
        return this._field;
    }
    set data(data) {
        this._data = new CustomFieldData(data, this.conf);
    }
    get data() {
        return this._data;
    }
    get field_type() {
        return this.field.field_type;
    }
    get position() {
        return this.field.position;
    }
    get label() {
        return this.field.labels[this.conf.interfaceLanguage];
    }
    get description() {
        return this.field.descriptions[this.conf.interfaceLanguage];
    }
    get placeholder() {
        return this.field.placeholders[this.conf.interfaceLanguage];
    }
    get possibleValues() {
        return this.field.values[this.conf.interfaceLanguage];
    }
    get value() {
        return this.data !== undefined ? this.data.value : null;
    }
    set value(value) {
        if (this.data === undefined) {
            this.data = {};
        }
        this.data.value = value;
    }
    get booleanValue() {
        return this.data !== undefined ? this.data.value : null;
    }
    set booleanValue(value) {
        this.value = value;
    }
    get stringsValue() {
        return this.data !== undefined ? this.data.value : null;
    }
    set stringsValue(value) {
        this.value = value;
    }
    get stringValue() {
        return this.data !== undefined ? this.data.value : null;
    }
    set stringValue(value) {
        this.value = value;
    }
    get numberValue() {
        return this.data !== undefined ? this.data.value : null;
    }
    set numberValue(value) {
        this.value = value;
    }
    get locationValue() {
        return this.data !== undefined ? new simple_location_1.SimpleLocation(this.data.value) : null;
    }
    set locationValue(value) {
        this.value = value;
    }
    set dateValue(value) {
        this.value = value.format(constant_1.apiDateFormat);
    }
    get dateValue() {
        return moment(this.value);
    }
}
exports.CustomField = CustomField;
class Field extends model_1.Model {
    getJsonParameters() {
        return {
            id: this.id,
            field_type: this.field_type,
        };
    }
    set id(id) {
        // Long type doesn't work with browser
    }
    get id() {
        return this.id_str;
    }
}
class CustomFieldData extends model_1.Model {
    getJsonParameters() {
        return {
            field_id: this.field_id,
            value: this.value,
        };
    }
    set field_id(id) {
    }
    get field_id() {
        return this.field_id_str;
    }
}
exports.CustomFieldData = CustomFieldData;
var CustomFieldType;
(function (CustomFieldType) {
    CustomFieldType["InputText"] = "INPUT_TEXT";
    CustomFieldType["InputTextarea"] = "INPUT_TEXTAREA";
    CustomFieldType["InputNumber"] = "INPUT_NUMBER";
    CustomFieldType["InputBoolean"] = "INPUT_BOOLEAN";
    CustomFieldType["InputDate"] = "INPUT_DATE";
    CustomFieldType["InputUrl"] = "INPUT_URL";
    CustomFieldType["InputEmail"] = "INPUT_EMAIL";
    CustomFieldType["InputPhone"] = "INPUT_PHONE";
    CustomFieldType["InputLocation"] = "INPUT_LOCATION";
    CustomFieldType["InputSelect"] = "INPUT_SELECT";
    CustomFieldType["InputCheckbox"] = "INPUT_CHECKBOX";
})(CustomFieldType = exports.CustomFieldType || (exports.CustomFieldType = {}));
