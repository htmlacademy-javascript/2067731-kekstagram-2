const checksLengthString=(string='',maxLength=1)=>string.length<=maxLength;

console.log(checksLengthString('проверяемая строка', 20));
console.log(checksLengthString('проверяемая строка', 18));
console.log(checksLengthString('проверяемая строка', 10));

const isPolindrome=(string='')=>{
  string=string.replaceAll(' ','').toUpperCase();
  let newLine='';
  for (let i=string.length-1;i>=0;i--){
    newLine+=string[i];
  }
  return string===newLine;
};

console.log(isPolindrome('топот'));
console.log(isPolindrome('ДовОд'));
console.log(isPolindrome('Кекс'));
console.log(isPolindrome('Лёша на полке клопа нашёл '));

