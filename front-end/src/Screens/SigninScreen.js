import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../Actions/userContext";

function SigninScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useContext(UserContext);

  const history = useHistory();
  // const dispatch = useDispatch();

  const submitHandler = async(e) => {
    e.preventDefault();
    if(email === user.email && password===user.password){
      localStorage.setItem("userlog",user)
      history.push("/");
    }
    // dispatch(signin(email, password));
  };
  const userdet= localStorage.getItem("userlog")
  ? JSON.parse(localStorage.getItem("userlog"))
  : null;
  useEffect(() => {
    if (userdet) {
      history.push("/");
    }
  }, [history, userdet]);

  return (
    <div className="signin">
      <form onSubmit={submitHandler}>
        {/* {error ? <MessageBox>{error}</MessageBox> : null} */}
        <div className="card">
          <h2>Login</h2>
          <div className="card-body">
            <div className="col">
              <div className="d-flex">
                <i className="fa fa-user"></i>
                <input
                  type="email"
                  placeholder="username or email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="d-flex">
                <i className="fa fa-lock"></i>
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            </div>
            {/* {loading ? <LoadingBox /> : null} */}
          <button type="submit">Login</button>
          </div>
      </form>
    </div>
  );
}

export default SigninScreen;
