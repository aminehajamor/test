function square(x) {
  return x * x;
}
// Day 2
function oldEnoughToDrive (age){
	if (age >= 16) 
		{ return true;  
	} 
}

function sameLength (str1,str2) { 
    if (str1.length===str2.length)
 {return true} else {return false}
}
function passwordLongEnough (password) {

	if(password.length>=10) {
		return true
	}
	else {return false}
}
function abs(x) {
	if(x>=0) {return x}
else {return -x}} ;
	

	function fullName(firstName ,lastName ) {
		return  firstName + lastName 
	} ; 

	//day3

	function dograce(race) { 
if( race === 'bulldog' ) {
    return 'its a french bulldog'
}
else if ( race === 'terrier') {
    return 'its a boston terrier'
} 
else{return 'unknown dog'}
}