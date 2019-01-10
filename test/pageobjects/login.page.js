class LoginPage {

    get workspaceField() { return $('input#domain'); }
    get continueBtn() { return $('button[type=submit]'); }
    get userField() { return $('input[type=email]'); }
    get pwdField() { return $('input[type=password]'); }
    get teamOwnerName() { return $('span#team_menu_user_name'); }
    get startPageHeader() { return $('h1=Sign in to your workspace'); }
    get signInHeader() { return $('#signin_header span'); }


    open() {
        browser.url('signin');
        expect(browser.getTitle()).to.equal('Sign in | Slack');
    }

    inputTeamName() {
        this.workspaceField.setValue(browser.config.teamName);
        this.continueBtn.click();
        expect(this.signInHeader.getText()).to.equal(browser.config.teamName);
    }

    inputLoginCreds() {
        this.userField.setValue(browser.config.username);
        this.pwdField.setValue(browser.config.pwd);
    }

    submitForm() {
        browser.keys('Enter');
        this.teamOwnerName.waitForDisplayed();
    }

    loginToApp() {
        this.inputTeamName()
        this.inputLoginCreds();
        this.submitForm();
    }

    deleteCookies() {
        browser.deleteCookies(['d']);
        browser.url('/messages');
        this.startPageHeader.waitForDisplayed();
    }
};

export default new LoginPage();

