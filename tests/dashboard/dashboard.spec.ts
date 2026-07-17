import { test, expect } from "../../fixtures/hooks-fixtures";

test("Verify Dashboard Title", async ({ dashboardPage }) => {
  await expect(dashboardPage.DashboardTitleText).toHaveText("Dashboard");
});