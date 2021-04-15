import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { signout } from "../Actions/userActions";

function HomeScreen() {
  const [expanded, setExpanded] = useState(false);
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);

  const showCheckboxes = (e) => {
    e.preventDefault();
    const checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
      checkboxes.style.display = "block";
      setExpanded(true);
    } else {
      checkboxes.style.display = "none";
      setExpanded(false);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    
  };
  return (
    <div className="home">
      <form onSubmit={submitHandler}>
        <div className="multiselect">
          <div className="selectBox" onClick={showCheckboxes}>
            <select>
              <option>Select an option</option>
            </select>
            <div className="overSelect"></div>
          </div>
          <div id="checkboxes">
            <label htmlFor="one">
              <input
                type="checkbox"
                id="one"
                value={one}
                onChange={(e) => setOne(e.target.checked)}
              />
              First checkbox
            </label>
            <label htmlFor="two">
              <input
                type="checkbox"
                id="two"
                value={two}
                onChange={(e) => setTwo(e.target.checked)}
              />
              Second checkbox
            </label>
            <label htmlFor="three">
              <input
                type="checkbox"
                id="three"
                value={three}
                onChange={(e) => setThree(e.target.checked)}
              />
              Third checkbox
            </label>
          </div>
        </div>
        <div className="primary">
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}

export default HomeScreen;
