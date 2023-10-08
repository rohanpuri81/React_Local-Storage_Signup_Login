import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState([]);

  let todayDate = new Date().toISOString().slice(0, 10);
  const Birthday = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      let user = JSON.parse(getuser);
      user = JSON.parse(user);
      setLoginData(user);
      const userBirth = user.map((ele, ind) => {
        return ele.date === todayDate;
      });
      if (userBirth) {
        setTimeout(() => {
          console.log("okk");
          handleShow(true);
        }, 3000);
      }
    }
  };
  useEffect(() => {
    Birthday();
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const userLogout = () => {
    localStorage.removeItem("user_login");
    navigate("/");
  };
  return (
    <div>
      {loginData.length === 0 ? (
        "Error"
      ) : (
        <>
          <h1 style={{ textAlign: "center" }}>Details Page</h1>
          <h1>{loginData[0].name}</h1>
          <button onClick={userLogout}>Logout</button>
          {loginData[0].date === todayDate ? (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Happy Birthday......</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Thank You
                </Button>
              </Modal.Footer>
            </Modal>
          ) : null}
        </>
      )}
    </div>
  );
};

export default Details;
