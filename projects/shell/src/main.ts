// import { initFederation } from '@angular-architects/native-federation';

import { initFederation } from '@softarc/native-federation-runtime';

initFederation('/assets/federation.manifest.json')
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error('err', err));
