
interface ICrudResource<T> {
    delete(id: string): angular.IHttpPromise<void>;

    get(id: string): angular.IHttpPromise<T>;

    getList(): angular.IHttpPromise<T[]>;

    create(item: OrganizationDto): angular.IHttpPromise<T>;

    update(item: OrganizationDto): angular.IHttpPromise<T>;
}