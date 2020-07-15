## Clover
🍀✨ Simplistic argument parser.

## Install
`npm install @terminalfreaks/clover`

## Example
```js
const clover = require("@terminalfreaks/clover");

const options = clover("--greeting Hello -s");
console.log(options);
console.log(clover.isEmpty(options.s));
```

`clover.isEmpty(option)` - Checks if `option` is empty (example: `--hi`) or isn't passed.
