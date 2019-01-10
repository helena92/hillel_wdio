import AdminPage from '../pageobjects/admin.page';

describe('admin section', function () {
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

    it('should deactivate user', function () {
        AdminPage.deactivateUser();
    })

    it('should activate user', function () {
        AdminPage.activateUser();
    })


})