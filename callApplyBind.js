// //call
// Function.prototype.myCall = function(context){
//     if(!context){
//         context = typeof window === 'undefined' ? global : window;
//     }
//     context.fn = this;
//     let rest = [...arguments].slice(1);
//     let result = context.fn(...rest);
//     delete context.fn;
//     return result;
// }

// var foo = {name:'wenxiaowen'};
// var name = 'wxw';
// function bar(job, age){
//     console.log(this.name);
//     console.log(job,age);
// }
// bar.myCall(foo,'programmer',20);
// bar.myCall(null,'teacher',25);

// //apply
// Function.prototype.myApply = function(context, rest){
//     if(!context){
//         context = typeof window === 'undefined' ? global : window;
//     }
//     context.fn = this;
//     let result;
//     if(rest === undefined || rest === null){
//         result = context.fn(rest);
//     }else if(typeof rest === 'object'){
//         result = context.fn(...rest);
//     }
//     delete context.fn;
//     return result;
// }

// var foo = {
//     name: 'wenxiaowen'
// }
// var name = 'wxw';
// function bar(job, age) {
//     console.log(this.name);
//     console.log(job, age);
// }
// bar.myApply(foo, ['programmer', 20]);
// bar.myApply(null, ['teacher', 25]);

//bind
Function.prototype.myBind = Function.prototype.myBind || function(oThis) {
    var aArgs = Array.prototype.slice.call(arguments,1),
        //由于bind是原型方法,fToBind指调用bind的函数对象
        fToBind = this,
        //用一个中间函数作为中转，修改bound.prototype不会影响this.prototype。
        F = function(){},
        fBound = function(){
            //fBound若作为构造函数，则this就是fBound构造出来的对象
            //构造函数中有return，若return的是标量，则忽略，return的是对象，则覆盖构造的实例
            //构造函数时 this instanceof F为true
            return fToBind.apply(this instanceof F ? this : oThis || this,aArgs.concat(Array.prototype.slice.call(arguments)))
        };

    F.prototype = fToBind.prototype;
    fBound.prototype = new F();

    return fBound;
}

var name = 'wenxiaowen';
function person(age, job, gender){
    console.log(this.name , age, job, gender);
}
var Yve = {name : 'wxw'};
let result = person.myBind(Yve, 22, 'programmer');

let test = new result('female');
