import { test, expect } from '../../fixtures/hooks-fixtures';
import pimData from '../../data/pim-module-data.json';

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

    await test.step("Add Employee in PI Module", async () => {
        await pimPage.addEmployee(pimData.first_name, pimData.middle_name, pimData.last_name);
        await expect(pimPage.newEmployeeNameHeading).toHaveText(`${pimData.first_name} ${pimData.last_name}`);
    })
})