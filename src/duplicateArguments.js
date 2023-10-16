function duplicateArguments(...args) {
  const alreadyInArray = [];
  for (let i = 0; i < args.length; i++) {
    if (!alreadyInArray.includes(args[i])) {
      alreadyInArray.push(args[i]);
    } else {
      return true;
    }
  }
  return false;
}

module.exports = duplicateArguments;
