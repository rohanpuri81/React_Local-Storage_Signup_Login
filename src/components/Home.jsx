import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Sign_img from "./Sign_img";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [inpVal, setInpVal] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });
  const [data, setData] = useState([]);
  const getData = (e) => {
    const { value, name } = e.target;

    setInpVal(() => {
      return {
        ...inpVal,
        [name]: value,
      };
    });
  };
  const addData = (e) => {
    e.preventDefault();
    const { name, email, date, password } = inpVal;

    if (name === "" || date === "" || password === "") {
      alert("Please Enter All the details");
      return;
    } else if (password.length < 6) {
      alert("Use a strong password and should have minimum 6 characters");
    } else if (!email.includes("@")) {
      alert("Enter correct Email Address");
    } else {
      setData([...data, inpVal]);
      let newData = [...data, inpVal];
      localStorage.setItem("useryoutube", JSON.stringify(newData));
      setInpVal({
        name: "",
        email: "",
        date: "",
        password: "",
      });
    }
  };
  return (
    <>
      <div className="container mt-5">
        <section className="d-flex justify-content-around">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="name"
                  value={inpVal.name}
                  onChange={getData}
                  placeholder="Enter Your Name"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  value={inpVal.email}
                  onChange={getData}
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="date"
                  name="date"
                  value={inpVal.date}
                  onChange={getData}
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  value={inpVal.password}
                  name="password"
                  onChange={getData}
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                variant="primary"
                style={{ background: "rgb(67,185,127)", border: "none" }}
                className="col-lg-6"
                type="submit"
                onClick={addData}
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Already Have an Account <NavLink to={"/login"}>SignIn</NavLink>
            </p>
          </div>
          <Sign_img />
        </section>
      </div>
    </>
  );
};

export default Home;
