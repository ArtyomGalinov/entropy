let fs = require('fs');
s = fs.readFileSync('entropy.txt');
s = s.toString();
if (s.length != 0) {
	let alph = new Array();
	for (let i = 0; i < s.length; i++) {
		alph[s.charAt(i)] = 0;
	}

	for (let i = 0; i < s.length; i++) {
		alph[s.charAt(i)]++;
	}
	let h = 0;
	let n = 0;
	for (i in alph) {
		alph[i] /= s.length;
		n++
	}

	console.log(alph);
	console.log("Letter count:", n);

	for (let i in alph) {
		h -= alph[i] * Math.log2(alph[i]);
	}
	if (n > 1) {
		h /= Math.log2(n);
		console.log("Entropy =", h);
	}
	else
		console.log("Enrtopy =", 0);
}
else console.log("String is empty. Check entropy.txt");
