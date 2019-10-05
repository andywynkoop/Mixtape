let API_KEY;
if (NODE_ENV === 'production') {
	API_KEY = GOOGLE_API_KEY;
} else {
	API_KEY = require('./secret');
}
export default API_KEY;
