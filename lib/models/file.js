"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FileData {
    loadFromBase64(data) {
        this.data = data;
        return this;
    }
    get blob() {
        return this.file;
    }
    /**
     * Works only with browsers, do not use with nodejs
     * @param {File} file
     * @returns {FileData}
     */
    loadFromFileBrowser(file) {
        this.file = file;
        return this;
    }
    toString() {
        return this.data;
    }
}
exports.FileData = FileData;
