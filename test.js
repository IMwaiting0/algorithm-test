function GetNumberOfK(data, k)
{
    // write code here
    if(data===null || data.length === 0 || data[0]>k || data[data.length-1]<k){
        return 0;
    }
    let len = data.length, left = 0, right = len-1, mid = parseInt((left+right)/2);
    while(!(data[right] === k && data[left] === k)){
        mid = parseInt((right+left)/2);
        if(data[mid]>k){
            right = mid-1;
        }else if(data[mid]<k){
            left = mid+1;
        }else{
            if(data[right]>k){
                right--;
            }
            if(data[left]<k){
                left++;
            }
        }
    }
    return right-left+1;
}

console.log(GetNumberOfK([1,2,3,4,4,4,4,4,5,6,7,8,9],0));