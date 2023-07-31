function f(n = 99) {
    if (n === 0) throw Error();
    debugger;
    // debugger; inspect => open the inspect on chrome and see the green node icon top left
    f(n - 1);
}
f();

//node --inspect-brk app.js to set breakpoint in the first line
