import { expect, Locator, Page } from "@playwright/test";
import { RandomUtils } from "../utils/RandomUtils";

export class PimPage {

    readonly page: Page;
    readonly addBtn: Locator;
    readonly firstNameTextBox: Locator;
    readonly middleNameTextBox: Locator;
    readonly lastNameTextBox: Locator;
    readonly employeeIdTextBox: Locator;
    readonly saveBtn: Locator;
    readonly newEmployeeNameHeading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addBtn = page.getByRole('button', { name: ' Add' });
        this.firstNameTextBox = page.getByRole('textbox', { name: 'First Name' });
        this.middleNameTextBox = page.getByRole('textbox', { name: 'Middle Name' });
        this.lastNameTextBox = page.getByRole('textbox', { name: 'Last Name' });
        this.employeeIdTextBox = page.getByRole('textbox').nth(4);
        this.saveBtn = page.getByRole('button', { name: 'Save' });
        this.newEmployeeNameHeading = page.locator('.orangehrm-edit-employee-name h6');
    }

    async clickAdd() {
        await this.addBtn.click();
    }

    async enterFirstName(firstName: string) {
        await this.firstNameTextBox.fill(firstName);
    }

    async enterMiddleName(middleName: string) {
        await this.middleNameTextBox.fill(middleName);
    }

    async enterLastName(lastName: string) {
        await this.lastNameTextBox.fill(lastName);
    }

    async enterEmployeeId(employeeId: string) {
        await this.employeeIdTextBox.fill(employeeId);
    }

    async clickSave() {
        await this.saveBtn.click();
    }

    /**
     * To add a new employee in PIM module
     * @param firstname 
     * @param middlename 
     * @param lastname 
     */
    async addEmployee(firstname: string, middlename: string, lastname: string): Promise<string> {

        const employeeId = RandomUtils.employeeId();

        await this.clickAdd();
        await this.enterFirstName(firstname);
        await this.enterMiddleName(middlename);
        await this.enterLastName(lastname);
        await this.enterEmployeeId(employeeId);
        await this.clickSave();

        /**
         * Although playwright already uses auto waits, but here for: page transition, AJAX request, or new UI to render, use waitFor()
         */
        await this.newEmployeeNameHeading.waitFor({
            state: "visible"
        });

        return employeeId;
    }

    /*-------------------------------------------------------*/

    async verifyEmployeeCreated(employeeName: string) {
        await expect(this.newEmployeeNameHeading).toHaveText(employeeName);
    }
}