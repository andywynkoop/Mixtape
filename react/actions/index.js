export const RECEIVE_CURRENT_USER = "RECEIVE_USER";
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const signup = user => dispatch => 
  $.ajax({ 
    method: "post",
    url: "/api/users",
    data: { user }
  }).then(
    user => dispatch({ type: RECEIVE_CURRENT_USER, user }),
    errors => dispatch({ type: RECEIVE_SESSION_ERRORS, errors })
    );

export const login = user => dispatch =>
  $.ajax({
    method: "post",
    url: "/api/session",
    data: { user }
  }).then(
    user => dispatch({ type: RECEIVE_CURRENT_USER, user }),
    errors => dispatch({ type: RECEIVE_SESSION_ERRORS, errors })
    );

export const logout = () => dispatch => 
  $.ajax({
    method: "delete",
    url: '/api/session',
  }).then(() => 
    dispatch({ type: REMOVE_CURRENT_USER })
  );

export const clear = () => ({ type: CLEAR_ERRORS });