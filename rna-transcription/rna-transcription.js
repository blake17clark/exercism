//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (string) => {
// console.log(string)
let output = ""
  for (let i = 0; i < string.length; i++) {
    // output += [string[i]];
  if (string[i] === 'C') {output += 'G'}
  if (string[i] === 'G') {output += 'C'}
  if (string[i] === 'T') {output += 'A'}
  if (string[i] === 'A') {output += 'U'}
  } console.log(string)
  return output
};
