import { Parser } from 'estree';

test('hello world!', () => {
	const example: Parser = { type: 'Program', body: [] };
	expect(example.type).toBe('Program');
});