var _ = require('lodash');

function constrain(value, min, max) {
    min = (typeof min == 'undefined') ? 0 : min;
    max = (typeof max == 'undefined') ? Number.MAX_VALUE : max;
    var swap;

    if (max < min) {
        swap = max;
        max = min;
        min = swap;
    }
    return Math.max(min, Math.min(value, max));
}

_.mixin({'constrain': constrain})
