import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Imag from "../../Components/Images/logo.png";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";
import { toast } from "react-hot-toast";

const WellComeBackPage = () => {
  const { login, setIsLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/hospital-login`,
        {
          email,
          password,
        }
      );
      toast.success(response.data.message);
      login(response.data.token)
      setIsLoggedIn(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ marginTop: "70px" }}
      >
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col">
              <div
                className="card card-registration"
                style={{ borderColor: "white" }}
              >
                <div className="row g-5">
                  <div
                    className="col-md-6 d-none d-md-block rounded"
                    style={{ backgroundColor: "#064FB8" }}
                  >
                    <div
                      className="d-flex flex-column align-items-center justify-content-center"
                      style={{ margin: "160px 0" }}
                    >
                      <img
                        src={Imag}
                        alt="LOGO"
                        className="w-15 h-15 mt-5 pt-5"
                      ></img>
                      <h1
                        className="text-white fw-bold"
                        style={{ letterSpacing: "4px", fontSize: "55px" }}
                      >
                        LetoSave
                      </h1>
                    </div>
                  </div>
                  <div className="col-md-6 g-5">
                    <div
                      className="card-body text-black d-flex flex-column justify-content-center"
                      style={{ margin: "160px 0" }}
                    >
                      <h2
                        className="mb-2 fw-bold "
                        style={{ color: "#064FB8" }}
                      >
                        Welcome back!
                      </h2>
                      <p className="">
                        Request a one-time password to log into your account{" "}
                        <br></br> and access all applications.
                      </p>

                      <Form onSubmit={handleSubmit}>
                        <Form.Floating className="mb-4 mt-3">
                          <Form.Control
                            id="floatingInputCustom"
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                          />
                          <label htmlFor="floatingInputCustom">
                            Email Address
                          </label>
                        </Form.Floating>
                        <Form.Floating className="mb-4">
                          <Form.Control
                            id="floatingPasswordCustom"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                          />
                          <label htmlFor="floatingPasswordCustom">
                            Password
                          </label>
                        </Form.Floating>
                        <div className="d-flex justify-content-between">
                          <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check
                              type="checkbox"
                              label="Remember login"
                            />
                          </Form.Group>

                          <Link
                            to="/forgot-password"
                            className="text-decoration-none"
                          >
                            Forgot password?
                          </Link>
                        </div>
                        <div className="d-grid gap-2 mt-4">
                          <button
                            className="btn text-decoration-none text-center  text-white rounded p-3 fw-semibold"
                            style={{ backgroundColor: "#064FB8" }}
                            type="submit"
                            disabled={
                                !email ||
                                !password
                            }
                          >
                            Login
                          </button>
                        </div>
                      </Form>

                      <div className="d-flex justify-content-center mt-5">
                        <p>
                          Don't have an account?{" "}
                          <Link to="/register" className="text-decoration-none">
                            Sign Up
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default WellComeBackPage;
