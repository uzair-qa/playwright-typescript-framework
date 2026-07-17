import { Locator, Page } from "@playwright/test"

export class DashboardPage{

    readonly page : Page;
    readonly DashboardTitleText : Locator;

    constructor(page : Page){
        this.page = page;
        this.DashboardTitleText = page.getByRole('heading', { name: 'Dashboard' });
    }
}