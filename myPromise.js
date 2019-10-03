// 版本1
// function myPromise(constructor){

//     let self = this;
//     self.status = "pending";
//     self.value = undefined;
//     self.reason = undefined;
    
//     function resolve(value){
//         if(self.status === "pending"){
//             self.value = value;
//             self.status = "resolved";
//         }
//     }

//     function reject(reason){
//         if(self.status === "pending"){
//             self.reason = reason;
//             self.status = "rejected";
//         }
//     }

//     try{
//         constructor(resolve,reject);
//     }catch(e){
//         reject(e);
//     }
// }

// myPromise.prototype.then = function(onFullfilled, onRejected){

//     let self = this;

//     switch(self.status){
//         case "resolved":
//             onFullfilled(self.value);
//             break;
//         case "rejected":
//             onRejected(self.reason);
//             break;
//         default:
//     }
// }

// var p=new myPromise(function(resolve,reject){resolve(1)});
// p.then(function(x){console.log(x)}) //输出1


// // 版本2 基于观察模式实现
// function myPromise(constructor){

//     let self = this;

//     self.status = "pending";
//     self.value = undefined;
//     self.reason = undefined;
//     self.onFullfilledArray = [];
//     self.onRejectedArray = [];

//     function resolve(value){
//         if(self.status === "pending"){
//             self.value = value;
//             self.status = "resolved";
//             self.onFullfilledArray.forEach(function(f){
//                 f(self.value);
//             })
//         }
//     }

//     function reject(reason){
//         if(self.status === "pending"){
//             self.reason = reason;
//             self.status = "rejected";
//             self.onRejectedArray.forEach(function(f){
//                 f(self.reason);
//             })
//         }
//     }
    
//     try{
//         constructor(resolve,reject);
//     }catch(e){
//         reject(e);
//     }
// }

// myPromise.prototype.then = function(onFullfilled, onRejected){

//     let self = this;

//     switch(self.status){
//         case "pending":
//             self.onFullfilledArray.push(function(){
//                 onFullfilled(self.value);
//             });
//             self.onRejectedArray.push(function(){
//                 onRejected(self.reason);
//             });
//             break;

//         case "resolved":
//             onFullfilled(self.value);
//             break;
        
//         case "rejected":
//             onRejected(self.reason);
//             break;
        
//         default:
//     }
// }

// var p=new myPromise(function(resolve,reject){setTimeout(function(){resolve(1)},1000)});
// p.then(function(x){console.log(x)})


// 版本3 then 方法链式调用
function myPromise(constructor){

    let self = this;

    self.status = "pending";
    self.value = undefined;
    self.reason = undefined;
    self.onFullfilledArray = [];
    self.onRejectedArray = [];

    function resolve(value){
        if(self.status === "pending"){
            self.value = value;
            self.status = "resolved";
            self.onFullfilledArray.forEach(function(f){
                f(self.value);
            })
        }
    }

    function reject(reason){
        if(self.status === "pending"){
            self.reason = reason;
            self.status = "rejected";
            self.onRejectedArray.forEach(function(f){
                f(self.reason);
            })
        }
    }
    
    try{
        constructor(resolve,reject);
    }catch(e){
        reject(e);
    }
}

myPromise.prototype.then = function(onFullfilled, onRejected){
    let self = this, promise2;

    switch(self.status){
        case "pending":
            promise2 = new myPromise(function(resolve,reject){
                self.onFullfilledArray.push(function(){
                    try{
                        let temple = onFullfilled(self.value);
                        resolve(temple);
                    }catch(e){
                        reject(e);
                    }
                });
                self.onRejectedArray.push(function(){
                    try{
                        let temple = onRejected(self.reason);
                        reject(temple);
                    }catch(e){
                        reject(e);
                    }
                });
            })
            break;
            
        case "resolved":
            promise2 = new myPromise(function(resolve,reject){
                try{
                    let temple = onFullfilled(self.value);
                    resolve(temple);
                }catch(e){
                    reject(e);
                }
            })
            break;

        case "rejected":
            promise2 = new myPromise(function(resolve,reject){
                try{
                    let temple = onRejected(self.reason);
                    resolve(temple);
                }catch(e){
                    reject(e);
                }
            })
            break;

        default:
    }

    return promise2;
}

var p = new myPromise(function(resolve,reject){
    setTimeout(
        function(){
            resolve(1)
        },1000)
    }
);

p.then(function(x){
    console.log(x)
}).then(function(){
    console.log("链式调用1")
}).then(function(){
    console.log("链式调用2")
})









