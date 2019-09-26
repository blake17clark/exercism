//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  let sec = sentence.trim()
    .toLowerCase();
    for (let j=0; j< abc.length; j++) {
        if (sec.indexOf(abc[j]) === -1) {
            return false;
        }
    }
    return true;
        };
    
