import { test, expect } from "../../fixtures/hooks-fixtures";

test("[Dashboard] Verify Dashboard title is displayed after successful login", async ({ dashboardPage }) => {
  await expect(dashboardPage.DashboardTitleText).toHaveText("Dashboard");
});

