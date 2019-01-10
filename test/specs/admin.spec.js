import AdminPage from '../pageobjects/admin.page';

describe('open admin section', function () {
    it('should open admin section', function () {
        AdminPage.openAdminSection();
    })

    it('should change user permissions to admin', function () {
        AdminPage.changeUserPermissions('Admin');
    })

    it('should change user permissions to member', function () {
        AdminPage.changeUserPermissions('Full Member');
    })

    it('should change user permissions to owner', function () {
        AdminPage.changeUserPermissions('Owner');
    })


})