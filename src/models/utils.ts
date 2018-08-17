import {Serializable} from "./model";

export function listToParameters(models: Serializable[]): {}[] {
    if (!models) {
        return null;
    }
    let list = [];
    for (let m of models) {
        list.push(m.getJsonParameters());
    }
    return list;
}