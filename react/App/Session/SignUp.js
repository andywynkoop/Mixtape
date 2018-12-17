import { connect } from 'react-redux-lite';
import { signup, login, clear } from '../../actions';
import Form from './Form';

const mstp = state => ({
  type: "Sign Up",
  loggedIn: state.session,
  errors: state.errors.session
});

const mdtp = dispatch => ({
  submit: user => dispatch(signup(user)),
  demo: () => dispatch(login({ email: "Andy5@email.com", password: "password" })),
  clear: () => dispatch(clear())
});

export default connect(mstp, mdtp)(Form);
