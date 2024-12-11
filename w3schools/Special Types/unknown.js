var w = 1;
w = "string";
w = {
    runANonExistentMethod: function () {
        console.log("I think therefore I am");
    }
};
if (typeof w === 'object' &&
    w !== null &&
    'runANonExistentMethod' in w &&
    typeof w.runANonExistentMethod === 'function') {
    w.runANonExistentMethod();
}
