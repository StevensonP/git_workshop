/* //alert("Welcome!");

// box
let line = '';
let n = 5;
for(let lineCounter = 0; lineCounter < n; lineCounter++) {
	for(let charCounter = 0; charCounter < n; charCounter++) {
		line += '* ';
	}
	line += '\n';
}
console.log(line);

// hollow box
line = '';
for(let lineCounter = 0; lineCounter < n; lineCounter++) {
	for(let charCounter = 0; charCounter < n; charCounter++) {
		if ( ( lineCounter > 0 && lineCounter < (n - 1) ) && ( charCounter > 0 && charCounter < (n - 1) ) ) {
			line += '  ';
		} else {
			line += '* ';
		}
	}
	line += '\n';
}
console.log(line);


// triangle
line = '';
n = 5;
let charLimit = n - 1;
let printLimit = 1;
for(let lineCounter = n; lineCounter > 0; lineCounter--) {
	console.log('charLimit', charLimit);
	
	for(let charCounter = charLimit; charCounter > 0; charCounter--) {
		line += '  ';
	}
	for(let printCounter = 0; printCounter < printLimit + printLimit - 1; printCounter++) {
		if (printCounter % 2 == 0) {
			line += '* ';
		} else {
			line += '  ';
		}
	}
	line += '\n';
	charLimit--;
	printLimit++;
}
console.log(line);
 */

// rev triangle
line = '';
n = 3;
charLimit = 0;
printLimit = n;
for(let lineCounter = n; lineCounter > 0; lineCounter--) {
	console.log('charLimit', charLimit);
	
	for(let charCounter = 0; charCounter < charLimit; charCounter++) {
		console.log('charCounter', charCounter);
		line += '  ';
	}
	for(let printCounter = printLimit + printLimit - 1; printCounter > 0; printCounter--) {
		console.log('printCounter', printCounter)
		if (printCounter % 2 == 1) {
			line += '* ';
		} else {
			line += '  ';
		}
	}
	line += '\n';
	charLimit++;
	printLimit--;
}
console.log(line);

/* let a = 5;
let b = 3;

a = a + b;

console.log('a+b', a);

b = a - b;
a = a - b;

console.log('a', a);
console.log('b', b);
 */