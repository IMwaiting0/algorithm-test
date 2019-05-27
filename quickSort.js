// function quickSort(arr,left,right){
//     if(left>right){
//         return;
//     }
//     let i=left,j=right,k=arr[i];
//     while(i!==j){
//         while(arr[j]>=k && i<j) j--;
//         while(arr[i]<=k && i<j) i++;
//         if(i<j){
//             let tmp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = tmp;
//         }
//     }
//     arr[left] = arr[i];
//     arr[i] = k;
//     quickSort(arr,left,i-1);
//     quickSort(arr,i+1,right);
// }
var befArr = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];
quickSort(befArr, 0, befArr.length - 1); 
console.log(befArr);

function quickSort(arr,left,right){
    if(left>right){
        return;
    }
    let i = left, j = right, k = arr[i];
    while(i!==j){
        while(arr[j]>=k && i<j) j--;
        while(arr[i]<=k && i<j) i++;
        if(i<j){
            let tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
    arr[left] = arr[i];
    arr[i] = k;
    quickSort(arr,left,i-1);
    quickSort(arr,i+1,right);
}
