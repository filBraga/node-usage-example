function f(n = 99) {
    if (n === 0) throw Error();
    f(n - 1);
}
f();

// CLI USAGE: node [options] [V8 options] [script.js | -e "script" | - ] [arguments]

// https://nodejs.org/api/cli.html

// node --stack-trace-limit=200 will-throw.js

// /Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:2
//   if (n === 0) throw Error()
//                ^
// Error
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:2:22)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at f (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:3:3)
//     at Object.<anonymous> (/Users/filipebraga/dev/lfw211-labs/ch-3/labs-1/will-throw.js:5:1)
//     at Module._compile (node:internal/modules/cjs/loader:1196:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1250:10)
//     at Module.load (node:internal/modules/cjs/loader:1074:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:909:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:22:47
