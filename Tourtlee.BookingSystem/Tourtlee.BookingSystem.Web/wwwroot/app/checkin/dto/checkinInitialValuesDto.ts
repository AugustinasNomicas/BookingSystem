import {CheckinProgress} from "./checkinProgress";

export class CheckinInitialValuesDto {
    idTour: string;
    date: Date;
    datesList: Date[];
    checkinProgress: CheckinProgress;
}