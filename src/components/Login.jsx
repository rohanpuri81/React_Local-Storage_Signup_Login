import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Sign_img from "./Sign_img";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();

  const [inpVal, setInpVal] = useState({
    email: "",
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
    const getuserArr = localStorage.getItem("useryoutube");

    e.preventDefault();
    const { email, password } = inpVal;

    if (password === "") {
      alert("Please Enter All the details");
      return;
    } else if (password.length < 6) {
      alert("Use a strong password and should have minimum 6 characters");
    } else if (!email.includes("@")) {
      alert("Enter correct Email Address");
    } else {
      if (getuserArr.length && getuserArr.length) {
        const userData = JSON.parse(getuserArr);
        const userLogin = userData.filter((ele, ind) => {
          return ele.email === email && ele.password === password;
        });
        if (userLogin.length === 0) {
          alert("Invalid details");
        } else {
          console.log("user Logged in successfully..");
          localStorage.setItem("user_login", JSON.stringify(getuserArr));
          history("/details");

          setInpVal({
            email: "",
            password: "",
          });
        }
      }
    }
  };
  return (
    <div className="container mt-5">
      <section className="d-flex justify-content-around">
        <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
          <h3 className="text-center col-lg-6">Sign In</h3>
          <Form>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Control
                type="email"
                value={inpVal.email}
                onChange={getData}
                name="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
              <Form.Control
                type="password"
                value={inpVal.password}
                onChange={getData}
                name="password"
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
            Already Have an Account <span>SignIn</span>
          </p>
        </div>
        <Sign_img />
      </section>
    </div>
  );
};

export default Login;
