import { superellipseAt } from '@lp-labs/superellipse-curve';
if (Math.abs(superellipseAt(2, 3, 2, 0).x - 2) > 1e-10) throw new Error('Geometry');
// @ts-expect-error invalid argument must be rejected by declarations
superellipseAt('2', 3, 2, 0);
