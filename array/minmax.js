function minmax(nums){
    if(nums.length === 0) return null;
    let min = nums[0];
    let max = nums[0];
    for (let i=1; i<nums.length; i++){
        if(nums[i] > max){
            max = nums[i]
        } else if ( nums[i] < min){
            min = nums[i]
        }
    }
    return { min, max }
}
console.log(minmax([9,23,4,5]));
