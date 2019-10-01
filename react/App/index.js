import { Login, SignUp } from './Session';
import Splash from './Splash';
import Browse from './Browse';
const { HashRouter, Route } = ReactRouter;

export default () => (
	<HashRouter>
		<div>
			<Route exact path="/login" component={Login} />
			<Route exact path="/signup" component={SignUp} />
			<Route path="/browse" component={Browse} />
			<Route exact path="/" component={Splash} />
		</div>
	</HashRouter>
);
