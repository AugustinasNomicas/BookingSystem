interface ICrudResource {
    delete(id: string): angular.IHttpPromise<void>;

    get(id: string): angular.IHttpPromise<organizationDto>;

    getList(): angular.IHttpPromise<organizationDto[]>;

    post(item: organizationDto): angular.IHttpPromise<organizationDto>;

    put(item: organizationDto): angular.IHttpPromise<organizationDto>;
}