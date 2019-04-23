//最小零钱问题
var coins = [1,3,5];
function getMinCoinNum(sum, coins){
    var minNumber = [];
    minNumber[0] = 0;
    for(var i=1;i<=sum;i++){
        minNumber[i]=Number.MAX_VALUE;
        for(var j=0;j<coins.length;j++){
            if(coins[j]<=i && minNumber[i-coins[j]]+1<minNumber[i]){
                minNumber[i] = minNumber[i-coins[j]]+1;
            }
        }
    }
    return minNumber[sum];
}

// console.log(getMinCoinNum(10,coins));