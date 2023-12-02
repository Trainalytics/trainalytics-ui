declare const require: any;
const packagejson = require('../../package.json');

export const environment = {
	production: true,
	version: packagejson.version
}
