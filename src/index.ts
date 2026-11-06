function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
function length(v: number): void {
  finite(v, 1e-9, 1e9);
}
export function superellipseAt(
  a: number,
  b: number,
  exponent: number,
  angle: number,
): { x: number; y: number } {
  length(a);
  length(b);
  finite(exponent, 0.1, 100);
  finite(angle, -1e6, 1e6);
  const c = Math.cos(angle),
    s = Math.sin(angle);
  return {
    x: a * Math.sign(c) * Math.abs(c) ** (2 / exponent),
    y: b * Math.sign(s) * Math.abs(s) ** (2 / exponent),
  };
}
