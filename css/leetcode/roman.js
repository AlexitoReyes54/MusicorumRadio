var roman = "LVIII"
romanToInt(roman)

//console.log(pharseTo("D")) 


function romanToInt (s) {
    let result = 0;

    for (var i = 0; i < s.length; i++) {                  
    		let actualNumber = pharseTo(s[i]);
    		let lastNumber = pharseTo(s[i-1]);
    		let nextNumber = pharseTo(s[i-1]);
    		
    		if (lastNumber != undefined) {

    			if (actualNumber > lastNumber) {
    				result =  result + (actualNumber - lastNumber)	
    			}else if (actualNumber < lastNumber) {
    				result = result + actualNumber;
    			}else if (actualNumber == lastNumber) {
    				result = result + actualNumber;	
    			}
    		}else{
    			result = actualNumber;
    		}
    		
    		console.log(i+' value '+result)
    }
    console.log("final value is "+result)
   	return result;
};

function pharseTo(letter) {
	if (letter == "I") {
		return 1;
	}else if (letter == "V") {
		return 5;
	}else if (letter == "X") {
		return 10;
	}else if (letter == "L") {
		return 50;
	}else if (letter == "C") {
		return 100;
	}else if (letter == "D") {
		return 500;
	}else if (letter == "M") {
		return 1000;
	}
}



const romanToInt1 = s => {
  if (!s || s.length === 0) {
    return 0;
  }

  const map = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]]);

  let i = s.length - 1;
  let result = map.get(s[i]);

  while (i > 0) {
    const curr = map.get(s[i]);
    const prev = map.get(s[i - 1]);

    if (prev >= curr) {
      result += prev;
    } else {
      result -= prev;
    }

    i--;
  }

  return result;
};
console.log(romanToInt1(roman))