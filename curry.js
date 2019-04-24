// 第一个版本，只能在使用curry时传参，或第二次传参
// function curry(fn){
//     var args = Array.prototype.slice.call(arguments,1);
//     return function(){
//         var newArgs = args.concat(Array.prototype.slice.call(arguments));
//         return fn.apply(null,newArgs);
//     }
// }

// function add(a,b,c,d){
//     return a+b+c+d;
// }

// var addCu = curry(add,1,2);
// console.log(addCu(3,4));

//第二个版本 只能传指定位数的参数，按照function的参数个数而定
// function curry(fn,args){
//     var arg = args || [],length = fn.length;
//     return function(){
//         var newArgs = arg.concat(Array.prototype.slice.call(arguments));
//         if(newArgs.length<length){
//             return curry.call(null,fn,newArgs);
//         }else{
//             return fn.apply(null,newArgs);
//         }
//     }
// }

// function add(a,b,c,d){
//     return a+b+c+d;
// }

// var addCu = curry(add);
// console.log(addCu(1)(2)(3)(4));
// console.log(addCu(1,2,3)(4));

//最终实现
function addCu(){
    //用args数组存储所有参数
    var args = Array.prototype.slice.call(arguments);
    var fn = function(){
        //newArgs：args与当前参数数组
        var newArgs = args.concat(Array.prototype.slice.call(arguments));
        //更新下面这个函数中的args
        return addCu.apply(null,newArgs);
    }
    // fn作为返回值输出时，隐式进行toString()转换
    fn.toString = function(){
        return args.reduce(function(a,b){
            return a+b;
        })
    }
    return fn;
}

// console.log(addCu(1)(2)(3)(4));

var arr = ['1-1','1-2','1-1'];
var newArr = [...new Set(arr)];
console.log(newArr);
