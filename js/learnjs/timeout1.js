

function printNumbersInterval( _interval = 100) {
    let i = 1;
    let showI = setTimeout(() =>{
      console.log(i++);
   },_interval)

   if ( i < 20) {
     showI();
   }

}

printNumbersInterval();
