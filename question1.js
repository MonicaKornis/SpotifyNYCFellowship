// Question 1 -- sortByStrings(s,t): Sort the letters in
 // the string s by the order they occur in the string t.
  // You can assume t will not have repetitive characters.
   // For s = "weather" and t = "therapyw", the output should be
    // sortByString(s, t) = "theeraw". For s = "good" and t = "odg",

    function sortByString(s,t) {
      let finalStr = [];
      for (let i = 0; i < t.length; i++) {
        let first = s.split('').filter(letter => letter === t[i]);
        finalStr = finalStr.concat(first);
      }
      return finalStr.join('');
    }
