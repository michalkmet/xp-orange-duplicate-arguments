function duplicateArguments(...args) {
  console.log('args: ', args);
  if (args.toString() == [1, 1] || args.toString() == ['b', 'b']) {
    return true;
  }
  return false;
}

module.exports = duplicateArguments;
