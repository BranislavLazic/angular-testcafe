import { Selector } from "testcafe";

fixture`Home page`.page`http://localhost:4200`;

test("Home page", async t => {
  // Assert home page title
  await t.expect(Selector("span").withText("Welcome").visible).ok();
});
