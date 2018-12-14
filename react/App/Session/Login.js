import { connect } from 'react-redux-lite';
import { login, clear } from '../../actions';
import Form from './Form';

const mstp = state => ({ 
  type: "Log In",
  loggedIn: state.session,
  errors: state.errors.session
});

const mdtp = dispatch => ({
  submit: user => dispatch(login(user)),
  demo: () => dispatch(login({ email: "Andy5", password: "password" })),
  clear: () => dispatch(clear())
});

export default connect(mstp, mdtp)(Form);
