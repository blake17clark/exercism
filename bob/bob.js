import { regExpLiteral } from "@babel/types";

/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// export const result = (hey) => {

// }

export const hey = (message) => { 
if (message.trim() === ''){
  return 'Fine. Be that way!';
} else if (message === message.toUpperCase() && message.slice(-1) === '?' && /[^\W\d_]+/g.test(message) ) {
  return "Calm down, I know what I'm doing!";  
} else if (message.trim().slice(-1) === '?')  {   // message(lastIndexOf) string.lastIndexOf
  return 'Sure.';
} else if (message === message.toUpperCase() && /[^\W\d_]+/g.test(message)) {    //remove non-alpha /[^\W\d_]+/g
  return 'Whoa, chill out!';
  // if(/[\d\W]/g.test(message) && message.slice(-1) === '?' && message != message.toUpperCase()){return 'Sure.';}

} else {
    return 'Whatever.';
  
}
};


