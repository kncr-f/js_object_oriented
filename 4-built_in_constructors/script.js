//string
var str1='fatih';
var str2=new String('fatih');

console.log(str1);
console.log(typeof str1);
console.log(str2);
console.log(typeof str2);
if(str2==='fatih'){
    console.log('yes');
}else{
    console.log('no');
}

String.prototype.repaet = function(n){
    return new Array(n+1).join(this)
}
console.log('fatih'.repeat(4))
//number

var num1=10;
var num2=new Number(10);

//Boolean
var bool1=true;
var bool2=new Boolean(true);

//object
var obj1={
    name:'fatih'
}

var obj2=new Object({
    name:'fatih'
});


//array
var arr1=['fatih','zels','ela','selim'];
var arr2=new Array('fatih','zels','ela','selim');

Array.prototype.remove =Array.prototype.remove ||  function(member){
    var index=this.indexOf(member);

    if(index>-1){
        this.splice(index,1);
    }
    return this;
}

console.log(arr1.remove('fatih'));