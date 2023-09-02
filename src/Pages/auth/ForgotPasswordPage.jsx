import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Imag from "../../Components/Images/logo.png"; 
import Back from "../../Components/Images/arrow.png";
import { Link } from "react-router-dom";
// import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import toast from 'react-hot-toast'

const ForgotPasswordPage = () => {
    // const navigate = useNavigate();
    // const { currentUser } = useAuth();
    const [email, setEmail] = useState('');
  
    // useEffect(() => {  
    //   if (currentUser && currentUser.password) {
    //     navigate("/dashboard");
    //   } // eslint-disable-next-line
    // }, [currentUser]);

    const handleResetPassword = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post(
              `${process.env.REACT_APP_BACKEND_URL}/api/hospital-forgot-password`,
              { email }
            );
      
            if (response.status === 200) {
            toast.success(response.data.message)
            }
          } catch (error) {
            console.error("Error sending password reset email:", error);
          }
    }

  return (
    <>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ marginTop: "90px" }}
      >
        <div className="container ">
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
                      className=" d-flex flex-column align-items-center justify-content-center "
                      style={{ margin: "200px 0" }}
                    >
                      <img
                        src={Imag}
                        alt="LOGO"
                        className="w-15 h-15 mt-5"
                      ></img>
                      <h1
                        className="text-white fw-bold"
                        style={{ letterSpacing: "4px", fontSize: "55px" }}
                      >
                        LetoSave
                      </h1>
                    </div>
                  </div>
                  <form className="col-md-6 g-5" onSubmit={handleResetPassword}>
                    <div
                      className="card-body text-black d-flex flex-column  justify-content-center"
                      style={{ margin: "200px 0" }}
                    >
                      <h2 className="mb-2 fw-bold" style={{ color: "#064FB8" }}>
                        Forgot password?
                      </h2>
                      <p className="">
                        No worries, we'll send you reset instructions.
                      </p>

                      <div className="form-outline">
                        <label>Email address</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e)=>{setEmail(e.target.value)}}
                          className="form-control form-control-lg mt-1"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="d-grid gap-2 mt-4">
                        <Button
                          type="submit"
                          disabled={
                            !email
                          }
                          className="text-decoration-none text-center  text-white rounded p-3 fw-semibold"
                          style={{ backgroundColor: "#064FB8" }}
                        >
                          Reset Password
                        </Button>
                      </div>
                      <div
                        className=" mt-4 rounded d-flex justify-content-center border border-black"
                        style={{ padding: "12px" }}
                      >
                        <Link
                          to="/login"
                          size="lg"
                          className="text-decoration-none text-dark"
                        >
                          <img
                            src={Back}
                            alt="Back"
                            style={{ width: "20px", height: "20px" }}
                          ></img>{" "}
                          Back to log in
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ForgotPasswordPage;
