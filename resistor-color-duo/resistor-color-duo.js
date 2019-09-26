//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

export const value = (bothColors) => {    // mapping both colors and map is a loop functionexercism submit /path/to/file [/path/to/file2 ...]
  
  return Number (bothColors.map(name => COLORS.indexOf(name)).join('')) 

  //throw new Error("Remove this statement and implement this function");
}
