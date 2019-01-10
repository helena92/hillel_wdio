class AdminPage {

    get userActions() { return $(`button[aria-label="Actions for ${browser.config.testUser}"]`); }
    get teamMenu() { return $('div#team_menu'); }
    get manageTeamBtn() { return $('li#manage_team'); }
    get administrationMenuItem() { return $('span.menu_item_label=Administration') }
    get adminPermPopUp() { return $(`span=${browser.config.testUser} is now an admin`); }
    get ownerPermPopUp() { return $(`span=${browser.config.testUser} is now an owner`); }
    get memberPermPopUp() { return $(`span=${browser.config.testUser} is now a member`); }

    openAdminSection() {
        this.teamMenu.click();
        this.administrationMenuItem.moveTo();
        browser.pause(1000);
        this.manageTeamBtn.click();
        browser.switchToLastTab();
        expect(browser.getTitle()).to.equal(`Team Admin | ${browser.config.teamName} Slack`);
    }

    changeUserPermissions(permissionType) {
        this.userActions.click();
        $(`div=Change to ${permissionType}`).click();
        switch (permissionType) {
            case 'Admin':
                this.adminPermPopUp.waitForDisplayed();
                break;
            case 'Owner':
                this.ownerPermPopUp.waitForDisplayed();
                break;
            case 'Full Member':
                this.memberPermPopUp.waitForDisplayed();
                break;
            default:
                break;
        }
        browser.pause(1000);
    }

};

export default new AdminPage();