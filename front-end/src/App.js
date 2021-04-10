import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import SigninScreen from "./Screens/SigninScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/signin" component={SigninScreen} />
        <Route path="/" component={HomeScreen} exact />
      </Router>
    </div>
  );
}

export default App;
