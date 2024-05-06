import { it } from "mocha";
import { describe } from "mocha";

describe("visit a web page", () => {
 it("Visit vg.no", () => {
     cy.visit("/");
 })
})
