"use strict";

// Underscore's range function
module.exports = function (start, stop, step) {
    if (arguments.length <= 1) {
        stop = start || 0;
        start = 0;
    }
    step = arguments[2] || 1;

    var len = Math.max(Math.ceil((stop - start) / step), 0),
        idx = 0,
        range = new Array(len);

    while (idx < len) {
        range[idx++] = start;
        start += step;
    }

    return range;
};

