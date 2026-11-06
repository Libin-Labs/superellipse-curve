import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('analytic fixture', () => {
  assert.ok(Math.abs(api.superellipseAt(2, 3, 2, 0).x - 2) < 1e-10);
});
test('ellipse special case', () => {
  const p = api.superellipseAt(2, 3, 2, 0.7);
  assert.equal(p.x, 2 * Math.cos(0.7));
  assert.equal(p.y, 3 * Math.sin(0.7));
});
test('implicit equation', () => {
  for (let i = 0; i < 30; i++) {
    const p = api.superellipseAt(2, 3, 4, i / 5);
    assert.ok(Math.abs((Math.abs(p.x) / 2) ** 4 + (Math.abs(p.y) / 3) ** 4 - 1) < 1e-13);
  }
});
test('diamond equation', () => {
  const p = api.superellipseAt(2, 3, 1, 0.7);
  assert.ok(Math.abs(Math.abs(p.x) / 2 + Math.abs(p.y) / 3 - 1) < 1e-14);
});
test('invalid exponent', () => {
  assert.throws(() => api.superellipseAt(1, 1, 0, 0));
  assert.throws(() => api.superellipseAt(1, 1, 101, 0));
});
test('type contract', () => {
  assert.throws(() => api.superellipseAt('2', 3, 2, 0));
});
