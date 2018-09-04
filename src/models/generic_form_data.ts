export class GenericFormData {
    private parts: GenericFormDataValue[];
    private boundary: string;

    constructor() {
        this.parts = [];
    }

    set(name: string, value: any, contentType?: string, filename?: string) {
        this.parts.push(new GenericFormDataValue(name, value, contentType, filename));
    }

    append(name: string, value: any, contentType?: string, filename?: string) {
        this.set(name, value, filename, contentType)
    }

    getHeaders(): {} {
        return {
            "Content-Type": 'multipart/form-data; boundary="' + this.getBoundary() + '"',
        };
    }

    getBoundary(): string {
        return this.boundary ? this.boundary : this.boundary = Date.now().toString();
    }

    async getBody(): Promise<Uint8Array> {
        let bodyParts = [] as Uint8Array[];
        for (let part of this.parts) {
            bodyParts.push(stringToByteArray('--' + this.getBoundary() + '--'), stringToByteArray(''));
            bodyParts.push(...await part.getBodyPart(this.getBoundary()));
        }
        let body = stringToByteArray("");
        let first = true;
        for (let b of bodyParts) {
            if (!first) {
                body = concatTypedArrays(body, '\r\n');
            }
            first = false;
            body = concatTypedArrays(body, b);
        }
    }
}

const allowedChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ._-+,@£$€!½§~'=()[]{}0123456789";

function stringToByteArray(str: string): Uint8Array {
    let buf = new Buffer(str);
    let a = new Uint8Array(buf.length);
    for (let i = 0; i < buf.length; i++) a[i] = buf[i];
    return a
}

function concatTypedArrays(a, b) { // a, b TypedArray of same type
    let c = new (a.constructor)(a.length + b.length);
    c.set(a, 0);
    c.set(b, a.length);
    return c;
}

class GenericFormDataValue {
    name: string;
    value: any;
    filename: string;
    contentType: string;

    constructor(name: string, value: any, contentType: string = "text/plain", filename: string = null) {
        this.name = name;
        this.value = value;
        this.filename = filename;
        this.contentType = contentType;
    }

    async getBodyPart(boundary: string): Promise<Uint8Array[]> {
        if (this.filename != undefined) {
            return await this.getArrayBufferPart(boundary);
        }
        return [
            stringToByteArray('--' + boundary),
            stringToByteArray('Content-Disposition: form-data; name="' + this.name + '"'),
            stringToByteArray('Content-Type: ' + this.contentType + "; charset=UTF-8"),
            stringToByteArray(''),
            stringToByteArray(this.value)
        ];
    }

    async getArrayBufferPart(boundary: string): Promise<Uint8Array[]> {
        return [
            stringToByteArray('--' + boundary),
            stringToByteArray('Content-Disposition: form-data; name="' + this.name + '"; filename="' + this.filename + '"'),
            stringToByteArray('Content-Type: ' + this.contentType),
            stringToByteArray(''),
            await this.getBody()
        ] as Uint8Array[];
    }

    async getBody(): Promise<Uint8Array> {
        if (typeof this.value != typeof new Blob()) {
            let buf = new Buffer(this.value);
            let a = new Uint8Array(buf.length);
            for (let i = 0; i < buf.length; i++) a[i] = buf[i];
            return a;
        }
        return await new Promise<Uint8Array>((resolve, reject) => {
            let reader = new FileReader();
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsArrayBuffer(this.value);
        });
    }
}