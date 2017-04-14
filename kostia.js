module.exports = function(name) {
    var name_length = name.length ;  

        if(name[0] === name[0].toUpperCase()) {
    	    var vowels = 0;
            var vovels_array = [ "A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
    	
            for( var i = 0; i < name_length; i++) {
                if( vovels_array.includes(name[i])){
                    vowels += 1;
                }
             }
             
        return `Hello ${name}! Your name contains ${vowels} vowels and have length ${name_length}.`

     }  else  {
            return  `Hello ${name[0].toUpperCase() + name.substring(1, name_length) }! I think you should start your name from capital later.`
    }    
     
};



