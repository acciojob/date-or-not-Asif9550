var isDate = function(input) {
  // Check if the input is a valid Date object
  if (input instanceof Date) {
    // Check if the date is valid (i.e., not NaN)
    return !isNaN(input.getTime());
  }

  // Check if the input is a string that can be parsed into a valid date
  if (typeof input === 'string' && !isNaN(Date.parse(input))) {
    return true;
  }

  // Return false for all other cases
  return false;
};

// Do not change the code below
const input = prompt("Enter Date.");
alert(isDate(input));
