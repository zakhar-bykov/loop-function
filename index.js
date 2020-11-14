/**
 * Loop function. Captain.
 *
 * Allows you to call your function with a dynamically changeable time delay.
 * An example when you need to dynamically change the frequency of execution of a function in a loop, depending on the value of the variable being changed.
 *
 * @param {int}                           time       Time in milliseconds for the first cycle of the setTimeout function.
 * @param {object || array || function}   [data]     An object / array that goes through all loops.
 *                                                   It's like travel luggage. Optional
 * @param {function}                      callback   Your function. Captain.
 *
 * @return {type} Nothing there.
 */
function loop(time, data, callback) {
    if (typeof data === 'function') {
        callback = data
        data = {}
    }

    setTimeout(() => {
        callback(time, data)
    }, time)
}