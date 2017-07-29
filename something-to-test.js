
function cntTo100 () {
	for (var i=1;i<=100;i++) {
		console.log(getResult(i));
	}
}


function getResult(intToCheck) {
	if (isNaN(intToCheck) ) {
		throw new Error('parameter is NaN'); 
	}
	switch  (true) {
			case (divby(intToCheck,3) && divby(intToCheck,5)):
				return 'fang bang';
				break;
			case (divby(intToCheck,3) ):
				return 'fang';
				break;
			case (divby(intToCheck,5)):
				return 'bang';
				break;
			default:
				return intToCheck;
		}
}

function divby (isNumberi, divByx) {
	if (isNaN(isNumberi) || isNaN(divByx)) {
		throw new Error('parameter is NaN'); 
	}
	if (isNumberi % divByx === 0) {
		return true;
	}
	else {
		return false;
	}
}


