/*
 * Example code to call Rosette API to get Chinese readings for words in a piece of text.
 */

"use strict";

var Api = require("rosette-api").Api;
var ArgumentParser = require("argparse").ArgumentParser;
var DocumentParameters = require("rosette-api").DocumentParameters;
var rosetteConstants = require("rosette-api").rosetteConstants;

var parser = new ArgumentParser({
  addHelp: true,
  description: "Get Chinese readings of words in a piece of text"
});
parser.addArgument(["--key"], {help: "Rosette API key", required: true});
var args = parser.parseArgs();

var docParams = new DocumentParameters();
var morphology_han_readings_data = "北京大学生物系主任办公室内部会议";
var content = morphology_han_readings_data;
docParams.setItem("content", content);

var api = new Api(args.key);
api.morphology(docParams, rosetteConstants.morpholoyOutput.HAN_READINGS, function(err, res) {
  if (err) {
    throw err;
  }
  else {
    console.log(JSON.stringify(res, null, 2));
  }
});
