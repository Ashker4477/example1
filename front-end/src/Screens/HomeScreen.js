import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";

function HomeScreen() {
  const [expanded, setExpanded] = useState(false);
  const [item, setItem] = useState([]);
  const [values, setValues] = useState({
    one: {
      checked: false,
      value: "",
    },
    two: {
      checked: false,
      value: "",
    },
    three: {
      checked: false,
      value: "",
    },
  });
  const history = useHistory();
  const userlog = localStorage.getItem("userlog");

  const signoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("userlog");
    history.push('/')
  };
  useEffect(() => {
    if (!userlog) {
      history.push("/signin");
    }
  }, [history, userlog]);


  const handleChange = useCallback((e) => {
    setValues((prevVal) => {
      const newVal = { ...prevVal };
      newVal[e.target.name].checked = e.target.checked;
      newVal[e.target.name].value = e.target.value;
      return newVal;
    });
  }, []);

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
    const obArray = Object.entries(values)
      .filter((ob) => ob[1].checked)
      .map((ob) => ob[1].value);
    setItem([...item, obArray]);
  };

  return (
    <div className="row center">
      <form onSubmit={submitHandler}>
        <div className="box">
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
                  name="one"
                  value="value added for 1 "
                  checked={values.one.checked}
                  onChange={handleChange}
                />
                <strong>value added for 1</strong>
              </label>
              <label htmlFor="two">
                <input
                  type="checkbox"
                  name="two"
                  value="value added for 2 "
                  checked={values.two.checked}
                  onChange={handleChange}
                />
                <strong>value added for 2</strong>
              </label>
              <label htmlFor="three">
                <input
                  type="checkbox"
                  name="three"
                  value="value added for 3 "
                  checked={values.three.checked}
                  onChange={handleChange}
                />
                <strong>value added for 3</strong>
              </label>
            </div>
          </div>
          <div className="primary">
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
      <div>
        <button onClick={signoutHandler}>Signout</button>
      </div>
      {item ? (
        <table>
          <tbody>
            <tr>
              <th>Sl.No</th>
              <th>Description</th>
            </tr>
            {item.map((ite, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{ite}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : null}
    </div>
  );
}

export default HomeScreen;
