"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class GenericFormData {
    constructor() {
        this.parts = [];
    }
    set(name, value, contentType, filename) {
        this.parts.push(new GenericFormDataValue(name, value, contentType, filename));
    }
    setBase64File(name, value, contentType, filename) {
        this.parts.push(new GenericFormDataValue(name, value, contentType, filename));
    }
    append(name, value, contentType, filename) {
        this.set(name, value, filename, contentType);
    }
    getHeaders() {
        return {
            "Content-Type": 'multipart/form-data; boundary=' + this.getBoundary(),
        };
    }
    getBoundary() {
        return this.boundary ? this.boundary : this.boundary = Date.now().toString();
    }
    getBody() {
        return __awaiter(this, void 0, void 0, function* () {
            let bodyParts = [];
            for (let part of this.parts) {
                bodyParts.push(...yield part.getBodyPart(this.getBoundary()));
            }
            bodyParts.push('--' + this.getBoundary() + '--', '');
            return bodyParts.join('\r\n');
        });
    }
}
exports.GenericFormData = GenericFormData;
const allowedChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ._-+,@£$€!½§~'=()[]{}0123456789";
class GenericFormDataValue {
    constructor(name, value, contentType = "text/plain", filename = null) {
        this.name = name;
        this.value = value;
        this.filename = filename;
        this.contentType = contentType;
    }
    getBodyPart(boundary) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.filename != undefined) {
                return yield this.getBase64Part(boundary);
            }
            return [
                '--' + boundary,
                'Content-Disposition: form-data; name="' + this.name + '"',
                'Content-Type: ' + this.contentType + "; charset=UTF-8",
                '',
                this.value
            ];
        });
    }
    getBase64Part(boundary) {
        return __awaiter(this, void 0, void 0, function* () {
            let body = yield this.getBody();
            return [
                '--' + boundary,
                'Content-Disposition: form-data; name="' + this.name + '"; filename="' + this.filename + '"',
                //'Content-Type: ' + this.contentType,
                'Content-Transfer-Encoding: base64',
                'Content-Encoding: base64',
                '',
                body
            ];
        });
    }
    getBody() {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof this.value != typeof new Blob()) {
                return (new Buffer(this.value)).toString('base64');
            }
            return yield new Promise((resolve, reject) => {
                let reader = new FileReader();
                reader.onload = () => {
                    resolve(String(reader.result).split(',')[1]);
                };
                reader.readAsDataURL(this.value);
            });
        });
    }
}
