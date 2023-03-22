import logo from "./logo.svg";
import "./App.css";
import styles from "./App.module.scss";
import { Button } from "antd";
import { Provider } from "react-redux";
import store from "./store";
// import * as moment from "moment";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className={styles.error}>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button type="primary">Primary Button</Button>
        </header>
      </div>
    </Provider>
  );
}

export default App;
