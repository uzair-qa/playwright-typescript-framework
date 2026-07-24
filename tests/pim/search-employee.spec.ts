import { test } from "../../fixtures/hooks-fixtures";
import pimData from '../../data/employee-data.json';

test('[PIM] Verify that an employee can be searched using Employee ID', {
    tag: ['@UI', '@UAT'],
    annotation: {
        type: 'Test Case Link',
        description: 'Link of test case[tbd]'
    },
}, async ({ gotoUrl, leftNavigationPage, pimPage }) => {


    let employeeId! : string;

    await test.step("Open PIM Module", async () => {
        await leftNavigationPage.openPimModule();
    });

    await test.step("Add a new Employee", async () => {
        employeeId = await pimPage.addEmployee(
            pimData.first_name,
            pimData.middle_name,
            pimData.last_name
        );
    });

    await test.step("Verify Employee is created successfully", async () => {
        await pimPage.verifyEmployeeCreated(
            `${pimData.first_name} ${pimData.last_name}`
        );
    });

    await test.step("Navigate to Employee List", async () => {
        await pimPage.openEmployeeList();
    });

    await test.step("Search Employee using Employee ID", async () => {
        await pimPage.searchEmployeeById(employeeId);
    });

    await test.step("Verify Employee is displayed in the search results", async () => {
        await pimPage.verifyEmployeeExists(employeeId);
    })

})  