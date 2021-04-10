import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { signout } from "../Actions/userActions";

function HomeScreen() {
  const [name, setName] = useState("");
  const [car, setCar] = useState("Volvo");
  const [agree, setAgree] = useState(false);
  const [item, setItem] = useState([]);

  const history = useHistory();
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/signin");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(name, car, agree);
    setItem([...item, { name, car, agree }]);
    // console.log(item);
  };

  const signoutHandler = (e) => {
    e.preventDefault();
    dispatch(signout());
  };
  return (
    <div className="home">
      <div className="d-flex">
        <form onSubmit={submitHandler} className="card">
          <h2>HomeScreen</h2>
          <div className="card-body">
            <div className="d-flex">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                placeholder="Enter Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="d-flex" id="check">
              <input
                type="checkbox"
                id="agree"
                required
                value={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <span htmlFor="agree">Do you have a Car!.</span>
            </div>
            <div className="d-flex box">
              <label htmlFor="cars">Choose a car:</label>
              <select
                name="cars"
                id="cars"
                required
                onChange={(e) => setCar(e.target.value)}
              >
                <option>Volvo</option>
                <option>Saab</option>
                <option>Opel</option>
                <option>Audi</option>
              </select>
            </div>
            <div className="row center mb-2">
              <input type="submit" value="Submit"></input>
            </div>
            <div className="row center mb-2">
              <button onClick={signoutHandler}>Signout</button>
            </div>
          </div>
        </form>
      </div>
      <div className="row center">
        <ul>
          {item.map((data, index) => (
            <li key={index}>
              {data.name} {data.car} {data.agree}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomeScreen;
