import {Session} from "../src/session";
import {ErrorResponse} from "../src/rest/error";
import {MySocialApp} from "../src/mysocialapp";
import {CustomField, CustomFieldType} from "../src/models/custom_field";
import {SimpleLocation} from "../src/models/simple_location";
import moment = require("moment");


export function banner(title: string): void {
    console.log();
    console.log('=======================================');
    console.log('\t' + title);
    console.log('=======================================');
}

export function heading(title: string): void {
    console.log();
    console.log('> ' + title);
}

export async function createAccountAndGetSession(): Promise<Session> {
    return new MySocialApp().setAppId("u470584465854a728453").createAccount(randomId() + "@mysocialapp.io", randomId(), randomId());
}


export async function sleep(duration: number): Promise<{}> {
    return new Promise(((resolve) => {
        setTimeout(resolve, duration);
    }));
}

function randomId(): string {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 20; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

export function catchErrorFunc(err) {
    console.info("error", err);
    err = err as ErrorResponse;
    if (err.error !== undefined) {
        if (err.error['response'] !== undefined) {
            console.info("body error", err.error['response']['data']);
        }
        if (err.error['config'] !== undefined) {
            console.info("headers", err.error['config']['headers']);
        }
    } else {
        console.info("error", err);
    }
    expect(err).toBeNull();
}

export function fillCustomFields(fields: CustomField[]): CustomField[] {
    if (fields == undefined) {
        console.info("null value field", fields);
        return null;
    }
    for (let field of fields) {
        switch (field.field_type) {
            case CustomFieldType.InputBoolean:
                field.booleanValue = true;
                break;
            case CustomFieldType.InputCheckbox:
                field.stringsValue = ["value1", "value2"];
                break;
            case CustomFieldType.InputEmail:
                field.stringValue = "toto@tata.com";
                break;
            case CustomFieldType.InputLocation:
                field.locationValue = new SimpleLocation({latitude: 1.1111, longitude: 2.2222});
                break;
            case CustomFieldType.InputNumber:
                field.numberValue = 42;
                break;
            case CustomFieldType.InputPhone:
                field.stringValue = "123456789";
                break;
            case CustomFieldType.InputText:
                field.stringValue = "text";
                break;
            case CustomFieldType.InputTextarea:
                field.stringValue = "textarea";
                break;
            case CustomFieldType.InputSelect:
                field.stringValue = "select";
                break;
            case CustomFieldType.InputUrl:
                field.stringValue = "http://toto.com";
                break;
            case CustomFieldType.InputDate:
                field.dateValue = moment();
                break;
        }
    }
    return fields
}