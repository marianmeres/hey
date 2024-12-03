/**
 * @module
 *
 * A module providing a hey function.
 *
 * @example
 * ```ts
 * import { hey } from "@marianmeres/hey";
 *
 * console.log(hey()); // logs "ho"
 * ```
 */

/**
 * Hey.
 *
 * ```ts
 * hey(); // returns "ho"
 * ```
 */
export function hey(): string {
	return "ho";
}

if (import.meta.main) {
	console.log(hey());
}
