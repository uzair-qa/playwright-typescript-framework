import { expect, Locator, Page } from "@playwright/test";


export class EmployeeDetailsPage {

    readonly page: Page;
    readonly otherIdTextBox: Locator;
    readonly saveButton: Locator;

    readonly toastMessage: Locator;

    constructor(page: Page) {

        this.page = page;
        this.otherIdTextBox = page
            .locator('.oxd-input-group:has-text("Other Id")')
            .locator('input');
        this.saveButton = page
            .locator("form")
            .first()
            .getByRole("button", { name: "Save" });

        this.toastMessage = page.locator(".oxd-text--toast-message");
    }


    async enterOtherId(otherId: string) {
        await this.otherIdTextBox.fill(otherId);
    }

    async clickSave() {
        await this.saveButton.click();
    }

    async updateOtherId(otherId: string) {
        await this.enterOtherId(otherId);
        await this.clickSave();
    }


    async verifyUpdateSuccessful() {
        await expect(this.toastMessage).toHaveText("Successfully Updated");
    }

    async waitForPageToLoad(){
        await expect(this.otherIdTextBox).toBeVisible();
    }
}