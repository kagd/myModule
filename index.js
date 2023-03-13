function capitalize(word){
  console.info('==> myModule: npm-link');
  return word.charAt(0).toUpperCase() + word.substr(1, word.length - 1).toLowerCase();
}

module.exports = {
  capitalize: capitalize
}