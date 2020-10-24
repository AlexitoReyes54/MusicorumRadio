
var address = "1.1.1.1";
defangIPaddr(address)

function defangIPaddr(address) {
    var response =address.split(".");
    for (var i = response.length - 1; i >= 0; i--) {
    	if (i > 0) {
    		response.splice(i,0,"[.]")
    	}
    }
    let toString = response.toString();
    let commaRemove = toString.replace(/,/g,"")
    return commaRemove;
};