export class CheckinResultDto {
    success: boolean;
    resultItems: CheckinResultItemDto[];
}

export class CheckinResultItemDto {
    idBooking: string;
    firstname: string;
    lastname: string;
    checkedIn: boolean;
    bookDate: Date;
}