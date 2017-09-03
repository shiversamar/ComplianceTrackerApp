// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBtrDp46R4DqHUNV5vNm4ukIRI-zsMEeWc',
    authDomain: 'requirement-tracker.firebaseapp.com',
    databaseURL: 'https://requirement-tracker.firebaseio.com',
    projectId: 'requirement-tracker',
    storageBucket: 'requirement-tracker.appspot.com',
    messagingSenderId: '203160517316'
  }
};
