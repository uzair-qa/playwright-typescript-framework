import { test as baseTest } from "./common-fixtures";

type HooksFixtureType = {
  gotoUrl: void;
  logout: void;
};

export const test = baseTest.extend<HooksFixtureType>({
  gotoUrl: [async ({ loginPage }, use) => {
    await loginPage.gotoOrangeHrm();
    await use();
  },
  { auto: true }
  ],

  logout: async ({ userPage }, use) => {
    await use();
    await userPage.logout();
  }
})

export { expect } from '@playwright/test';