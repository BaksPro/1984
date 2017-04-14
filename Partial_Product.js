module.exports = function(...array) {
    var new_Array = [];

    var n1 = array

    for( var i = 0; i < array.length; i++ ) {
        if(  i === 0) {
            new_Array.push(array[0])
        } else {
            new_Array.push(new_Array[i - 1] * n1[i]);
        }    
        
    }

    return console.log(new_Array);
}




