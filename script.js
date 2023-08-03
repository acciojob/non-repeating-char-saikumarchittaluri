//your JS code here. If required.
function firstNonRepeatingCharacter(str) {
			const charCount = {};

			// Count the occurrences of each character in the string
			for (let i = 0; i < str.length; i++) {
				const char = str[i];
				charCount[char] = (charCount[char] || 0) + 1;
			}

			// Find the first non-repeating character
			for (let i = 0; i < str.length; i++) {
				const char = str[i];
				if (charCount[char] === 1) {
					return char;
				}
			}

			return null; // If no non-repeating character is found
		}

		function Main() {
			var str = prompt("Enter a string:");
			const result = firstNonRepeatingCharacter(str);

			if (result) {
				alert("The first non-repeating character is: " + result);
			} else {
				alert("No non-repeating character found in the string.");
			}
		}
		Main();