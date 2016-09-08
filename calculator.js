/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

function calculatorModule() {
  let _memory = 0;
  let _total = 0;
  
  return {
  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
    load: function(newTotal){
     _total = newTotal;
     return _total;
    },

  /**
   * Return the value of `total`
   * @return { Number }
   */
    getTotal: function() {
      return _total;
    },

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
    addToTotal: function(valueToAdd) {
      _total += valueToAdd;
      return _total;
    },

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
   subtractFromTotal: function(valueToSubtract) {
      _total -= valueToSubtract;
      return _total;
    },


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
   multiplyValue: function(valueToMultiply) {
      valueToMultiply *= _total;
      return valueToMultiply;
    },

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
   divideValue: function(valueToDivide) {
      valueToDivide /= total;
      return valueToDivide;
    },

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
    getMemory: function() {
      return _memory;
    },


  /**
   * Stores the value of `total` to `memory`
   */
    storeTotalInMemory: function(theTotal) {
      _memory = _total;
      return _memory;
    },

  /**
   * Clear the value stored at `memory`
   */
    clearMemory: function() {
      _memory = null;
      return _memory;
    }
  /**
   * Validation
   */
  };
};
