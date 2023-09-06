import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Imag from "../../Components/Images/logo.png";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";
import { toast } from "react-hot-toast";

const CreatingPasswordPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { login, setIsLoggedIn } = useAuth();

  useEffect(() => {
      const fetchTokenValidity = async () => {
        try { 
          const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/api/hospital-set-password/${id}`
          );
          console.log(response);
        } catch (error) {
          console.error("Error checking token validity:", error);
          navigate("/login");
        }
      };
      fetchTokenValidity(); // eslint-disable-next-line 
  }, []);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCreatePassword = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/api/hospital-set-password/${id}`,
          { password }
        );
        if (response.status === 200) {
          const responseData = response.data;
          const { token } = responseData;
          toast.success(responseData.message);
          login(token);
          setIsLoggedIn(true);
          navigate('/user/dashboard');
        } else {
          console.log("Password reset failed");
          toast.error(response.data.message);
        }
      } catch (error) {
        console.error("API error:", error);
        toast.error(error.response.data.message);
      }
    } else {
      console.log("Password and confirm password do not match");
    }
  };
  


  return (
    <>
      <Container
        className="d-flex justify-content-center align-items-center  "
        style={{ marginTop: "90px" }}
      >
        <div className="container ">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col">
              <div
                className="card card-registration"
                style={{ borderColor: "white" }}
              >
                <form className="row g-5" onSubmit={handleCreatePassword}>
                  <div
                    className="col-md-6 d-none d-md-block rounded"
                    style={{ backgroundColor: "#064FB8" }}
                  >
                    <div
                      className=" d-flex flex-column align-items-center justify-content-center mb-3"
                      style={{ margin: "200px 0" }}
                    >
                      <img
                        src={Imag}
                        alt="LOGO"
                        className="w-15 h-15 mt-5"
                      ></img>
                      <h1
                        className="text-white fw-bold"
                        style={{
                          letterSpacing: "4px",
                          fontSize: "55px",
                        }}
                      >
                        LetoSave
                      </h1>
                    </div>
                  </div>
                  <div className="col-md-6 g-5">
                    <div
                      className="card-body text-black  d-flex flex-column  justify-content-center"
                      style={{ margin: "200px 0" }}
                    >
                      <h2
                        className="mb-2  fw-bold"
                        style={{ color: "#064FB8" }}
                      >
                        Create Password
                      </h2>
                      <p className="">Enter Password for your new login</p>

                      <div className="form-outline mb-4">
                        <label>Create Password</label>
                        <input
                          type="password"
                          className="form-control form-control-lg mt-1"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label>Re-type Create Password</label>
                        <input
                          type="password"
                          className="form-control form-control-lg mt-1"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>

                      <div className="d-grid gap-2">
                        <Button
                          variant="primary"
                          type="submit"
                          size="lg"
                          disabled={!password || !confirmPassword}
                        >
                          Create Password
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CreatingPasswordPage;
