import { lets } from "@marianmeres/lets";
import { assertEquals } from "@std/assert";
import { hey } from "./mod.ts";

Deno.test("hey", () => {
	assertEquals(hey(), "ho");
});

Deno.test("hey ho lets go", () => {
	assertEquals(["hey", hey(), "lets", lets()].join(" "), "hey ho lets go");
});
