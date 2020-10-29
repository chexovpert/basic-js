const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(reverse) {
    this.reverse = reverse;
  }


  encrypt(orig, code) {
    if (orig==null&&code==null) {
      throw new Error
    }
    let mem=orig./*replace(/\s/g, '').*/toUpperCase();
    let check="";
    let output="";
    
   // console.log(mem);
    //console.log(mem.length);
   // console.log(code.length);
   // console.log(code[1]);
   // console.log(mem[6]);
    let ccode=code/*.replace(/\s/g, '')*/.toUpperCase().split("")
   // console.log(ccode)
    if (ccode.length>mem.length) {
      ccode=ccode.slice(0, mem.length);
      //console.log(ccode);
    }
    if (ccode.length<=mem.length) {
      let k=0;
      for(let i=0; i<mem.length; i++) {
        let index=(i+k) % ccode.length;
        //console.log(mem[i]);
        if(mem[i].charCodeAt()<65||mem[i].charCodeAt()>90){
          k--;
          check=check+mem[i];
          continue;
        }
        check=check+ccode[index];
      }
      check=check.toUpperCase();
      //console.log(check);
      for(let i=0; i<mem.length; i++) {
        //console.log(check[i]);
        //console.log(mem[i]);
        if (mem[i].charCodeAt()<65||mem[i].charCodeAt()>90) {
          output+=mem[i];
          continue;
        }
        var letter=""
        /*if(check[i].charCodeAt>=mem[i].charCodeAt(0)) {
        letter=String.fromCharCode(check[i].charCodeAt(0)-mem[i].charCodeAt(0)+65);}
        else {*/
          letter=String.fromCharCode(((mem[i].charCodeAt(0)-65+check[i].charCodeAt(0)-65))%(26)+65);
        //}
        output=output+letter;
      }
      if (this.reverse!=false)
      return output
      else {
        return output.split("").reverse().join("")
      }
    }
  }    
  decrypt(orig, code) {
    if (orig==null&&code==null) {
      throw new Error
    }
    let mem=orig/*.replace(/\s/g, '')*/.toUpperCase();
    let check="";
    let output="";
    // console.log(mem);
    // console.log(mem.length);
    // console.log(code.length);
    // console.log(code[1]);
    let ccode=code/*.replace(/\s/g, '')*/.toUpperCase().split("")
    //console.log(ccode)
    if (ccode.length>mem.length) {
      ccode=ccode.slice(0, mem.length);
      //console.log(ccode);
    }
    if (ccode.length<=mem.length) {
      let k=0;
      for(let i=0; i<mem.length; i++) {
        let index=(i+k) % ccode.length;
        //console.log(mem[i]);
        if(mem[i].charCodeAt()<65||mem[i].charCodeAt()>90){
          k--;
          check=check+mem[i];
          continue;
        }
        check=check+ccode[index];
      }
      check=check.toUpperCase();
     // console.log(check);
      for(let i=0; i<mem.length; i++) {
        //console.log(check[i]);
       // console.log(mem[i]);
        if (mem[i].charCodeAt()<65||mem[i].charCodeAt()>90) {
          output+=mem[i];
          continue;
        }
        var letter=""
        /*if(check[i].charCodeAt>=mem[i].charCodeAt(0)) {
        letter=String.fromCharCode(check[i].charCodeAt(0)-mem[i].charCodeAt(0)+65);}
        else {*/
          letter=String.fromCharCode((((mem[i].charCodeAt(0)-65)-(check[i].charCodeAt(0)-65))+26)%(26)+65);
        //}
        output=output+letter;
      }
      if (this.reverse!=false)
      return output
      else {
        return output.split("").reverse().join("")
      }
    }
  }
}

module.exports = VigenereCipheringMachine;