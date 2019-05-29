// //版本1.0 无法处理异步
// function myPromise(constructor) {
//     let self = this;
//     self.status = "pending";
//     self.value = undefined;
//     self.reason = undefined;
//     function resolve(value) {
//         if (self.status === "pending") {
//             self.value = value;
//             self.status = "resolved";
//         }
//     }
//     function reject(reason) {
//         if (self.status === "pending") {
//             self.reason = reason;
//             self.status = "rejected";
//         }
//     }
//     try {
//         //将参数赋值为内部定义好的resolve和reject函数
//         constructor(resolve, reject);
//     } catch (e) {
//         reject(e);
//     }
// }
// myPromise.prototype.then = function (onFullfilled, onRejected) {
//     let self = this;
//     switch (self.status) {
//         case "resolved":
//             onFullfilled(self.value);
//             break;
//         case "rejected":
//             onRejected(self.reason);
//             break;
//         default:
//     }
// }
// var p = new myPromise(function (resolve, reject) { resolve(1); });
// p.then(function (x) { console.log(x) });

//版本2.0 异步处理
function myPromise(constructor) {
    let self = this;
    self.status = "pending";
    self.value = undefined;
    self.reason = undefined;
    self.onFullFilledArray = [];
    self.onRejectedArray = [];
    function resolve(value) {
        if (self.status === "pending") {
            self.value = value;
            self.status = "resolved";
            self.onFullFilledArray.forEach(function (f) {
                f(self.value);
                //如果状态从pending并未resolved
                //遍历执行里面的异步方法
            })
        }
    }
    function reject(reason) {
        if (self.status === "pending") {
            self.reason = reason;
            self.status = "rejected";
            self.onFullFilledArray.forEach(function (f) {
                f(self.reason);
                //如果状态从pending变为rejected 
                //那么就遍历执行里面的异步方法
            })
        }
    }
    try {
        //将参数赋值为内部定义好的resolve和reject函数
        constructor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}
myPromise.prototype.then = function (onFullfilled, onRejected) {
    let self = this;
    switch (self.status) {
        case "pending":
            self.onFullFilledArray.push(function (value) {
                onFullfilled(value);
            });
            self.onRejectedArray.push(function (reason) {
                onRejected(reason);
            });
        case "resolved":
            onFullfilled(self.reason);
            break;
        case "rejected":
            onRejected(self.reason);
            break;
        default:
    }
}
var p = new myPromise(function (resolve, reject) { setTimeout(function () { resolve(1) }, 1000) });
p.then(function (x) { console.log(x) });