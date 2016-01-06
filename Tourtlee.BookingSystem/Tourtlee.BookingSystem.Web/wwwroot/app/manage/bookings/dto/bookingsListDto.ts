import {PagedDto} from "../../../shared/dto/PagedDto";

export class BookingListDto extends PagedDto {

    bookings: BookingDto[];
}

export class BookingDto {
    idBooking: string;
    idBookingSet: string;
    idTour: string;
    tourDate: Date;
    bookDate: Date;
    firstname: string;
    lastname: string;
    gender: number;
    isChild: boolean;
}