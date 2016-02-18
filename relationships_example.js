"use strict";

var Api = require("../lib/Api");
var ArgumentParser = require("argparse").ArgumentParser;

var parser = new ArgumentParser({
  addHelp: true,
  description: "Get the relationships from a piece of text"
});
parser.addArgument(["--key"], {help: "Rosette API key", required: true});
var args = parser.parseArgs();

var api = new Api(args.key);
var endpoint = "relationships";

var relationships_text_data = "Bill Murray is in the new Ghostbusters film!";
var content = relationships_text_data;

api.parameters.content = content;
api.parameters.accuracyMode = "precision";

api.rosette(endpoint, function(err, res){
	if(err){
		console.log(err);
	} else {
		console.log(JSON.stringify(res, null, 2));
	}
});