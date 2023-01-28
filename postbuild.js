const fs = require('fs');
const path = require('path');

function getAllFiles (directory, extension) {
	let files = fs.readdirSync(directory, {withFileTypes: true});
	let filesRes = files.map(f => {
		if (f.isDirectory()) {
			return getAllFiles(path.join(directory, f.name), extension);
		}
		return path.join(directory, f.name);
	});
	return filesRes.filter(f => f);
}


process.argv.forEach(function (val, index, array) {
	if (index < 3) {
		return;
	}
	const files = getAllFiles(process.argv[2], val).flat(2).filter(f => path.extname(f) === val);

	files.forEach((val) => {
		fs.readFile(val, 'utf8', function (err, data) {
			let res = data;
			const scssImports = data.match(/[import,require].*\.scss.*;/g);
			if (scssImports && scssImports.length) {
				scssImports.forEach((scssImport) => {
					res = res.replace(scssImport, scssImport.replace('.scss', '.css'));
				});
			}

			fs.writeFile(val, res, 'utf8', function (err) {
				if (err) return console.log(err);
			});
		});
	});
});

console.log('Scss to css imports conversion done!');