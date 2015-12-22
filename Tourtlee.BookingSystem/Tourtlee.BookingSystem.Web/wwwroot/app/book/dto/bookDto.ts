export class CreateBookingSetDto {
    idTour: string;
    date: Date;
    bookings: CreateBookingDto[];
}

export class CreateBookingDto {
    index: number;
    firstName: string;
    lastName: string;
    gender: Gender;
    child: boolean;

    constructor(index: number) {
        this.index = index;
    }
}

export enum Gender {
    Male = 0,
    Female = 1
}
