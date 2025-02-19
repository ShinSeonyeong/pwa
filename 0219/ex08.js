function repeat(n, func) {
    for (var i = 0; i < n; i++) {
        // console.log(func);
        if (i % 2)
            func(i);
    }
}
var log = function (aa) { console.log(`test ${aa}`) };
repeat(5, log);