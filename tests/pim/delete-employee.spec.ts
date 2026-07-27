import { test } from '../../fixtures/hooks-fixtures';
import pimData from '../../data/employee-data.json'


test('[PIM] Verify that an employee can be deleted successfully', {
    tag: ["@UI", "@UAT"],
    annotation: {
        type: "Test Case Link",
        description: "Link of test case[tbd]"
    },
 }, async({leftNavigationPage, pimPage})=>{

    let employeeId: string;

        await test.step('Open PIM Module', async()=>{
            await leftNavigationPage.openPimModule();
        });

        await test.step('Create a new Employee', async()=>{
            employeeId = await pimPage.addEmployee(
                pimData.first_name,
                pimData.middle_name,
                pimData.last_name
            );
            await pimPage.verifyEmployeeCreated(
                `${pimData.first_name} ${pimData.last_name}`
            );
        });

        await test.step('Search Employee', async()=>{
            await pimPage.openEmployeeList();
            await pimPage.searchEmployeeById(employeeId);
            await pimPage.verifyEmployeeExists(employeeId);
        });

        await test.step('Delete Employee', async()=>{
            await pimPage.deleteEmployee(employeeId);
        });

        await test.step('Verify Employee Deleted', async()=>{
            await pimPage.searchEmployeeById(employeeId);
            await pimPage.verifyEmployeeDeleted(employeeId);
        })
})