let API_KEY;
debugger;
if (process.env.NODE_ENV === 'production') {
	API_KEY = process.env.GOOGLE_API_KEY;
} else {
	API_KEY = require('./secret');
}
export default API_KEY;
