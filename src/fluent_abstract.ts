import {Session} from "./session";

export class FluentAbstract {
    protected session: Session;

    constructor(session: Session) {
        this.session = session;
    }
}