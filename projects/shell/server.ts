import { loadManifest } from '@angular-architects/module-federation';

var url = '';
if (typeof window === 'undefined') {
  url = "http://localhost:5000/assets/mf.manifest.json"
}
else {
  url = "http://localhost:5000/assets/mf.manifest.ssr.json"

}
loadManifest(url)
  .catch(err => console.error(err))
  .then(_ => import('./_server'))
  .catch(err => console.error(err));