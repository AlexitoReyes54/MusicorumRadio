var Input =  ["5","2","C","D","+"]

var Output =  30

class Stack{
	constructor(){
		this.stack = []
	}
	pop(){
		this.stack.shift()
	}
	push(e){
		this.stack.unshift(e)
	}
	seek(){
		return this.stack[0]
	}
}

function baseball(ops) {
	let sum = 0;
	let scores = new Stack();
	let rounds = []

	for (var i = 0; i < ops.length; i++) {
		if (parseInt(ops[i])  == parseInt(ops[i])) {
		
				if (ops[i] >= 0) {
					sum += parseInt(ops[i]);
					rounds.push(parseInt(ops[i]))
				}else{
					console.log(parseInt(ops[i]) *-1)
					rounds.push(parseInt(ops[i]))
					let aux = parseInt(ops[i]) * -1;
					sum -= aux
				}
			scores.push(sum)
		}else {
			switch (ops[i]) {
				case "C":
					sum -= parseInt(ops[i-1])
					scores.push(sum)
					break;
				case "+":
					let aux = rounds[rounds.length-2] + rounds[rounds.length-1]
					sum = scores.seek() + aux
					console.log(rounds[rounds.length-2] +" + "+ rounds[rounds.length-1]+" sum=  "+sum) 
					
					scores.push(sum)
					break;
				case "D":
					if (ops[i-1] == "C") {
						let aux =  (parseInt(ops[i-3]) * 2) * -1
						rounds.push(aux)
						sum -= aux 
						scores.push(sum)
					}else{
						sum = scores.seek() * 2 //+ scores.seek()
						scores.push(sum)
					}
					break;
			}
		}
	}
	console.log(rounds)
	return scores.seek()
}


		
var x = ["5","-2","4","C","D","9","+","+"]
//baseball(x)
console.log(baseball(x))

var y = calPoints(x)
console.log(y)

function calPoints(ops) {
    const stack = [];
    let sum = 0;
    for (let i = 0; i < ops.length; i++) {
       if (ops[i] === '+') {
            const a = stack[stack.length - 1];
            const b = stack[stack.length - 2];
            stack.push(a + b);
            sum += (a + b);
        } else if (ops[i] === 'D') {
            const a = stack[stack.length - 1];
            const r = a * 2;
            stack.push(r);
            sum += r;
        } else if (ops[i] === 'C') {
            const x = stack.pop();
            sum -= x;
        } else {
            const x = parseInt(ops[i]);
            stack.push(x);
            sum += x;
        }
    }
    console.log(stack)
    return sum;
};