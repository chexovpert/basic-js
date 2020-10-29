const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');
  if (typeof arr != 'object'){ 
    throw new Error 
  } 
  let mem=[]
  if(arr.length!=0){
    for (var index = 0; index < arr.length; index++) {
      if (typeof arr[index] == 'string'){
      let element=arr[index];
        switch(element) {
        case "--double-prev":
          
          if(arr[index-2]=="--discard-next"&& index-2 >= 0){
            continue
          } else if(index!=0){
          mem.push(arr[index-1]);
          continue
        }
        else {continue};
        case "--discard-prev":
          if (index!= 0) {
          if(arr[index-2]=="--discard-next"&& index-2 >= 0){
            continue
          } else
          mem.pop();
          continue;}
          else continue
        case "--double-next":
          if (index != arr.length - 1) {
            mem.push(arr[index + 1]);
            continue
        } else { continue }
        
      case "--discard-next":
        if (index != arr.length - 1) {
          index++;
          continue
      } else { continue }
      default:
        mem.push(arr[index]);
  }
  
} else {
  mem.push(arr[index])
}
} 
}
return mem;
}
