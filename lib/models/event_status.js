"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventStatus;
(function (EventStatus) {
    EventStatus["WantToParticipate"] = "WANT_TO_PARTICIPATE";
    EventStatus["WaitingConfirmation"] = "WAITING_CONFIRMATION";
    EventStatus["Confirmed"] = "CONFIRMED";
    EventStatus["WaitingForFreeSeat"] = "WAITING_FOR_FREE_SEAT";
    EventStatus["NoResponse"] = "NO_RESPONSE";
    EventStatus["NotAvailable"] = "NOT_AVAILABLE";
    EventStatus["HasCancelled"] = "HAS_CANCELLED";
    EventStatus["HasCancelledAfterHavingConfirmed"] = "HAS_CANCELLED_AFTER_HAVING_CONFIRMED";
})(EventStatus = exports.EventStatus || (exports.EventStatus = {}));
