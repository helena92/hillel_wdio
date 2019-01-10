import LoginPage from '../pageobjects/login.page';

describe('login to Slack', function () {
    // before(function () {
    //     browser.cdp('Network', 'enable');
    //     const conds = { offline: false, latency: 150, downloadThroughput: 550000, uploadThroughput: 550000, connectionType: 'cellular2g' };
    //     browser.cdp('Network', 'emulateNetworkConditions', conds);
    // })

    it('should open app', function () {
        LoginPage.open();
    })

    it('should login', function () {
        LoginPage.loginToApp();
    })

    // it('should log out when session cookie deleted', () => {
    //     LoginPage.deleteCookies();
    // })

    // after(function () {
    //     browser.cdp('Network', 'disable');
    // })
})


