import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { UserProvider } from "./Actions/userContext";
import HomeScreen from "./Screens/HomeScreen";
import SigninScreen from "./Screens/SigninScreen";

function App() {
  const [user] = useState({
    email: "user@example.com",
    password: "1234",
    token: "123456",
  });
  const ProviderValue = useMemo(() => user, [user]);
  return (
    <UserProvider value={ProviderValue}>
      <div className="App">
        <Router>
          <Route path="/signin" component={SigninScreen} />
          <Route path="/" component={HomeScreen} exact />
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
