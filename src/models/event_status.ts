export enum EventStatus {
    WantToParticipate = 'WANT_TO_PARTICIPATE',
    WaitingConfirmation = 'WAITING_CONFIRMATION',
    Confirmed = 'CONFIRMED',
    WaitingForFreeSeat = 'WAITING_FOR_FREE_SEAT',
    NoResponse = 'NO_RESPONSE',
    NotAvailable = 'NOT_AVAILABLE',
    HasCancelled = 'HAS_CANCELLED',
    HasCancelledAfterHavingConfirmed = 'HAS_CANCELLED_AFTER_HAVING_CONFIRMED',
}