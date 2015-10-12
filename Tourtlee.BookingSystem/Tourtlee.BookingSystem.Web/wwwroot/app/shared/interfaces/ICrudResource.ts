interface ICrudResource<T> {
    delete(id: string): angular.IHttpPromise<void>;

    get(id: string): angular.IHttpPromise<T>;

    getList(): angular.IHttpPromise<T[]>;

    post(item: OrganizationDto): angular.IHttpPromise<T>;

    put(item: OrganizationDto): angular.IHttpPromise<T>;
}