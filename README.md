# gridsome-plugin-ts
[![npm](https://img.shields.io/npm/v/gridsome-plugin-ts.svg?style=flat-square)](https://www.npmjs.com/package/gridsome-plugin-ts)
[![npm](https://img.shields.io/npm/dt/gridsome-plugin-ts.svg?style=flat-square)](https://www.npmjs.com/package/gridsome-plugin-ts)

[TypeScript](https://www.typescriptlang.org/) plugin for [Gridsome](https://gridsome.org/).

> Use [ts-loader](https://github.com/TypeStrong/ts-loader) under the hood.

## Installation

```bash
npm install -D typescript gridsome-plugin-ts
# or
yarn add -D typescript gridsome-plugin-ts
```

## Usage

```js
module.exports = {
	plugins: [
		use: 'gridsome-plugin-ts',
		options: {
			/* Options for `ts-loader` */
		}
	]
};
```
