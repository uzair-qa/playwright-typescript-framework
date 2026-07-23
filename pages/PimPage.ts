import { Locator, Page } from "@playwright/test";

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

    /**
     * To add a new employee in PIM module
     * @param firstname 
     * @param middlename 
     * @param lastname 
     */
    async addEmployee(firstname: string, middlename: string, lastname: string) {
        await this.addBtn.click();
        await this.firstNameTextBox.fill(firstname);
        await this.middleNameTextBox.fill(middlename);
        await this.lastNameTextBox.fill(lastname);

        // Overwrite OrangeHRM's auto-suggested Employee Id with a guaranteed-unique value,
        // since parallel browser runs can otherwise collide on the same auto-generated id
        const uniqueEmployeeId = Date.now().toString().slice(-6);
        await this.employeeIdTextBox.fill(uniqueEmployeeId);

        await this.saveBtn.click();

        /**
         * Although playwright already uses auto waits, but here for: page transition, AJAX request, or new UI to render, use waitFor()
         */
        await this.newEmployeeNameHeading.waitFor({
            state: "visible"
        });
    }
}