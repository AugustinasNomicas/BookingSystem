class notificationService {
    static $inject: string[] = ['toastr'];

    constructor(private toastr: any) {

    }

    public error(error) {
        this.toastr.error(error);
    }

    public errorUpdate(error) {
        this.toastr.error("Update failed");
    };

    public successUpdate() {
        this.toastr.success("Successfully updated");
    };
}


export = notificationService;