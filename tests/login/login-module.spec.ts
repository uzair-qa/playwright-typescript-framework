import { test, expect } from '../../fixtures/hooks-fixtures';
import loginModuleData from '../../data/login-module-data.json';

// test.use({
//     storageState: {
//         cookies: [],
//         origins: []
//     }
// })

test('[Login] Verify that a user can not login with an invalid password', {
    tag: ['@UI', '@UAT'],
    annotation: {
        type: 'Test Case Link',
        description: 'Link of test case[tbd]'
    },
}, async ({ gotoUrl, loginPage, commonUtils }) => {
    const username = commonUtils.decryptData(process.env.USER_NAME!);
    await loginPage.loginOrangeHrm(username, loginModuleData.wrong_password);
    await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);
    await expect(loginPage.userNameInput).toBeVisible();
})

test.describe("Negative Tests for Login Functionality", {
    tag: '@NegativeTest',
    annotation: {
        type: 'Stroy Link',
        description: 'Link Of Stroy [tbd]'
    }
}, () => {

    test('[Login] Verify that a user can not login with an invalid username', {
        tag: ['@UI', '@UAT'],
        annotation: {
            type: 'Test Case Link',
            description: 'Link of test case[tbd]'
        },
    }, async ({ gotoUrl, loginPage, commonUtils }) => {
        const password = commonUtils.decryptData(process.env.PASSWORD!);
        await loginPage.loginOrangeHrm(loginModuleData.wrong_username, password);
        await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);
        await expect(loginPage.userNameInput).toBeVisible();
    })

    test('[Login] Verify that a user can not login with an invalid username and password', {
        tag: ['@UI', '@UAT', '@DEV'],
        annotation: {
            type: 'Test Case Link',
            description: 'Link of test case[tbd]'
        },
    }, async ({ gotoUrl, loginPage, commonUtils }) => {
        await loginPage.loginOrangeHrm(loginModuleData.wrong_username, loginModuleData.wrong_password);
        await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);
        await expect(loginPage.userNameInput).toBeVisible();
    })

    test('[Login] Verify that a user can not login with an invalid username and password[Failing intentionally]', {
        tag: ['@UI', '@UAT', '@DEV'],
        annotation: {
            type: 'Test Case Link',
            description: 'Link of test case[tbd]'
        },
    }, async ({ gotoUrl, loginPage, commonUtils }) => {
        await loginPage.loginOrangeHrm(loginModuleData.wrong_username, loginModuleData.wrong_password);
        //await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);
        await expect(loginPage.invalidCredentialsErrorPopup).toHaveText("false");
        await expect(loginPage.userNameInput).toBeVisible();
    })

    // test('[Login] Verify User can login with both an Invalid username and password', {
    //     tag: ['@VISUAL', '@UAT'],
    //     annotation: {
    //         type: 'Test Case Link',
    //         description: 'Link of test case[tbd]'
    //     },
    // }, async ({ gotoUrl, loginPage, commonUtils, leftNavigationPage }) => {
    //     const username = commonUtils.decryptData(process.env.USER_NAME!);
    //     const password = commonUtils.decryptData(process.env.PASSWORD!);
    //     await loginPage.loginOrangeHrm(username, password);
    //     await expect(leftNavigationPage.orangeHrmLogo).toHaveScreenshot('OrangeHrmBrandLogo.png');
    //     await expect(leftNavigationPage.leftNavigationPanel).toHaveScreenshot('LeftNavPanel.png');
    // })
})
