var multiArr = [1,2,[3,[4,5]]];

function ArrayFlat(arr){
    let result = [];
    if(Array.isArray(arr)){
        for(let i of arr){
            if(Array.isArray(i)){
                result = result.concat(ArrayFlat(i));
            }
            else{
                result.push(i);
            }
        }
    }
    return result;
}

console.log(ArrayFlat(multiArr).join(','));
console.log(multiArr.toString());
