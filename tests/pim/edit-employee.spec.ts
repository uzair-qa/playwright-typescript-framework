import { test } from '../../fixtures/hooks-fixtures';
import pimData from '../../data/employee-data.json';
import { RandomUtils } from '../../utils/RandomUtils';


test('[PIM] Verify that employee details can be updated successfully', {
    tag: ['@UI', '@UAT'],
    annotation: {
        type: 'Test Case Link',
        description: 'Link of test case[tbd]'
    },
}, async ({ leftNavigationPage, pimPage, employeeDetailsPage }) => {


    //let employeeId!: string;

    await leftNavigationPage.openPimModule();
    const employeeId = await pimPage.addEmployee(
        pimData.first_name,
        pimData.middle_name,
        pimData.last_name
    );
    await pimPage.verifyEmployeeCreated(
        `${pimData.first_name} ${pimData.last_name}`
    );

    await pimPage.openEmployeeList();

    await pimPage.searchEmployeeById(employeeId);

    await pimPage.verifyEmployeeExists(employeeId);

    await pimPage.openEmployeeDetails(employeeId);

    await employeeDetailsPage.waitForPageToLoad();

    const otherId = RandomUtils.randomString("QA-");
    await employeeDetailsPage.updateOtherId(otherId);

    await employeeDetailsPage.verifyUpdateSuccessful();

})