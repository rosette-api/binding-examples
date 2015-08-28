/*
 * Example code to send Rosette API a ping to check its reachability.
 */

"use strict";

var Api = require("rosette-api").Api;
var ArgumentParser = require("argparse").ArgumentParser;

var parser = new ArgumentParser({
  addHelp: true,
  description: "Send ping to check for reachability of Rosette API"
});
parser.addArgument(["--key"], {help: "Rosette API key", required: true});
var args = parser.parseArgs();

var api = new Api(args.key);
api.ping(function(err, res) {
  if (err) {
    throw err;
  }
  else {
    console.log(res);
  }
});
