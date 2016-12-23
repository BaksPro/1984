function sumArg(...arg){
     var sum  = 0;
    [...arg].forEach((item) => sum +=  item);
      return sum;
}

console.log(sumArg(10,5));
