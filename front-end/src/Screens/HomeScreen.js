import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { signout } from "../Actions/userActions";

function HomeScreen() {
  const [expanded, setExpanded] = useState(false);
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [item, setItem] = useState([]);

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
    if (one && !two && !three) {
      const pack = "value added for 1";
      setItem([...item, { pack }]);
    }
    if (!one && two && !three) {
      const pack = "value added for 2";
      setItem([...item, { pack }]);
    }
    if (!one && !two && three) {
      const pack = "value added for 3";
      setItem([...item, { pack }]);
    }
    if (one && two && three) {
      const pack1 = "value added for 1";
      const pack2 = "value added for 2";
      const pack3 = "value added for 3";
      const pack = { pack1, pack2, pack3 };
      setItem([...item, {pack}]);
    }
    console.log(item);
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
              value added for 1
            </label>
            <label htmlFor="two">
              <input
                type="checkbox"
                id="two"
                value={two}
                onChange={(e) => setTwo(e.target.checked)}
              />
              value added for 2
            </label>
            <label htmlFor="three">
              <input
                type="checkbox"
                id="three"
                value={three}
                onChange={(e) => setThree(e.target.checked)}
              />
              value added for 3
            </label>
          </div>
        </div>
        <div className="primary">
          <button type="submit">Save</button>
        </div>
      </form>
      
        <tr>
            <th>Sl.No:</th>
            <th>Description</th>
          </tr>(
           { item.pack ? item.map((i, v) => {
              <tr>
                <td>{i + 1}</td>
                <td>{v.pack}</td>
              </tr>;
            }): null}
          )
        
    </div>
  );
}

export default HomeScreen;
