//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (input) => {
  const milliseconds = input.getTime() + 1000000000000;
  const newDate = new Date(milliseconds)
  return newDate
};

