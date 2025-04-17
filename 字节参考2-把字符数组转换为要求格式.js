//input ["a","b","c","d","e","f","g"]

//output {"a":{"b":{"c":{"d":{"e":{"f":"g"}}}}}}

function handler(arr){
    const len = arr.length;
    let prev = {
        [arr[len-2]]:arr[len-1]
    }
    for(let i=len-3;i>=0;i--){
        prev = {
            [arr[i]]:prev
        }
    }
    return prev
}

