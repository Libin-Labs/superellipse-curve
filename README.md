# @lp-labs/superellipse-curve

Signed-power superellipse coordinate parameterization.

Original, standalone MIT TypeScript implementation with **zero runtime or peer dependencies**. ESM/CommonJS exports and separate declarations; Node18+ and compatible ES2022 browsers. No service, filesystem, network, clock or browser globals accessed on import. Compiler/formatter dependencies are development-only.

## Install

```sh
npm install @lp-labs/superellipse-curve
```

## Working example

```js
import { superellipseAt } from '@lp-labs/superellipse-curve';
if (Math.abs(superellipseAt(2, 3, 2, 0).x - 2) > 1e-10) throw new Error('Geometry');
```

CommonJS: `const api = require('@lp-labs/superellipse-curve')`.

## Behavior, customization and limits

superellipseAt(a,b,exponent,angle) returns x=a*sign(cos t)*abs(cos t)^(2/n),y analogous sine. a/b[1e-9,1e9],exponent[0.1,100],angle[-1e6,1e6]radians. exponent2 ellipse,1 diamond; trig axes retain floating rounding. No exact area,perimeter,derivative or mesh topology. Matching caller units; pure ideal geometry,not CAD topology,structural engineering,manufacturing tolerances or safety guidance. Constant time,unless specified; fresh objects and no mutation.

Use the explicit function arguments and public types below to customize the documented behavior. There are no hidden environment settings or sibling-library requirements. Array inputs must be dense; sparse entries are invalid. Inputs are validated before a successful result is returned. Outputs do not mutate caller-owned inputs. Hostile proxies/getters and concurrent mutation are outside the contract.

## Errors and integration

Invalid data never produces an empty success-shaped substitute. TypeError reports incompatible runtime types/nonfinite numbers; RangeError reports unsupported ranges, invalid syntax, inconsistent states and exceeded budgets. Functions that explicitly return null, false or empty arrays describe those legitimate outcomes above. Errors propagate to callers; UI applications should catch at their boundary and visibly notify users. Numerical calculations use JavaScript IEEE754 unless the API explicitly uses bigint; compare approximate numerical results with application-appropriate tolerances.

## Complete public API

```ts
export declare function superellipseAt(
  a: number,
  b: number,
  exponent: number,
  angle: number,
): {
  x: number;
  y: number;
};
```

## Performance and portability

Complexity and resource ceilings are specified above. Buffered synchronous algorithms do not create workers or timers; callers can move expensive work to their own worker. Limits are enforced, not silently truncated. No runtime imports from any other library. No compatibility or completeness claims beyond the stated scope.

## Support

If this library is useful to you, consider supporting its maintenance with a [donation via PayPal](https://www.paypal.me/LibinPrasanth).

## Author

Created by [Libin Prasanth](https://www.linkedin.com/in/libinprasanth/). Connect on LinkedIn for updates and discussion.
