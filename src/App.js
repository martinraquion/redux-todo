import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import TodoContainer from "./components/TodoContainer";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoContainer />
      </div>
    </Provider>
  );
}

export default App;
