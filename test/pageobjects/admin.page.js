import Page from './page';

class AdminPage extends Page {

    get userActions() { return $('button[aria-label="Actions for Helen"]'); }
    get teamMenu() { return $('div#team_menu'); }
    get manageTeamBtn() { return $('li#manage_team'); }
    get AdminSection() { return $('span.menu_item_label=Administration') }
    get adminPermPopUp() { return $('span=Helen is now an admin'); }
    get ownerPermPopUp() { return $('span=Helen is now an owner'); }
    get memberPermPopUp() { return $('span=Helen is now a member'); }

    openAdminSection() {
        this.teamMenu.click();
        this.AdminSection.moveTo();
        browser.pause(1000);
        this.manageTeamBtn.click();
        expect(browser.getTitle()).to.equal('Team Admin | hillel_team Slack');
    }

    changeUserPermissions(permissionType) {
        this.userActions.click();
        $(`div=Change to ${permissionType}`).click();
        // $(`span=Helen is now an ${permissionType.toLowerCase()}`).waitForDisplayed();
        // browser.pause(3000);
        $('span*=Helen is now').waitForDisplayed();
        // switch (permissionType) {
        //     case 'Admin':
        //         this.adminPermPopUp.waitForDisplayed();
        //     case 'Owner':
        //         this.ownerPermPopUp.waitForDisplayed();
        //     case 'Full Member':
        //         this.memberPermPopUp.waitForDisplayed();
        //     default:
        //         break;
        // }
        browser.pause(3000);
    }

    // changeUserPermissions(permissionType) {
    //     this.userActions.click();
    //     switch (permissionType) {
    //         case 'admin':
    //             this.adminPermissionBtn.click();
    //             this.adminPermPopUp.waitForDisplayed();
    //         case 'owner':
    //             this.ownerPermissionBtn.click();
    //             this.ownerPermPopUp.waitForDisplayed();
    //         case 'member':
    //             this.memberPermissionBtn.click();
    //             this.memberPermPopUp.waitForDisplayed();
    //         default:
    //             break;
    //     }
    //     browser.pause(3000);
    // }
};

export default new AdminPage();