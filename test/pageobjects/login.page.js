import Page from './page';
// import { expect } from 'chai';

class LoginPage extends Page {

    get workspaceField() { return $('input#domain'); }
    get continueBtn() { return $('button[type=submit]'); }
    get teamName() { return $('span=hillel_team'); }
    get userField() { return $('input[type=email]'); }
    get pwdField() { return $('input[type=password]'); }
    get teamOwnerName() { return $('span#team_menu_user_name'); }
    get startPageHeader() { return $('h1=Sign in to your workspace'); }


    open() {
        super.open('signin');
        expect(browser.getTitle()).to.equal('Sign in | Slack');
    }

    inputTeamName() {
        this.workspaceField.setValue(browser.config.teamName);
        this.continueBtn.click();
        this.teamName.waitForDisplayed();
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

