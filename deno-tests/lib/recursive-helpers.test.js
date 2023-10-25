import {assertEquals, beforeAll, describe, init} from "../dependencies.js";
import {findFactorial} from "./../../lib/recursive-helpers.js";

describe("recursive helpers", () => {

    beforeAll(async () => {
        await init();
    });

    Deno.test('should handle normal integers', async () => {
        const result = await findFactorial(5);

        assertEquals(result, 120);
    });

    Deno.test('should handle negative integers', async () => {
        const result = await findFactorial(-5);

        assertEquals(result, "Negative numbers are not allowed");
    });

    Deno.test('should handle float numbers', async () => {
        const result = await findFactorial(5.5);

        assertEquals(result, "Non-integer numbers are not allowed");
    });

    Deno.test('should handle NaN scenarios', async () => {
        const result = await findFactorial(NaN);

        assertEquals(result, "Non-integer numbers are not allowed");
    });

    Deno.test('should handle letters scenarios', async () => {
        const result = await findFactorial("jbjh");

        assertEquals(result, "Non-integer numbers are not allowed");
    });
});


