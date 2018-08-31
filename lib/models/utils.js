"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function listToParameters(models) {
    if (!models) {
        return null;
    }
    let list = [];
    for (let m of models) {
        if (m.getJsonParameters !== undefined) {
            list.push(m.getJsonParameters());
        }
    }
    return list;
}
exports.listToParameters = listToParameters;
