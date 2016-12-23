function applyAll(...arg){
  let func = arg[0]
  let argument = arg.slice(1);

     return func.apply(applyAll,argument);
 }
  console.log( applyAll(Math.max, 2, 11, 3) );
