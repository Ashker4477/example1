import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { signin } from "../Actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

function SigninScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const history = useHistory();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  return (
    <div className="signin">
      <form onSubmit={submitHandler}>
        {error ? <MessageBox>{error}</MessageBox> : null}
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
            {loading ? <LoadingBox /> : null}
          <button type="submit">Login</button>
          </div>
      </form>
    </div>
  );
}

export default SigninScreen;
