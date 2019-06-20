import { AppRegistry, AsyncStorage } from "react-native";
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./src/App";
import { name as appName } from "./app.json";
import reducer from "./src/reducers";
import { handleAuth } from "./src/actions";
import { USER } from "./src/constants";

const store = createStore(reducer, {});

const getAuthenticatedUser = () => {
  AsyncStorage.getItem(USER, (err, user) => {
    if (err) {
      console.log({ err });
      store.dispatch(handleAuth(false));
    } else {
      if (user) {
        store.dispatch(handleAuth(true));
      } else {
        store.dispatch(handleAuth(false));
      }
    }
  });
};

getAuthenticatedUser();

const AppWithStore = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppWithStore);
