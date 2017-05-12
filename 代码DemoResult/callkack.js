//function feicui1 (a){
//	console.log(a)
//};
//
//function feicui2(a,b){
//	b+="good";
//	a(b)
//};
//feicui2(feicui1,'feicui');


var c=0;
function printIt(){
	console.log(c)
};
function plus(callback){
	setTimeout(function(){
		c+=1;
		callback()
	},0)
	printIt();
	
};

plus(printIt); //0  1

