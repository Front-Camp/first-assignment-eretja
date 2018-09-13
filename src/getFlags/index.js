/**
 * @param {Array<Object>} arr - this is an array of objects
 * @return {Array} result of the sum value.
 * @example
  const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}];
 * getFlags(arr); // [1, 2, 3, 4, 5, 6]
 */
const getFlags = arr => {
    var result = arr[0].flags;
    for (i = 0; i < arr[1].flags.length; ++i) {
        result[result.length] = arr[1].flags[i];
    }
    return result;
};

export default getFlags;
