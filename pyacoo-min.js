Function.prototype.method=function(name,func){this.prototype[name]=func;return this;};Number.method('integer',function(){return Math[this<0?'ceiling':'floor'](this);});String.method('trim',function(){return this.replace(/^\s+|\s+$/g,'');});String.method('left',function(n){if(n<=0){return"";}else if(n>String(this).length){return this;}else{return String(this).substring(0,n);}});String.method('right',function(n){if(n<=0){return"";}else if(n>String(this).length){return this;}else{var iLen=String(this).length;return String(this).substring(iLen,iLen-n);}});String.method('reverse',function(){splitext=this.split("");revertext=splitext.reverse();reversed=revertext.join("");return reversed;});String.method('capitalize',function(){return this.charAt(0).toUpperCase()+this.slice(1);});String.method('repeat',function(num){return new Array(parseInt(num,10)+1).join(this);});String.method('center',function(width,fillchar){if(width===undefined||width<=this.length){return this;}
if(fillchar===undefined){fillchar=' ';}
width=width-this.length;return fillchar.repeat(width-parseInt(width/2,10))+this+fillchar.repeat(parseInt(width/2,10));});String.method('count',function(sub,start,end){if(sub===undefined||sub==""){return this.length+1;}
if(start===undefined){start=0;}
if(end===undefined){end=this.length;}
var n=0;var pos=0;var str=this.slice(start,end);while(true){pos=str.indexOf(sub,pos);if(pos!=-1){n++;pos+=sub.length;}
else{break;}}
return(n);});String.method('endswith',function(suffix,start,end){if(suffix===undefined||suffix==""){return true;}
if(start===undefined){start=0;}
if(end===undefined){end=this.length;}
var str=this.slice(start,end);return str.indexOf(suffix,str.length-suffix.length)!==-1;});String.method('expandtabs',function(tabsize){if(tabsize===undefined){tabsize=8;}
return this.replace(String.fromCharCode(9),' '.repeat(tabsize));});String.method('isalnum',function(){if(this==""){return false;}
return(this.search(/[^a-zA-Z0-9]/)==-1);});String.method('find',function(sub,start,end){if(start===undefined){start=0;}
if(end===undefined){end=this.length;}
var str=this.slice(start,end);return str.search(sub);});