

function printNumbersInterval( _interval = 100, _clearInterval = 2000) {
  let i = 1;
  let showI = setInterval(() => console.log(i++), _interval);
  setTimeout( () => clearInterval(showI), _clearInterval);
}

printNumbersInterval();
