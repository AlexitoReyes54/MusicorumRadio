let target = [1,3];
let n = 3;

class Stack{
	constructor(){
		this.stack = []
	}
	pop(){
		//delete new element
		this.stack.shift();
	}
	push(element){
		//add new element
		this.stack.unshift(element);
	}
}




buildArray(target,2)

function buildArray(target, n) {
	let record = []
    let list = [1,2,3,4,5,6,7,8,9]

    for (var i = 0; i < n; i++) {

    	console.log(target[i] +" <= "+list[i])
		if(target[i] <= list[i]) {
			record.push("push")
			console.log("yes")
		}else{
			record.push("push","pop")
			console.log("no")
		}

    }
    node = new Stack();
    console.log(record)
};

let nu = "2"
console.log(parseInt("5")  == parseInt("5") )
console.log(nu+nu)


