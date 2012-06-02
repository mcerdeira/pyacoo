/*
   Python and other cool stuff too JavaScript library
   
   __author__ = 'mRt (martincerdeira@gmail.com)'
   __version__ = '0.01'
   __date__ = '$Date: 2012/05/30$'
   __license__ = 'GPL v3'   
      
*/

///////////////////////////////////
//
// Extends on Function
//
///////////////////////////////////

Function.prototype.method = function (name, func) {
	this.prototype[name] = func;
	return this;	
};

///////////////////////////////////
//
// Extends on String
//
///////////////////////////////////

String.method('trim', function ( ) {  // VB like
	return this.replace(/^\s+|\s+$/g, '');
});

String.method('left', function (n){ // VB like
	if (n <= 0){
		return "";
	}else if (n > String(this).length){
		return this;
	}else{
		return String(this).substring(0,n);
	}
});

String.method('right', function (n){ // VB like
	if (n <= 0){
		return "";
	}else if (n > String(this).length){
		return this;
	}else{
		var iLen = String(this).length;
		return String(this).substring(iLen, iLen - n);
	}
});

String.method('reverse', function(){ // Just cool
	splitext = this.split("");
	revertext = splitext.reverse();
	reversed = revertext.join("");
	return reversed;
});

String.method('capitalize', function(){ // Pythonic
    return this.charAt(0).toUpperCase() + this.slice(1);
});

String.method('repeat', function(num){ // Just cool 
    return new Array(parseInt(num,10) + 1).join(this); 
}); 

String.method('center', function(width, fillchar){ // Pythonic
	if(width === undefined || width <= this.length){
		return this;
	}		
	if(fillchar === undefined){
		fillchar = ' ';
	}
	width = width - this.length;
	return fillchar.repeat(width - parseInt(width/2,10)) + this + fillchar.repeat(parseInt(width/2,10)) ;	
});

String.method('count', function(sub, start, end){
	if(sub === undefined || sub == ""){
		return this.length + 1;
	}
	if(start === undefined){
		start = 0;
	}
	if(end === undefined){
		end = this.length; 
	}			
	var n = 0; 
	var pos = 0; 
	var str = this.slice(start, end);	
	while(true){ 
		pos=str.indexOf(sub,pos); 
		if(pos!=-1){ n++; pos+=sub.length;} 
		else{break;} 
	} 
	return(n); 	
});


/*
'decode', 'encode', 'endswith', 'expandtabs', 'find', 'format', 'index', 'isalnum', 
'isalpha', 'isdigit', 'islower', 'isspace', 'istitle', 'isupper',
'join', 'ljust', 'lower', 'lstrip', 'partition', 'replace', 'rfind', 'rindex', 'rjust', 
'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill'
*/



