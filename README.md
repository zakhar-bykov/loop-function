# loop-function
just for fun or distraction

## Function
``` javascript
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
```

## How to use
Example
``` javascript
// with local data variable

loop(1000, { loopId: 0, variable: 'local' }, function callback(time, data) {
    data.loopId++

    console.log(data)

    if (data.loopId < 10) {
        loop(time, data, callback)
    } else {
        console.log('Loop with local data variable stopped')
    }
})


// with global data variable

let data = { loopId: 0, variable: 'global' }

loop(1000, function callback(time) {
    data.loopId++

    console.log(data)

    if (data.loopId < 10) {
        loop(time, callback)
    } else {
        console.log('Loop with global data variable stopped')
    }
})
```