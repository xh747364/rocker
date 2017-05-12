//IO:磁盘的文件系统挥着数据库的写入和读出.
//阻塞代码
var fs=require('fs');

var data=fs.readFileSync('result.txt');
//
//   这里有一段时间是等待的过程。
console.log(data.toString());

console.log("程序执行完毕")


//非阻塞代码
var fs=require('fs');
   fs.readFile('result.txt',function(err,data){
   	if(err) return console.log(err);
   	console.log(data.toString());
   })
   console.log("程序执行完毕");
