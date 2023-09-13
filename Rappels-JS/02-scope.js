'use strict';

// Dans Node 2 cas possible si une variable ou une fonction
// est définie à la racine du fichier
// soit une closure
// soit un module

globalThis.globalScope = 'globalScope';
const fileScope = 'fileScope';

function externe() {
  const closureScope = 'closureScope';

  function interne() {
    const localScope = 'localScope';
    // eslint-disable-next-line no-constant-condition
    if (true) {
      const blockScope = 'blockScope';
      console.log(blockScope);
      console.log(localScope);
      console.log(closureScope);
      console.log(fileScope);
      console.log(globalThis.globalScope);
    }
  }
  interne();
}
externe();
