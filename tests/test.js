// Richard Wen
// rrwen.dev@gmail.com

// (packages) Package dependencies
var fs = require('fs');
var moment = require('moment');
var freeboardleafletrealtime = require('../index.js');
var test = require('tape');

// (test_info) Get package metadata
var json = JSON.parse(fs.readFileSync('package.json', 'utf8'));
var testedPackages = [];
for (var k in json.dependencies) {
	testedPackages.push(k + ' (' + json.dependencies[k] + ')');
}
var devPackages = [];
for (var k in json.devDependencies) {
	devPackages.push(k + ' (' + json.devDependencies[k] + ')');
}

// (test_log) Pipe tests to file and output
if (!fs.existsSync('./tests/log')){
	fs.mkdirSync('./tests/log');
}
var testFile = './tests/log/test_' + json.version.split('.').join('_') + '.txt';
test.createStream().pipe(fs.createWriteStream(testFile));
test.createStream().pipe(process.stdout);

// (test) Run tests
test('Tests for ' + json.name + ' (' + json.version + ')', t => {
	t.comment('Node.js (' + process.version + ')');
	t.comment('Description: ' + json.description);
	t.comment('Date: ' + moment().format('YYYY-MM-DD hh:mm:ss'));
	t.comment('Dependencies: ' + testedPackages.join(', '));
	t.comment('Developer: ' + devPackages.join(', '));

	// (test_pass) Pass a test
	t.pass('(MAIN) test pass');

	// (test_equal) Equal test
	var actual = 1;
	var expected = 1;
	t.equal(actual, expected, '(A) Equal test');

	// (test_deepequal) Deep equal test
	var actual = {a: 1, b: {c: 2}, d: [3]};
	var expected = {a: 1, b: {c: 2}, d: [3]};
	t.deepEquals(actual, expected, '(B) Deep equal test');

	// (test_fail) Fail a test
	// t.fail('(MAIN) test fail');

	t.end();
});
