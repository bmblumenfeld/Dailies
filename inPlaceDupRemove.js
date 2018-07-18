/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums, index) {
    let currrent;
    let next;
    let complete = false;
    nums.forEach((num,index)=>{
        current = num;
        next = index + 1;
        while(current === false){
            if(next >= nums.length){
              break;
            }
            current = nums[next];
            next++
        }
        if(!next){
            return;
        }
        nums[index] = current
        for(var i = index+1; i < nums.length; i++){
            if (nums[i] === current){
                nums[i] = false
            }
        }
    })
    for(var i = nums.length; i >= 0; i--){
        if(nums[i] === false){
            nums.pop();
        }
    }
    return nums.length
};