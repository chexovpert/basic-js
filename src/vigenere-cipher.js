const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(orig, code) {
    let mem=orig.replace(/\s/g, '').toUpperCase();
    let check="";
    let output="";
    console.log(mem);
    console.log(mem.length);
    console.log(code.length);
    console.log(code[1]);
    let ccode=code/*.replace(/\s/g, '')*/.toUpperCase().split("")
    console.log(ccode)
    if (code.length<mem.length) {
      for(let i=0; i<mem.length; i++) {
        let index=i % ccode.length;
        console.log(index)
        check=check+ccode[index];
      }
      check=check.toUpperCase();
      console.log(check);
      for(let i=0; i<mem.length; i++) {
        console.log(check[i]);
        console.log(mem[i]);
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
      return output
    }
  }    
  decrypt(orig, code) {
    let mem=orig.replace(/\s/g, '').toUpperCase();
    let check="";
    let output="";
    console.log(mem);
    console.log(mem.length);
    console.log(code.length);
    console.log(code[1]);
    let ccode=code/*.replace(/\s/g, '')*/.toUpperCase().split("")
    console.log(ccode)
    if (code.length<mem.length) {
      for(let i=0; i<mem.length; i++) {
        let index=i % ccode.length;
        console.log(index)
        check=check+ccode[index];
      }
      check=check.toUpperCase();
      console.log(check);
      for(let i=0; i<mem.length; i++) {
        console.log(check[i]);
        console.log(mem[i]);
        if (mem[i].charCodeAt()<65||mem[i].charCodeAt()>90) {
          output+=mem[i];
          continue;
        }
        var letter=""
        /*if(check[i].charCodeAt>=mem[i].charCodeAt(0)) {
        letter=String.fromCharCode(check[i].charCodeAt(0)-mem[i].charCodeAt(0)+65);}
        else {*/
          letter=String.fromCharCode((((mem[i].charCodeAt(0)-65+26)-check[i].charCodeAt(0)-65))%(26)+65);
        //}
        output=output+letter;
      }
      return output
    }
  }
}

module.exports = VigenereCipheringMachine;
