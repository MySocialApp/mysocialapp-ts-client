"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const fluent_abstract_1 = require("./fluent_abstract");
const event_options_1 = require("./models/event_options");
class FluentEvent extends fluent_abstract_1.FluentAbstract {
    list(page, size = 10, search) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!search) {
                search = new event_options_1.EventOptions();
            }
            search.setPage(page).setSize(size);
            return this.session.clientService.event.listFromParams(search.toQueryParams());
        });
    }
    stream() {
        return __asyncGenerator(this, arguments, function* stream_1() {
            let page = 0;
            while (true) {
                let feeds = yield __await(this.list(page++));
                if (!feeds.length) {
                    return yield __await(void 0);
                }
                for (let feed of feeds) {
                    yield yield __await(feed);
                }
            }
        });
    }
    /**
     * if limited = true in received full information about event
     * - free_seats
     * - taken_seats
     * - members
     *
     * @param id
     * @param limited
     */
    get(id, limited = true) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.session.clientService.event.get(id, limited);
        });
    }
    create(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.session.clientService.event.create(event);
        });
    }
    search(search, page, size = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.session.clientService.search.get(page, size, search.toQueryParams());
        });
    }
    getAvailableCustomFields() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.session.clientService.event.getCustomFields();
        });
    }
}
exports.FluentEvent = FluentEvent;
