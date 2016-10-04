/*
* This is an example of a debounce loop function that accepts a function and a time limit.
* The function returns a debounced function that will execute after the given time.
* For example when a user is typing into a text field you could use this function to make sure that the API call is only made when they stop making changes to the element.
* Thus reducing the total amount of load on the server.
*/
var asyncCall = function() {
    console.log("A server call has been made.");
}

function debounce(fn, time) {
    var timeOutLoop;
    var newDebounce = function() {
        clearTimeout(timeOutLoop);
        timeOutLoop = setTimeout(fn, time);
    }

    return newDebounce;

}

var newDebounce = debounce(asyncCall, 1000);
(function(){
    for ( var i = 0; i < 20; i++ ) {
        newDebounce();
    }
})();