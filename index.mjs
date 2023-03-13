export function capitalize(word){
  console.info('==> myModule: esm-commonjs ESM');
  return word.charAt(0).toUpperCase() + word.substr(1, word.length - 1).toLowerCase();
}