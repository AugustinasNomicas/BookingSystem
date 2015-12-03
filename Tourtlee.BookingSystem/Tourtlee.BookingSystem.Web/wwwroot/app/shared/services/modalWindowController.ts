class ModalWindowController {
    static $inject: string[] = ["$modalInstance", "title", "body", "$translate"];

    title = "";
    body = "";

    constructor(private $modalInstance,
        title, body, $translate) {
        // If specified, fill window title and message with parameters
        if (title && body) {
            $translate([title, body]).then((t) => {
                this.title = t[title];
                this.body = t[body];
            });
        }
    }

    confirm = () => {
        this.$modalInstance.close();
    };

    cancel = () => {
        this.$modalInstance.dismiss();
    };
}

export = ModalWindowController;