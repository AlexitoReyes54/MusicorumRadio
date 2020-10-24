let nums = [3,5,4], target = 9;

console.log(twoSum(nums,target))
 function twoSum (nums, target) {
    let look4Target = true;
    let length = nums.length;
    let index = 0;
    let position = 0

    while (look4Target) {
    	if(index >= length){
    		index = 0 
   			position++
    	} 

    	let sum = nums[position] + nums[index]

    	if (sum == target) {
    		look4Target = false;
    		return[position,index]
    	}

    	
    	if (position == 4) {
    		look4Target = false;
    		return[0,0]
    	}
    	index++
    }


};