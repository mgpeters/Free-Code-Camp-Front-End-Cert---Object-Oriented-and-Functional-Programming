/* 

DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

*/


function pairElement(str) {
	var sequence = str.split("");
		pairings = {
			A: "T",
			T: "A",
			C: "G",
			G: "C"
		},
		sequenceRound = 0;

		for(sequenceRound; sequenceRound < sequence.length; sequenceRound += 1){

		}

	return str;
}

pairElement("GCG");