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

    async getBody(): Promise<string> {
        let bodyParts = [];
        for (let part of this.parts) {
            bodyParts.push(...await part.getBodyPart(this.getBoundary()));
        }
        bodyParts.push('--' + this.getBoundary() + '--', '');
        return bodyParts.join('\r\n');
    }
}

const allowedChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ._-+,@£$€!½§~'=()[]{}0123456789";

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

    async getBodyPart(boundary: string): Promise<string[]> {
        if (this.filename != undefined) {
            return await this.getBase64Part(boundary);
        }
        return [
            '--' + boundary,
            'Content-Disposition: form-data; name="' + this.name + '"',
            'Content-Type: ' + this.contentType+ "; charset=UTF-8",
            '',
            this.value
        ];
    }

    async getBase64Part(boundary: string): Promise<string[]> {
        let body: string;
        if (typeof this.value == typeof new Blob()) {
            let reader = new FileReader();
            reader.onload = function() {
                body = String(reader.result).split(',')[1];
            };
            reader.readAsDataURL(this.value);
        } else {
            body = (new Buffer(this.value)).toString('base64');
        }
        return [
            '--' + boundary,
            'Content-Disposition: form-data; name="' + this.name + '"; filename="' + this.filename + '"',
            'Content-Type: ' + this.contentType,
            'Content-Transfer-Encoding: base64',
            '',
            body
        ];
    }
}