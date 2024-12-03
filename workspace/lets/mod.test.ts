import { hey } from '@marianmeres/hey';
import { assertEquals } from '@std/assert';
import { lets } from './mod.ts';

Deno.test('lets', () => {
	assertEquals(lets(), 'go');
});

Deno.test('hey ho lets go', () => {
	assertEquals(['hey', hey(), 'lets', lets()].join(' '), 'hey ho lets go');
});
