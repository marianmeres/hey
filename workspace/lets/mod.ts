/**
 * @module
 *
 * A module providing a lets function.
 *
 * @example
 * ```ts
 * import { lets } from "@marianmeres/lets";
 *
 * console.log(lets()); // logs "go"
 * ```
 */

/**
 * Let's.
 *
 * ```ts
 * lets(); // returns "go"
 * ```
 */
export function lets(): string {
	return 'go';
}

if (import.meta.main) {
	console.log(lets());
}
