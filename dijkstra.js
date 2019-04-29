//最短路径问题 某个城市到其他城市最短距离
//事件复杂的度 n^2
//首先将城市间的路径长度存为二维数组，数组的[i][j]项是城市i到城市j的路径长度
//初始化一个数组存储最短路径，大小为城市个数，初始值为一个足够大的数
//双重循环：外层循环表示当前城市，内层循环表示目标城市，每次判断当前城市到目标城市的距离是不是小于最短路径数据中对应的目标城市距离，小于的话更新最短路径数组
const CITYGRAPH = new Array([0,30,6,4],[30,0,5,10],[6,5,0,20],[4,10,20,0]);//城市间边权重二维数组 CITYGRAPH[i][j]代表城市i到j的路径长度
function Dijkstra(citygraph,start=0){
    const rows = citygraph.length,cols = citygraph[0].length;
    if(rows!==cols||start>=rows){
        console.log("数据错误");
        return;
    }

    const distance = new Array(rows).fill(Infinity);
    distance[start]=0;

    for(let i=0;i<rows;i++){
        if(distance[i]<Infinity){
            for(let j=0;j<cols;j++){
                if(citygraph[i][j]+distance[i]<distance[j]){
                    distance[j] = citygraph[i][j]+distance[i];
                }
            }
        }
    }

    return distance;
}

console.log(Dijkstra(CITYGRAPH,0));