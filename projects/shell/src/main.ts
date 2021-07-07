import { loadRemoteEntry } from '@angular-architects/module-federation';

console.log('main!');

loadRemoteEntry('http://localhost:3000/remoteEntry.js', 'mfe1')
	.catch(err => console.error(err))	
	.then(_ => import('./bootstrap'))
	.catch(err => console.error(err));



// import('./bootstrap')
// 	.catch(err => console.error(err));
