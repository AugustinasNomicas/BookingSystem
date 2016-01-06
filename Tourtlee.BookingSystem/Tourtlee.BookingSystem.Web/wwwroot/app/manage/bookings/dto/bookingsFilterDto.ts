import {PagedRequestDto} from "../../../shared/dto/PagedRequestDto";

export class BookingsFilterDto extends PagedRequestDto {
    idTour: string;
    text: string;
}