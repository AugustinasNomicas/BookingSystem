export class CreateUserDto {
    email: string;
    password: string;
    passwordRepeat: string;

    idOrganization: string;
    organizationName: string;
    organizationMode: CreateUserOrganizationModes;
}

export enum CreateUserOrganizationModes {
    Existing = 0,
    Create = 1
}