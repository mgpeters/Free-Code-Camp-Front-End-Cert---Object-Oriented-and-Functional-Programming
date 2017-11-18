/* Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example 
if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/


function myReplace(str, before, after) {
	var arr = [],
		round = 0;

		arr = str.split(" ");
		console.log(arr);

		for(round; round < arr.length; round += 1){
			if(arr[round] == before){
				arr.splice(arr[round], 1, after)
				console.log("working");
				console.log(arr);
			}
			else{
				console.log("skipped");
			}
		}

  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");