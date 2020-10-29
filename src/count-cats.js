const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  //throw new CustomError('Not implemented');
  let i=0
  matrix.forEach(element => {
    element.forEach(ele => {
      if (ele==="^^") {
        i++
      }
    })
  });
  return i
};
