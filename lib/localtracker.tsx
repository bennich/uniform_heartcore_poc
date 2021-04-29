
// import { Tracker } from '@uniformdev/optimize-tracker-common';
// import { DeliveryAPIResult } from '@uniformdev/optimize-common';
// import { createDefaultTracker } from '@uniformdev/optimize-tracker-browser';
// import intentManifest from './intentManifest.json'
// import { NextPageContext } from 'next';

// export const createLocalTracker = (ctx?: NextPageContext): Tracker =>
//   createDefaultTracker({
//     intentManifest: intentManifest as DeliveryAPIResult,

//   });

// export const localTracker = createLocalTracker();

import { createDefaultTracker } from '@uniformdev/optimize-tracker-browser';
import intentManifest from './intentManifest.json';

const localTracker = createDefaultTracker({
  intentManifest,
});

export default localTracker;