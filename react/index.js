import React from 'react-lite';
import { createStore, applyMiddleware } from 'redux-lite';
import { Provider } from 'react-redux-lite';
import rootReducer from './reducers';
import thunk from './middlewares/thunk';
import App from './App';

document.addEventListener("DOMContentLoaded", () => {
  let preloaded;
  if (window.currentUser) {
    const { currentUser: user } = window;
    preloaded = {
      entities: {
        users: {
          [user.id]: user
        }
      },
      session: user.id
    }
  } else {
    preloaded = {}
  }
  const store = createStore(rootReducer, preloaded, applyMiddleware(thunk));
  window.store = store;
  React.render(
    <Provider store={store} Component={App} />,
    document.getElementById("app")
  );
});