// // 0-1背包问题
// const ITEMN = 3;
// const BAGC = 16;//背包容量
// const WEIGHT = [10,8,5];//每个物品的重量
// const VALUE = [5,4,1];//每个物品的价值
// const ITEMX = [0,0,0];//ITEMX[i]=1代表物品放入背包，0代表不放入

// var curWeight = 0;//当前放入背包的物品总重量
// var curValue = 0;//当前放入背包的物品总价值

// var bestValue = 0;//价值最优值
// var bestX = [];//最优解

// //t = 0 to ITEMN-1
// function backTrack(t){
//     if(t>ITEMN-1){
//         if(curValue>bestValue){
//             bestValue = curValue;
//             for(var i=0;i<ITEMN;i++){
//                 bestX[i]=ITEMX[i];
//             }
//         }
//     }else{
//         for(var i=0;i<=1;i++){
//             ITEMX[t]=i;
//             if(i==0){
//                 backTrack(t+1);
//             }
//             else{
//                 if(curWeight+WEIGHT[t]<=BAGC){
//                     curWeight += WEIGHT[t];
//                     curValue += VALUE[t];
//                     backTrack(t+1);
//                     curWeight -= WEIGHT[t];
//                     curValue -= VALUE[t];
//                 }
//             }
//         }
//     }
// }

// backTrack(0);
// console.log(bestValue,JSON.stringify(bestX));
//以上是背包问题


// //旅行售货员问题
// const CITYGRAPH = new Array([0,30,6,4],[30,0,5,10],[6,5,0,20],[4,10,20,0]);//城市间边权重二维数组 CITYGRAPH[i][j]代表城市i到j的路径长度
// const CITYSIZE = 4;

// var cityX = [0,1,2,3];//当前顺序
// var bestX = [0,1,2,3];//最佳顺序
// var bestLength = Infinity;
// var curLength = 0;

// function travel(t){
//     if(t == CITYSIZE-1){
//         if(CITYGRAPH[cityX[t-1]][cityX[t]]!=Infinity && CITYGRAPH[cityX[t]][0] != Infinity && (curLength + CITYGRAPH[cityX[t-1]][cityX[t]] + CITYGRAPH[cityX[t]][0]<bestLength || bestLength==Infinity)){
//             for(var i=0;i<CITYSIZE;i++){
//                 bestX[i] = cityX[i];
//             }
//             bestLength = curLength + CITYGRAPH[cityX[t-1]][cityX[t]] + CITYGRAPH[cityX[t]][0];
//         }
//         return;
//     }

//     for(var j=t;j<CITYSIZE-1;j++){
//         if(CITYGRAPH[cityX[t-1]][cityX[j]]!=Infinity && (curLength+CITYGRAPH[cityX[t-1]][cityX[j]]<bestLength || bestLength==Infinity)){
//             var temp = cityX[t];
//             cityX[t] = cityX[j];
//             cityX[j] = temp;
//             curLength += CITYGRAPH[cityX[t-1]][cityX[t]];
//             travel(t+1);
//             curLength -= CITYGRAPH[cityX[t-1]][cityX[t]];
//             var temp1 = cityX[t];
//             cityX[t] = cityX[j];
//             cityX[j] = temp1;
//         }
//     }
// }

// travel(1);
// console.log(bestX.toString());
// //以上是旅行售货员问题

//N皇后问题







