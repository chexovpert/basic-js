const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  //throw new CustomError('Not implemented');
  if(typeof sampleActivity!=="string") {
    return false
  }
  if(sampleActivity==null) {
    return false
  }
  var number=parseFloat(sampleActivity);
  
  if (isNaN(number)) {
    return false
  }
  
  if (number>15||number<=0) {
    return false
  }
  return(Math.log(MODERN_ACTIVITY/Math.floor(number))/(Math.log(2)/HALF_LIFE_PERIOD))
};
