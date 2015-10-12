interface ICrudService<T> {
    delete(id: string): void;

    get(id: string): T;

    getList(): T[];

    post(item: T): angular.IHttpPromise<T>;

    put(item: T): angular.IHttpPromise<T>;
}