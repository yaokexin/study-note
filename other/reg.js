// 参考地址： https://juejin.im/post/5e8ab4efe51d4547170a9233

// 正则学习
let str = "good good study , day day up！";
//=>学正则就是用来制定规则（是否包含数字）
let reg = /\d+/;
reg.test(str); //=>false

str = "2020-04-07";
reg.exec(str); //=>["2020",index:0,inputs:"原始字符串"]
console.log(reg.exec(str))


// 正则表达式的方式
//1.两个斜杠中间包起来的都是元字符（如果正则中要包含某个变量的值，则不能使用字面量方式创建）
let type = "xiaozhima";
reg = /^@"+type+"@$/; 
console.log(reg.test("@xiaozhima@")); //=>false
console.log(reg.test('@"""typeeeee"@')); //=>true

//2.这种情况只能使用构造函数方式（因为它传递的规则是字符串，只有这样才能进行字符串拼接）
reg = new RegExp("^@"+type+"@$");
console.log(reg.test("@xiaozhima@"));//=>true

//正则的用途
//1. 正则RegExp.prototype上的方法
// 匹配 test
// 捕获 exec
//2.字符串中的方法
// 正则RegExp.prototype上的方法
// replace
// match
// splite