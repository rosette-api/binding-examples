/*
 * Example code to call Rosette API to translate a name from language to another.
 */

"use strict";

var Api = require("rosette-api").Api;
var ArgumentParser = require("argparse").ArgumentParser;
var NameTranslationParameters = require("rosette-api").NameTranslationParameters;

var parser = new ArgumentParser({
  addHelp: true,
  description: "Translate a name from one language to another"
});
parser.addArgument(["--key"], {help: "Rosette API key", required: true});
var args = parser.parseArgs();

var translationParams = new NameTranslationParameters();
var translated_name_data = "معمر محمد أبو منيار القذاف";
translationParams.setItem("name", translated_name_data);
translationParams.setItem("entityType", "PERSON");
translationParams.setItem("targetLanguage", "eng");

var api = new Api(args.key);
api.translatedName(translationParams, function(err, res) {
  if (err) {
    throw err;
  }
  else {
    console.log(JSON.stringify(res, null, 2));
  }
});
