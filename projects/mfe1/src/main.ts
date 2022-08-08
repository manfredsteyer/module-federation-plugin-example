import { initFederation } from '@angular-architects/native-federation-runtime';

initFederation()
	.then(() => import('./bootstrap'))
	.catch(err => console.error(err));
