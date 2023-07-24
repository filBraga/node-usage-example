// https://nodejs.org/api/cli.html#-r---require-module

// Preload the specified module at startup.
// Follows require()'s module resolution rules. module may be either a path to a file, or a node module name.
// Only CommonJS modules are supported. Use --import to preload an ECMAScript module. Modules preloaded with --require will run before modules preloaded with --import.

// -r, --require module

// node -r ./preload.js app.js
