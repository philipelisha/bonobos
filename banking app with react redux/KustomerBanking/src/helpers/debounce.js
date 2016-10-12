export const debounce = function (fn, time) {
    var timeOutLoop;
    var newDebounce = function() {
        clearTimeout(timeOutLoop);
        timeOutLoop = setTimeout(fn, time)
    }

    return newDebounce;

}