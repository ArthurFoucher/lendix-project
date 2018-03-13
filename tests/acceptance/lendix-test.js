import { module, test } from "qunit";
import { visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";

module("Acceptance | lendix", function(hooks) {
  setupApplicationTest(hooks);

  test("should reroute / to /lendix", async function(assert) {
    await visit("/");

    assert.equal(currentURL(), "/lendix");
  });

  test("should list recent projects", async function(assert) {
    await visit("/");

    assert.equal(
      this.element.querySelectorAll(".project").length,
      2,
      "should display 2 projects"
    );
  });
});
