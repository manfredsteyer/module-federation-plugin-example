declare const __karma__: any;

// Override loaded because it'll set start function as unimplemented
__karma__.loaded = () => {};

import('./test.bootstrap')
  .catch(err => 'Failed to bootstrap tests: ' + err);
