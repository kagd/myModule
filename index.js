export function capitalize(word){
  console.info('==> myModule: esm module');
  return word.charAt(0).toUpperCase() + word.substr(1, word.length - 1).toLowerCase();
}