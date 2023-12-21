# Example for Native Federation 

This example makes native federation directly delegate to the application builder and the dev-server.

**Note:** This example uses a patched version of ``@angular-devkit/build-angular`` that is part of this repository (``_angular-devkit_build-angular-pr26704.tgz``). Please find the [underlying PR here](https://github.com/angular/angular-cli/pull/26704)

## Trying it out

```
git clone https://github.com/manfredsteyer/module-federation-plugin-example --branch nf-vite-beta
cd module-federation-plugin-example 
npm i
ng serve shell
ng serve mfe1
```

1. Open the shell at http://localhost:4200 
2. Click on Flights
3. The remote (``mfe1``) from http://localhost:4201 is now directly loaded into the shell

## Source Code

The used version of native federation is found here:

https://github.com/angular-architects/module-federation-plugin/tree/app-builder

**Branch:** app-builder

_Projects:_
- ``libs/native-federation-core``: Tooling-agnostic implementation of Native Federation
- ``libs/native-federation``: Integration layer for Angular
- ``libs/native-federation-runtime``: Runtime used to construct import maps when bootstrapping the apps
- ``libs/native-federation-esbuild``: Not used for Angular projects. Contains esbuild adapter to use when directly going with the core layer.

## More Details & Tutorial

https://www.npmjs.com/package/@angular-architects/native-federation

