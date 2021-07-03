function padString (word, number, symbol, direction = true) {
    if (typeof word !== 'string') {
      return 'error word';
    }
  
    if (typeof number !== 'number') {
      return 'error number';
    }
  
    if (typeof symbol !== 'string' && symbol.length!==1) {
      return 'error symbol';
    }
  
    if (typeof direction !== 'boolean') {
      return 'error direction';
    }
      let result="";
         if (word.length < number && direction == true) {
          result += word;
          for (let i = 0; i < number - word.length; i++) {
            result += symbol;
        }
          return result;
        }
  
        else if (word.length < number && direction == false) {
          for (let i = 0; i < number - word.length; i++) {
            result += symbol;
          }
          result += word;
          return result;
        }
  
        else {
          result = word.substr(0, number);
          return result;
        }
  }
  
  console.log(padString("hello", 6, "*", false));