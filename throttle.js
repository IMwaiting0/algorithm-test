function throttle(fn,gapTime){
    let lastTime = null;
    return function(){
        let nowTime = new Date();
        if(nowTime - lastTime > gapTime){
            fn();
            lastTime = nowTime;
        }
    }
}

function debounce(fn,gapTime){
    let timer = null;
    return function(){
        let context = this;
        let args = arguments;
        timer = setTimeout(function(){
            fn.apply(context,args);
        },gapTime);
        if(timer){
            clearTimeout(timer);
            timer = null;
        }
    }
}