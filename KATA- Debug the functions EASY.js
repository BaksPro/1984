function multi(arr) {
  let multiplication = 1;
      arr.forEach( (value) => {
      return multiplication *= value;
       })
  return multiplication;
}

function add(arr) {
  let sumAdd = 0;
      arr.forEach( (value) => {
      return sumAdd += value;
       })
  return sumAdd;
}


function reverse(...str) {
 return str[0].split("").reverse().join("");
}
