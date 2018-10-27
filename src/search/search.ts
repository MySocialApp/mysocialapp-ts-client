export class SearchBuilder {
    protected params: Map<string, string>;

    constructor() {
        this.params = new Map();
    }

    toQueryParams(): {} {
        let values = {};
        for (let k of this.params.keys()) {
            values[k] = this.params.get(k);
        }
        values['date_field'] = this.params.get('date_field') ? this.params.get('date_field') : 'created_date';
        return values;
    }
}