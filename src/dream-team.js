const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  //throw new CustomError('Not implemented');
  mem=[];
  if (Array.isArray(members)==false) {
    return false;
  }
  members.forEach(element => {
    
    if (typeof element =="string") {
      str=element.trim();
      mem.push(str[0].toUpperCase())
    }
  });
  return mem.sort().join("")
};
