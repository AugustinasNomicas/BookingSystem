class notificationService {
    static $inject: string[] = ["toastr", "$translate"];

    constructor(private toastr: any, private $translate: any) {

    }

    error(error) {
        this.toastr.error(error);
    }

    errorUpdate(error) {
        this.$translate(["notifications.updateFailed"]).then((t) => {
            this.toastr.error(t["notifications.updateFailed"]);
        });
        
    }

    successUpdate() {
        this.$translate(["notifications.successfullyUpdated"]).then((t) => {
            this.toastr.success(t["notifications.successfullyUpdated"]);
        });

    }
}


export = notificationService;