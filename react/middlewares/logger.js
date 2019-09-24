export default ({ getState }) => next => action => {
	const prevState = getState();
	next(action);
	const newState = getState();
	console.log('%cPrevious State:', 'color: green');
	console.log(prevState);
	console.log('%cAction:', 'color: red');
	console.log(action);
	console.log('%cNext State:', 'color: cornflowerblue');
	console.log(newState);
};
