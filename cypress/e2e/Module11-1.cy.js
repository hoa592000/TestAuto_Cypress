//Kiểm tra javascript
import loginPage from "../PageObjects/loginPage";
const loginpage = new loginPage();

beforeEach('Đăng nhập', () => {
    cy.visit('/login');

    loginpage.setClickCancel();

    loginpage.setEmail("admin@juice-sh.op");

    loginpage.setPassword("admin123");

    loginpage.clickSubmit();

})
it('html javascript ', () => {

    cy.get('button#navbarAccount').click();

    cy.wait(1000)

    cy.get('button[role="menuitem"]')
            .contains("admin@juice-sh.op")
            .click();

    cy.get('#username').clear();

    cy.get('#username').type('<b>1</b>');

    cy.get('#submit').click();


    cy.wait(1000)

    cy.get('i[class="material-icons"]').click();

    cy.get('button[class="mat-focus-indicator mat-tooltip-trigger mat-button mat-button-base"]').click(); 

    cy.get('body.mat-app-background.bluegrey-lightgreen-theme:nth-child(2) div.mat-typography mat-sidenav-container.mat-drawer-container.mat-sidenav-container.mat-drawer-transition.mat-drawer-container-has-open mat-sidenav.mat-drawer.mat-sidenav.ng-tns-c87-0.ng-trigger.ng-trigger-transform.mat-drawer-over.ng-star-inserted.mat-drawer-opened:nth-child(3) div.mat-drawer-inner-container.ng-tns-c87-0 sidenav.ng-tns-c87-0 mat-nav-list.mat-nav-list.mat-list-base a.mat-list-item.mat-focus-indicator.ng-star-inserted:nth-child(8) span.mat-list-item-content > i.material-icons').click(); 

    cy.get('div[class="speech-bubble-left"]').contains(" Nice to meet you <b>1</b>, I'm Juicy ").should('not.exist');

    cy.wait(1000);

    cy.wait(1000)
    
})
