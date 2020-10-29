const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  /*constructor() {
    this.calculateDepth=this.calculateDepth.bind(this);
  }*/
    
    calculateDepth(arr) {
      var self=this;
    if(Array.isArray(arr)) {
        return 1+arr.reduce(function(prev, next){
          return Math.max(prev, self.calculateDepth(next))
        },0)
      } else 
      return 0;
    }
  }
  //let mem=arr.slice();
  /*let i=1;
   arr.reduce(function(acc, val) { 
    if(Array.isArray(val)) {
    i++;
    acc.concat(calculateDepth(val));
  } else 
  acc.concat(val)}, []);
  return i ;
 }
}
//throw new CustomError('Not implemented');
    /*if(Array.isArray(arr)==false) {
      return false;
    }*/
    
    /*
    let check=arr.flat(Infinity);
    let checktext=check.join("");
    while(checktext!=(mem.join(""))) {
      i++;
      mem=mem.flat(1);
    }
    return i;

  */