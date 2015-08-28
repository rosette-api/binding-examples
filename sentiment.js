/*
 * Example code to call Rosette API to get a document's sentiment from a local file.
 */

"use strict";

var Api = require("rosette-api").Api;
var ArgumentParser = require("argparse").ArgumentParser;
var DocumentParameters = require("rosette-api").DocumentParameters;
var tmp = require("temporary");

var parser = new ArgumentParser({
  addHelp: true,
  description: "Get the sentiment of the text in a local file"
});
parser.addArgument(["--key"], {help: "Rosette API key", required: true});
var args = parser.parseArgs();

var docParams = new DocumentParameters();

var file = new tmp.File();
var fileContents = "<html><head><title>Performance Report</title></head><body><p>This article is clean, concise, and very easy to read.</p></body></html>";

file.writeFileSync(fileContents);

docParams.loadDocumentFile(file.path);
file.unlink();

var api = new Api(args.key);
api.sentiment(docParams, function(err, res) {
  if (err) {
    throw err;
  }
  else {
    console.log(res);
  }
});
