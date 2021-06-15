import { loadRemoteEntry } from '@angular-architects/module-federation';

// fetch('https://my-registry/api/mf')

loadRemoteEntry('http://localhost:3000/remoteEntry.js', 'mfe1')
	.then(_ => import('./bootstrap'))
	.catch(err => console.error(err));
