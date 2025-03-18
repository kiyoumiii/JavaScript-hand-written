var sortArray = function(nums) {
    function quickSort(arr,left,right) {
        if(left>=right) return;

        let pivot = arr[Math.floor((left+right)/2)];
        let i = left, j = right;

        while(i <= j) {
            while(arr[i] < pivot) i++;
            while(arr[j] > pivot) j--;

            if (i<=j) {
                [arr[i],arr[j]] = [arr[j],arr[i]];
                i++;
                j--;
            }
        }

        quickSort(arr,left,j);
        quickSort(arr,i,right);
    };

    quickSort(nums,0,nums.length-1);
    return nums;
}