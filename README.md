[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/therealklanni/json5conv-cli/master/LICENSE)
[![Build Status](https://img.shields.io/travis/therealklanni/json5conv-cli.svg)](https://travis-ci.org/therealklanni/json5conv-cli)
[![npm](https://img.shields.io/npm/v/json5conv-cli.svg)](https://www.npmjs.com/package/json5conv-cli)
[![prettier](https://img.shields.io/badge/style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Beerpay](https://img.shields.io/beerpay/therealklanni/json5conv-cli.svg)](https://beerpay.io/therealklanni/json5conv-cli)

# json5conv

> Command-line [JSON5](https://github.com/json5/json5) to JSON converter

Convert [JSON5](https://github.com/json5/json5) to JSON from a file or stdin. Supports line-by-line parsing (i.e. convert each line as a separate JSON5 object).

Try it in combination with [`jp`](https://github.com/therealklanni/jp).

## Install

```
yarn global add json5conv-cli
```

Or

```
npm install --global json5conv-cli
```

## Usage

```
Pipe json5conv onto a JSON5 source to parse the output:
  cat data.json | json5conv [options]

Options:
  -f, --file          Read input from file                              [string]
  -L, --line-by-line  Parse each line as a separate input              [boolean]
  --help              Show help                                        [boolean]
```

#### License

MIT © [therealklanni](https://github.com/therealklanni)
