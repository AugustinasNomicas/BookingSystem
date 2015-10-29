export class CreateUserDto {
    email: string;
    password: string;
    passwordRepeat: string;

    idOrganization: string;
    organizationName: string;
    organizationMode: CreateUserOrganizatioModes;
}

export enum CreateUserOrganizatioModes {
    Existing = 0,
    Create = 1
}