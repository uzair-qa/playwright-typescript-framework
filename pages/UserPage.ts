import { Locator, Page } from "@playwright/test";

export class UserPage {
    
    readonly page : Page;
    readonly userMenuBtn : Locator;
    readonly logoutBtn : Locator;

    constructor(page : Page){
        this.page = page;
        this.userMenuBtn = page.locator('.oxd-userdropdown-tab');
        this.logoutBtn = page.getByRole('menuitem', { name: 'Logout' });
    }

    async logout(){
        await this.userMenuBtn.click();
        await this.logoutBtn.click();
    }
}