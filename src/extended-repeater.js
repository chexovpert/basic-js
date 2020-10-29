const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  let output = '';
  let sem = '';
  let ad = '';
  let separ = '';
  let addsepar = '';
  let addrt = 0;
  let rt = options.repeatTimes;
  var i = 0;
    if (options.repeatTimes == 1 && !('addition' in options)) { return str } else {
        if ('addition' in options) {
            add = options.addition;
            if ('additionSeparator' in options) {
                if ('additionRepeatTimes' in options) {
                    addrt = options.additionRepeatTimes
                } else { addrt = 0 };
                addsepar = options.additionSeparator
            } else { addsepar = '|' };
            ad = add;
            for (i = 0; i < addrt - 1; i++) {
                ad = ad + addsepar + add;
            }
        } else {
            ad = '';
            add = '';
            addsepar = '';
            addrt = 0
        };
        if ('separator' in options) {
            separ = options.separator
        } else { separ = '+' };
        if ('addition' in options) {
            sem = str + ad;
        } else { sem = str }
        output = sem;
        for (i = 0; i < rt - 1; i++) {
            output = output + separ + sem;
        }
        return output
    }
};
  