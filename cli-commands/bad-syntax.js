'use strict';

function f(a, a) {}

// https://nodejs.org/api/cli.html

// node -c bad-syntax.js

// /Users/filipebraga/dev/lfw211-labs/ch-3/labs-2/bad-syntax.js:3
// function f (a, a) {
//                ^
// SyntaxError: Duplicate parameter name not allowed in this context
//     at Object.compileFunction (node:vm:360:18)
//     at wrapSafe (node:internal/modules/cjs/loader:1124:15)
//     at checkSyntax (node:internal/main/check_syntax:66:3)
