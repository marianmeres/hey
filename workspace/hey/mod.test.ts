import { assertEquals } from '@std/assert';
import { hey } from './mod.ts';
import { lets } from '@marianmeres/lets';

Deno.test('hey', () => {
	assertEquals(hey(), 'ho');
});

Deno.test('hey ho lets go', () => {
	assertEquals(['hey', hey(), 'lets', lets()].join(' '), 'hey ho lets go');
});
