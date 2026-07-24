import { test, expect } from '../../fixtures/hooks-fixtures';
import pimData from '../../data/employee-data.json';

test('[PIM] Verify that a new employee is successfully created under the PIM Module', {
    tag: ['@UI', '@UAT'],
    annotation: {
        type: 'Test Case Link',
        description: 'Link of test case[tbd]'
    },
}, async ({ gotoUrl, leftNavigationPage, pimPage }) => {
    await test.step("Open PIM Module", async () => {
        await leftNavigationPage.openPimModule();
    })

    await test.step("Create a new Employee", async () => {
        const employeeId = await pimPage.addEmployee(
            pimData.first_name,
            pimData.middle_name,
            pimData.last_name
        );
        await pimPage.verifyEmployeeCreated(
            `${pimData.first_name} ${pimData.last_name}`
        );
        console.log(`Employee ID: ${employeeId}`);
    })
})