#!/usr/bin/env node
const fs = require(`fs`)
const {resolve} = require(`path`)
const {parse} = require(`json5`)
const yargs = require(`yargs`)
const split = require(`split`)
const utf8 = require(`utf8-stream`)
const map = require(`map-stream`)
const concat = require(`concat-stream`)

const argv = yargs
  .usage(
    `Pipe $0 onto a JSON5 source to parse the output:
  cat data.json | $0 [options]`
  )
  .options({
    f: {
      alias: `file`,
      describe: `Read input from file`,
      requiresArg: true,
      type: `string`
    },
    L: {
      alias: `line-by-line`,
      describe: `Parse each line as a separate input`,
      type: `boolean`
    }
  })
  .help()
  .argv

/* eslint-disable no-console */
const parseBuf = buf => {
  const bufStr = buf.toString()

  if (bufStr) {
    const output = JSON.stringify(parse(bufStr))
    console.log(output);
    return output;
  }
};
/* eslint-enable no-console */

const parseStream = stream =>
  stream
    .pipe(utf8())
    // Use utf8 effectively as a noop
    .pipe(argv.L ? split() : utf8())
    .pipe(argv.L ? map(parseBuf) : concat(parseBuf));

if (!process.stdin.isTTY) {
  parseStream(process.stdin);
} else if (argv.file) {
  parseStream(fs.createReadStream(resolve(argv.file), `utf8`));
} else {
  yargs.showHelp();
}

module.exports = {parseBuf}
