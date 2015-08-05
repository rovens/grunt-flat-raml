'use strict';

var grunt = require('../grunt');

// Nodejs libs.
var fs = require('fs');
var path = require('path');
var flatRaml = require('flat-raml');
async = require('async');

var task = function (grunt){
	return grunt.registerTask('flattenRaml', 'Flatten multiple raml files into a single file', function(){
		//var done = this.async();
		var inFile = this.options().inFile;
		var outFile = this.options().outFile;
		flatRaml.flatten(inFile, outFile);
	})
};
// The module to be exported.
module.exports = task;