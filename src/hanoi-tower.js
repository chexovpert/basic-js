const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
 // throw new CustomError('Not implemented');

  let anwser={}
  anwser['turns']=Math.pow(2, disksNumber)-1;
  anwser['seconds']=Math.floor((Math.pow(2, disksNumber)-1)*(3600/turnsSpeed))
  return anwser;
};
