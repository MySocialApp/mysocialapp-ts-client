export class GenericFormData {
    private parts: GenericFormDataValue[];
    private boundary: string;

    constructor() {
        this.parts = [];
    }

    set(name: string, value: any, contentType?: string, filename?: string, transfertEncoding?: string) {
        this.parts.push(new GenericFormDataValue(name, value, contentType, filename, transfertEncoding));
    }

    setBase64File(name: string, value: string, contentType?: string, filename?: string) {
        this.parts.push(new GenericFormDataValue(name, value, contentType, filename));
    }

    append(name: string, value: any, contentType?: string, filename?: string, transfertEncoding?: string) {
        this.set(name, value, filename, contentType, transfertEncoding)
    }

    getHeaders(): {} {
        return {
            "Content-Type": 'multipart/form-data; boundary=' + this.getBoundary(),
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
    contentTransfertEncoding: string;

    constructor(name: string, value: any, contentType: string = "text/plain", filename?: string, transfertEncoding?: string) {
        this.name = name;
        this.value = value;
        this.filename = filename;
        this.contentType = contentType;
        this.contentTransfertEncoding = transfertEncoding;
    }

    async getBodyPart(boundary: string): Promise<string[]> {
        if (this.filename != undefined) {
            return await this.getBase64Part(boundary);
        }
        let parts = [
            '--' + boundary,
            'Content-Disposition: form-data; name="' + this.name + '"',
            'Content-Type: ' + this.contentType + "; charset=UTF-8",
        ];
        if (this.contentTransfertEncoding) {
            parts.push('Content-Transfer-Encoding: ' + this.contentTransfertEncoding);
        }
        parts.push('', this.value);
        return parts;
    }

    async getBase64Part(boundary: string): Promise<string[]> {
        let body = await this.getBody();
        return [
            '--' + boundary,
            'Content-Disposition: form-data; name="' + this.name + '"; filename="' + this.filename + '"',
            //'Content-Type: ' + this.contentType,
            'Content-Transfer-Encoding: base64',
            'Content-Encoding: base64',
            '',
            body
        ];
    }

    async getBody(): Promise<string> {
        if (typeof this.value != typeof new Blob()) {
            return (new Buffer(this.value)).toString('base64');
        }
        return await new Promise<string>((resolve, reject) => {
            let reader = new FileReader();
            reader.onload = () => {
                resolve(String(reader.result).split(',')[1]);
            };
            reader.readAsDataURL(this.value);
        });
    }
}