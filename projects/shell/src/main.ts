import { loadRemoteEntry } from '@angular-architects/module-federation/src/utils/dynamic-federation';

Promise.all([
    loadRemoteEntry('http://localhost:3000/remoteEntry.js', 'mfe1')
])
.then(() => import('./bootstrap'));
