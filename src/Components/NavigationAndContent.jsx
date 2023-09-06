import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import filter from "../Components/Assets/Icons/filter.png";
import im from "../Components/Images/wallet.png";
import im1 from "../Components/Images/layer1.png";
import { Link } from "react-router-dom";
import WithdrawModal from "./WithdrawModal";
import { toast } from "react-hot-toast";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

const NavigationAndContent = () => {
  const { currentUser, token } = useAuth();

  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    newConfirmPassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    if(form.newPassword === form.newConfirmPassword){
      if(form.currentPassword === form.newPassword){
        toast.error("New Password would be Change");
      }else{
        try {
          const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/api/hospital-change-password`,
            {
              currentPassword: form.currentPassword,
              newPassword: form.newPassword,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
  
          if (response.status === 200) {
            toast.success("Password updated successfully");
            setForm({
              currentPassword: "",
              newPassword: "",
              newConfirmPassword: ""
            })
          } else {
            console.log("Password change failed");
          }
        } catch (error) {
          console.error("API error:", error);
          toast.error(error.response.data.message)
        }
      }
    }else{
      toast.error('New Password and Confirm Password not Matched!')
    }
  }

  const [activeTab, setActiveTab] = useState("profile");
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const renderContent = () => {
    const handleLogoutClick = () => {
      setShowLogoutModal(true);
    };

    const handleLogoutClose = () => {
      setShowLogoutModal(false);
    };

    const handleLogoutConfirm = () => {

      setShowLogoutModal(false);
    };
    switch (activeTab) {
      case "profile":
        return (
          <>
            <div className="">
              <div className="pe-0 ps-0 pb-0 pb-md-5 pe-md-5 ps-md-5">
                <div>
                  <h3 className="fw-bold " style={{ fontSize: "1.4rem" }}>
                    General
                  </h3>
                  <h5 className="border-bottom pb-4">
                    Basic info, like your name and address that will displayed
                    in public
                  </h5>
                </div>
                <div className="row mt-4">
                  <div className="col-4 col-md-3">
                    <h4>Hospital Name</h4>
                    <h4 className="mt-4">Address</h4>
                    <h4 className="mt-4">Phone Number</h4>
                    <h4 className="mt-4">Email Address</h4>
                  </div>
                  <div className="col-6 col-md-3">
                    <h4 className="fw-semibold ">
                      {currentUser && currentUser.hospitalName}
                    </h4>
                    <h4 className="fw-semibold mt-4">
                      {currentUser && currentUser.district},
                      {currentUser && currentUser.subCounty}
                      <br />
                      {currentUser && currentUser.zipCode}
                    </h4>
                    <h4 className="fw-semibold mt-4">
                      {`+${currentUser && currentUser.phone}`}
                    </h4>
                    <h4 className="fw-semibold mt-4">
                      {currentUser && currentUser.email}
                    </h4>
                  </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-3 g-md-5 mt-1 me-md-5 pe-md-5">
                  <div className="col">
                    <h4 className="fw-semibold ">
                      Upload Certificate of Registration
                    </h4>
                    <div className="card rounded-lg mt-3">
                      <img
                        src={`/images/uploads/${currentUser && currentUser.certificationImage}`}
                        className="card-img-top"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="col">
                    <h4 className="fw-semibold ">Hospital License</h4>
                    <div className="card mt-3">
                      <img
                        src={`/images/uploads/${currentUser && currentUser.licenseImage}`}
                        className="card-img-top"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case "password":
        return (
          <>
            <div className="pe-0 ps-0 pb-0 pb-md-5 pe-md-5 ps-md-5">
              <div>
                <h3 className="fw-bold" style={{ fontSize: "1.4rem" }}>
                  Password
                </h3>
                <h5 className="border-bottom pb-4">
                  Enter your current and new password to reset your password
                </h5>
              </div>
              <form onSubmit={handleUpdatePassword}>
                <div className="row mt-4 border-bottom pb-4">
                  <label
                    className="col-sm-2 col-form-label mt-1"
                  >
                    Current Password
                  </label>
                  <div className="col-sm-6">
                    <input
                      type="password"
                      className="form-control"
                      name="currentPassword"
                      value={form.currentPassword}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="row mt-4 ">
                  <label
                    className="col-sm-2 col-form-label mt-1"
                  >
                    New Password
                  </label>
                  <div className="col-sm-6">
                    <input
                      type="password"
                      className="form-control"
                      name="newPassword"
                      value={form.newPassword}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="row mt-4 ">
                  <label
                    className="col-sm-2 col-form-label mt-1"
                  >
                    Confirm Password
                  </label>
                  <div className="col-sm-6">
                    <input
                      type="password"
                      className="form-control"
                      name="newConfirmPassword"
                      value={form.newConfirmPassword}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="row mt-3 ">
                  <div className="col-sm-2 "></div>
                  <div className="col-sm-6 mt-4 d-flex justify-content-center flex-wrap">
                    <button
                      type="submit"
                      disabled={
                        !form.currentPassword ||
                        !form.newPassword ||
                        !form.newConfirmPassword
                      }
                      className="btn btn-lg me-4"
                      style={{
                        backgroundColor: "#064FB8",
                        color: "white",
                        padding: "11px 60px",
                        fontSize: "1.1rem",
                      }}
                    >
                      Update Password
                    </button>
                    <button
                      type="reset"
                      className="btn btn-outline-secondary mt-md-0 mt-3"
                      style={{ padding: "12px 70px" }}
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </>
        );
      case "bank":
        return (
          <>
            <div className="p-2 p-md-3">
              <div className="row justify-content-between ">
                <div className="col-12 col-sm-6">
                  <Link to="/user/Add-Bank-Account">
                    <Button
                      variant="secondary"
                      size="lg"
                      active
                      style={{ backgroundColor: "#064FB8" }}
                      className="add-butoon"
                    >
                      + Add New
                    </Button>
                  </Link>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="add-butoon1"
                    active
                    style={{ backgroundColor: "#06B871" }}
                  >
                    <img src='/images/bank.png' className="me-3 mb-1" alt="" />
                    Bank Account
                  </Button>
                </div>
                <div className="col-12 col-sm-6 d-flex mt-md-0 mt-3">
                  <input
                    className="form-control me-3"
                    style={{ width: "60%" }}
                    placeholder="Search here..."
                  />

                  <Button
                    variant="secondary"
                    size="lg"
                    className="add-butoon"
                    active
                    style={{ backgroundColor: "#6787B6" }}
                  >
                    <img src={filter} className=" mb-1 me-2" alt="" />
                    Filter
                  </Button>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table table-hover mt-4">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        style={{
                          backgroundColor: "#EFF5FF",
                          fontSize: "0.8em",
                          color: "#064FB8",
                        }}
                      >
                        <input
                          className="form-check-input me-3 p-2"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label
                          className="form-check-label mt-1"
                          for="invalidCheck"
                        >
                          Bank
                        </label>
                      </th>
                      <th
                        scope="col"
                        style={{
                          backgroundColor: "#EFF5FF",
                          fontSize: "0.8em",
                          color: "#064FB8",
                        }}
                      >
                        Account Name
                      </th>
                      <th
                        scope="col"
                        style={{
                          backgroundColor: "#EFF5FF",
                          fontSize: "0.8em",
                          color: "#064FB8",
                        }}
                      >
                        Account Number
                      </th>
                      <th
                        scope="col"
                        style={{
                          backgroundColor: "#EFF5FF",
                          fontSize: "0.8em",
                          color: "#064FB8",
                        }}
                      >
                        Phone Number
                      </th>
                      <th
                        scope="col"
                        style={{
                          backgroundColor: "#EFF5FF",
                          fontSize: "0.8em",
                          color: "#064FB8",
                        }}
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        style={{
                          backgroundColor: "#EFF5FF",
                          fontSize: "0.8em",
                          color: "#064FB8",
                        }}
                      >
                        Total Withdraw
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ fontSize: "0.9em" }}>
                      <th scope="row">
                        <input
                          className="form-check-input me-3 p-2 mt-2"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label
                          className="form-check-label mt-1 fw-normal mt-2"
                          for="invalidCheck"
                          style={{ fontSize: "200" }}
                        >
                          DFCU Bank
                        </label>
                      </th>
                      <td className="pt-3">Bale</td>
                      <td className="pt-3">30396324</td>
                      <td className="pt-3">+91 2345 233546</td>
                      <td>
                        <span className="badge text-bg-warning p-2 me-2 mt-2 ">
                          PENDING
                        </span>{" "}
                      </td>
                      <td className="pt-3">UGX3437</td>
                    </tr>
                    <tr style={{ fontSize: "0.9em" }}>
                      <th scope="row">
                        <input
                          className="form-check-input me-3 p-2 mt-2"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label
                          className="form-check-label mt-1 fw-normal mt-2"
                          for="invalidCheck"
                          style={{ fontSize: "200" }}
                        >
                          DFCU Bank
                        </label>
                      </th>
                      <td className="pt-3">Bale</td>
                      <td className="pt-3">30396324</td>
                      <td className="pt-3">+91 2345 233546</td>
                      <td>
                        <span className="badge text-bg-warning p-2 me-2 mt-2 ">
                          PENDING
                        </span>{" "}
                      </td>
                      <td className="pt-3">UGX3437</td>
                    </tr>
                    <tr style={{ fontSize: "0.9em" }}>
                      <th scope="row">
                        <input
                          className="form-check-input me-3 p-2 mt-2"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label
                          className="form-check-label mt-1 fw-normal mt-2"
                          for="invalidCheck"
                          style={{ fontSize: "200" }}
                        >
                          DFCU Bank
                        </label>
                      </th>
                      <td className="pt-3">Bale</td>
                      <td className="pt-3">30396324</td>
                      <td className="pt-3">+91 2345 233546</td>
                      <td>
                        <span className="badge text-bg-warning p-2 me-2 mt-2 ">
                          PENDING
                        </span>{" "}
                      </td>
                      <td className="pt-3">UGX3437</td>
                    </tr>
                    <tr style={{ fontSize: "0.9em" }}>
                      <th scope="row">
                        <input
                          className="form-check-input me-3 p-2 mt-2"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label
                          className="form-check-label mt-1 fw-normal mt-2"
                          for="invalidCheck"
                          style={{ fontSize: "200" }}
                        >
                          DFCU Bank
                        </label>
                      </th>
                      <td className="pt-3">Bale</td>
                      <td className="pt-3">30396324</td>
                      <td className="pt-3">+91 2345 233546</td>
                      <td>
                        <span className="badge text-bg-warning p-2 me-2 mt-2 ">
                          PENDING
                        </span>{" "}
                      </td>
                      <td className="pt-3">UGX3437</td>
                    </tr>
                    <tr style={{ fontSize: "0.9em" }}>
                      <th scope="row">
                        <input
                          className="form-check-input me-3 p-2 mt-2"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label
                          className="form-check-label mt-1 fw-normal mt-2"
                          for="invalidCheck"
                          style={{ fontSize: "200" }}
                        >
                          DFCU Bank
                        </label>
                      </th>
                      <td className="pt-3">Bale</td>
                      <td className="pt-3">30396324</td>
                      <td className="pt-3">+91 2345 233546</td>
                      <td>
                        <span className="badge text-bg-warning p-2 me-2 mt-2 ">
                          PENDING
                        </span>{" "}
                      </td>
                      <td className="pt-3">UGX3437</td>
                    </tr>
                    <tr style={{ fontSize: "0.9em" }}>
                      <th scope="row">
                        <input
                          className="form-check-input me-3 p-2 mt-2"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label
                          className="form-check-label mt-1 fw-normal mt-2"
                          for="invalidCheck"
                          style={{ fontSize: "200" }}
                        >
                          DFCU Bank
                        </label>
                      </th>
                      <td className="pt-3">Bale</td>
                      <td className="pt-3">30396324</td>
                      <td className="pt-3">+91 2345 233546</td>
                      <td>
                        <span className="badge text-bg-warning p-2 me-2 mt-2 ">
                          PENDING
                        </span>{" "}
                      </td>
                      <td className="pt-3">UGX3437</td>
                    </tr>
                    <tr style={{ fontSize: "0.9em" }}>
                      <th scope="row">
                        <input
                          className="form-check-input me-3 p-2 mt-2"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label
                          className="form-check-label mt-1 fw-normal mt-2"
                          for="invalidCheck"
                          style={{ fontSize: "200" }}
                        >
                          DFCU Bank
                        </label>
                      </th>
                      <td className="pt-3">Bale</td>
                      <td className="pt-3">30396324</td>
                      <td className="pt-3">+91 2345 233546</td>
                      <td>
                        <span className="badge text-bg-warning p-2 me-2 mt-2 ">
                          PENDING
                        </span>{" "}
                      </td>
                      <td className="pt-3">UGX3437</td>
                    </tr>
                    <tr style={{ fontSize: "0.9em" }}>
                      <th scope="row">
                        <input
                          className="form-check-input me-3 p-2 mt-2"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label
                          className="form-check-label mt-1 fw-normal mt-2"
                          for="invalidCheck"
                          style={{ fontSize: "200" }}
                        >
                          DFCU Bank
                        </label>
                      </th>
                      <td className="pt-3">Bale</td>
                      <td className="pt-3">30396324</td>
                      <td className="pt-3">+91 2345 233546</td>
                      <td>
                        <span className="badge text-bg-warning p-2 me-2 mt-2 ">
                          PENDING
                        </span>{" "}
                      </td>
                      <td className="pt-3">UGX3437</td>
                    </tr>
                    <tr style={{ fontSize: "0.9em" }}>
                      <th scope="row">
                        <input
                          className="form-check-input me-3 p-2 mt-2"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label
                          className="form-check-label mt-1 fw-normal mt-2"
                          for="invalidCheck"
                          style={{ fontSize: "200" }}
                        >
                          DFCU Bank
                        </label>
                      </th>
                      <td className="pt-3">Bale</td>
                      <td className="pt-3">30396324</td>
                      <td className="pt-3">+91 2345 233546</td>
                      <td>
                        <span className="badge text-bg-warning p-2 me-2 mt-2 ">
                          PENDING
                        </span>{" "}
                      </td>
                      <td className="pt-3">UGX3437</td>
                    </tr>
                    <tr style={{ fontSize: "0.9em" }}>
                      <th scope="row">
                        <input
                          className="form-check-input me-3 p-2 mt-2"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label
                          className="form-check-label mt-1 fw-normal mt-2"
                          for="invalidCheck"
                          style={{ fontSize: "200" }}
                        >
                          DFCU Bank
                        </label>
                      </th>
                      <td className="pt-3">Bale</td>
                      <td className="pt-3">30396324</td>
                      <td className="pt-3">+91 2345 233546</td>
                      <td>
                        <span className="badge text-bg-warning p-2 me-2 mt-2 ">
                          PENDING
                        </span>{" "}
                      </td>
                      <td className="pt-3">UGX3437</td>
                    </tr>
                    <tr style={{ fontSize: "0.9em" }}>
                      <th scope="row">
                        <input
                          className="form-check-input me-3 p-2 mt-2"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label
                          className="form-check-label mt-1 fw-normal mt-2"
                          for="invalidCheck"
                          style={{ fontSize: "200" }}
                        >
                          DFCU Bank
                        </label>
                      </th>
                      <td className="pt-3">Bale</td>
                      <td className="pt-3">30396324</td>
                      <td className="pt-3">+91 2345 233546</td>
                      <td>
                        <span className="badge text-bg-warning p-2 me-2 mt-2 ">
                          PENDING
                        </span>{" "}
                      </td>
                      <td className="pt-3">UGX3437</td>
                    </tr>
                    <tr style={{ fontSize: "0.9em" }}>
                      <th scope="row">
                        <input
                          className="form-check-input me-3 p-2 mt-2"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label
                          className="form-check-label mt-1 fw-normal mt-2"
                          for="invalidCheck"
                          style={{ fontSize: "200" }}
                        >
                          DFCU Bank
                        </label>
                      </th>
                      <td className="pt-3">Bale</td>
                      <td className="pt-3">30396324</td>
                      <td className="pt-3">+91 2345 233546</td>
                      <td>
                        <span className="badge text-bg-warning p-2 me-2 mt-2 ">
                          PENDING
                        </span>{" "}
                      </td>
                      <td className="pt-3">UGX3437</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        );
      case "wallet":
        return (
          <>
            <div className="pt-3 px-1 px-md-5">
              <div
                className="d-flex justify-content-end"
                style={{ marginTop: "-20px", marginBottom: "30px" }}
              >
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={handleLogoutClick}
                  active
                  style={{ backgroundColor: "#064FB8" }}
                  className="add-butoon"
                >
                  Withdraw
                </Button>
                <WithdrawModal
                  show={showLogoutModal}
                  onClose={handleLogoutClose}
                  onLogout={handleLogoutConfirm}
                />
              </div>
              <div className="row">
                <div className="col-12 col-md-5">
                  <div
                    className={`box bg-primary text-white  mb-4 rounded d-flex align-items-center`}
                    style={{ paddingTop: "35px", paddingBottom: "35px" }}
                  >
                    <div className="heading">
                      <img src={im} alt="" className="ms-5"></img>
                    </div>
                    <div className="ms-4">
                      <div
                        className="number"
                        style={{ fontSize: "33px", fontWeight: "bolder" }}
                      >
                        UGX 158,800
                      </div>
                      <div className="number mt-2">
                        <h4 style={{ fontSize: "20px", fontWeight: "600" }}>
                          Total Wallet Balance
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-7">
                  <div
                    className={`box text-white  mb-4 rounded d-flex align-items-center`}
                    style={{
                      paddingTop: "35px",
                      paddingBottom: "35px",
                      backgroundColor: "#AD4CCF",
                    }}
                  >
                    <div className="heading">
                      <img src={im1} alt="" className="ms-5" />
                    </div>
                    <div className="ms-4">
                      <div
                        className="number mt-2"
                        style={{ fontSize: "40px", fontWeight: "bolder" }}
                      >
                        <h4 style={{ fontSize: "20px", fontWeight: "600" }}>
                          Total Withdraw
                        </h4>
                      </div>
                      <div
                        className="number"
                        style={{ fontSize: "33px", fontWeight: "bolder" }}
                      >
                        UGX 785,550.00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="fw-semibold mt-3">All Transactions</h4>
              <div className="table-responsive">
                <table className="table table-hover mt-2 ">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        style={{
                          backgroundColor: "#EFF5FF",
                          fontSize: "0.7em",
                          color: "#064FB8",
                        }}
                      >
                        <input
                          className="form-check-input me-3 p-2"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label
                          className="form-check-label mt-1"
                          for="invalidCheck"
                        >
                          Bank Account
                        </label>
                      </th>
                      <th
                        scope="col"
                        style={{
                          backgroundColor: "#EFF5FF",
                          fontSize: "0.7em",
                          color: "#064FB8",
                        }}
                      >
                        Tranx Date
                      </th>
                      <th
                        scope="col"
                        style={{
                          backgroundColor: "#EFF5FF",
                          fontSize: "0.7em",
                          color: "#064FB8",
                        }}
                      >
                        Transaction Id
                      </th>
                      <th
                        scope="col"
                        style={{
                          backgroundColor: "#EFF5FF",
                          fontSize: "0.7em",
                          color: "#064FB8",
                        }}
                      >
                        Amounts
                      </th>
                      <th
                        scope="col"
                        style={{
                          backgroundColor: "#EFF5FF",
                          fontSize: "0.7em",
                          color: "#064FB8",
                        }}
                      >
                        Balance
                      </th>
                      <th
                        scope="col"
                        style={{
                          backgroundColor: "#EFF5FF",
                          fontSize: "0.7em",
                          color: "#064FB8",
                        }}
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ fontSize: "0.9em" }}>
                      <th scope="row">
                        <input
                          className="form-check-input me-3 p-2 mt-2"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label
                          className="form-check-label mt-1 fw-normal mt-2"
                          for="invalidCheck"
                          style={{ fontSize: "200" }}
                        >
                          038343546453
                        </label>
                      </th>
                      <td className="pt-3">26/02/2023 | 12:42 PM</td>
                      <td className="pt-3">30396324</td>
                      <td className="pt-3">UGX 150,000</td>
                      <td className="pt-3">UGX 3437,00</td>
                      <td>
                        <span className="badge text-bg-warning p-2 me-2 mt-2 ">
                          PENDING
                        </span>{" "}
                      </td>
                    </tr>
                    <tr style={{ fontSize: "0.9em" }}>
                      <th scope="row">
                        <input
                          className="form-check-input me-3 p-2 mt-2"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label
                          className="form-check-label mt-1 fw-normal mt-2"
                          for="invalidCheck"
                          style={{ fontSize: "200" }}
                        >
                          038343546453
                        </label>
                      </th>
                      <td className="pt-3">26/02/2023 | 12:42 PM</td>
                      <td className="pt-3">30396324</td>
                      <td className="pt-3">UGX 150,000</td>
                      <td className="pt-3">UGX 3437,00</td>
                      <td>
                        <span className="badge text-bg-warning p-2 me-2 mt-2 ">
                          PENDING
                        </span>{" "}
                      </td>
                    </tr>
                    <tr style={{ fontSize: "0.9em" }}>
                      <th scope="row">
                        <input
                          className="form-check-input me-3 p-2 mt-2"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label
                          className="form-check-label mt-1 fw-normal mt-2"
                          for="invalidCheck"
                          style={{ fontSize: "200" }}
                        >
                          038343546453
                        </label>
                      </th>
                      <td className="pt-3">26/02/2023 | 12:42 PM</td>
                      <td className="pt-3">30396324</td>
                      <td className="pt-3">UGX 150,000</td>
                      <td className="pt-3">UGX 3437,00</td>
                      <td>
                        <span className="badge text-bg-warning p-2 me-2 mt-2 ">
                          PENDING
                        </span>{" "}
                      </td>
                    </tr>
                    <tr style={{ fontSize: "0.9em" }}>
                      <th scope="row">
                        <input
                          className="form-check-input me-3 p-2 mt-2"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label
                          className="form-check-label mt-1 fw-normal mt-2"
                          for="invalidCheck"
                          style={{ fontSize: "200" }}
                        >
                          038343546453
                        </label>
                      </th>
                      <td className="pt-3">26/02/2023 | 12:42 PM</td>
                      <td className="pt-3">30396324</td>
                      <td className="pt-3">UGX 150,000</td>
                      <td className="pt-3">UGX 3437,00</td>
                      <td>
                        <span className="badge text-bg-warning p-2 me-2 mt-2 ">
                          PENDING
                        </span>{" "}
                      </td>
                    </tr>
                    <tr style={{ fontSize: "0.9em" }}>
                      <th scope="row">
                        <input
                          className="form-check-input me-3 p-2 mt-2"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label
                          className="form-check-label mt-1 fw-normal mt-2"
                          for="invalidCheck"
                          style={{ fontSize: "200" }}
                        >
                          038343546453
                        </label>
                      </th>
                      <td className="pt-3">26/02/2023 | 12:42 PM</td>
                      <td className="pt-3">30396324</td>
                      <td className="pt-3">UGX 150,000</td>
                      <td className="pt-3">UGX 3437,00</td>
                      <td>
                        <span className="badge text-bg-warning p-2 me-2 mt-2 ">
                          PENDING
                        </span>{" "}
                      </td>
                    </tr>
                    <tr style={{ fontSize: "0.9em" }}>
                      <th scope="row">
                        <input
                          className="form-check-input me-3 p-2 mt-2"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label
                          className="form-check-label mt-1 fw-normal mt-2"
                          for="invalidCheck"
                          style={{ fontSize: "200" }}
                        >
                          038343546453
                        </label>
                      </th>
                      <td className="pt-3">26/02/2023 | 12:42 PM</td>
                      <td className="pt-3">30396324</td>
                      <td className="pt-3">UGX 150,000</td>
                      <td className="pt-3">UGX 3437,00</td>
                      <td>
                        <span className="badge text-bg-warning p-2 me-2 mt-2 ">
                          PENDING
                        </span>{" "}
                      </td>
                    </tr>
                    <tr style={{ fontSize: "0.9em" }}>
                      <th scope="row">
                        <input
                          className="form-check-input me-3 p-2 mt-2"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label
                          className="form-check-label mt-1 fw-normal mt-2"
                          for="invalidCheck"
                          style={{ fontSize: "200" }}
                        >
                          038343546453
                        </label>
                      </th>
                      <td className="pt-3">26/02/2023 | 12:42 PM</td>
                      <td className="pt-3">30396324</td>
                      <td className="pt-3">UGX 150,000</td>
                      <td className="pt-3">UGX 3437,00</td>
                      <td>
                        <span className="badge text-bg-warning p-2 me-2 mt-2 ">
                          PENDING
                        </span>{" "}
                      </td>
                    </tr>
                    <tr style={{ fontSize: "0.9em" }}>
                      <th scope="row">
                        <input
                          className="form-check-input me-3 p-2 mt-2"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label
                          className="form-check-label mt-1 fw-normal mt-2"
                          for="invalidCheck"
                          style={{ fontSize: "200" }}
                        >
                          038343546453
                        </label>
                      </th>
                      <td className="pt-3">26/02/2023 | 12:42 PM</td>
                      <td className="pt-3">30396324</td>
                      <td className="pt-3">UGX 150,000</td>
                      <td className="pt-3">UGX 3437,00</td>
                      <td>
                        <span className="badge text-bg-warning p-2 me-2 mt-2 ">
                          PENDING
                        </span>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container-fluid " style={{ marginTop: "70px" }}>
      <ul className="nav nav-tabs d-flex border-0">
        <li className="nav-item me-5 ms-md-4 ms-4">
          <button
            className={`nav-link ${
              activeTab === "profile" ? "active active-link" : ""
            }`}
            onClick={() => setActiveTab("profile")}
          >
            <h5
              className={`fw-bold  ${activeTab === "profile" || "text-dark"}`}
            >
              Profile
            </h5>
          </button>
        </li>
        <li className="nav-item me-5 ms-4">
          <button
            className={`nav-link ${
              activeTab === "password" ? "active active-link" : ""
            }`}
            onClick={() => setActiveTab("password")}
          >
            <h5
              className={`fw-bold  ${activeTab === "password" || "text-dark"}`}
            >
              Change Password
            </h5>
          </button>
        </li>
        <li className="nav-item me-5 ms-4">
          <button
            className={`nav-link ${
              activeTab === "bank" ? "active active-link" : ""
            }`}
            onClick={() => setActiveTab("bank")}
          >
            <h5 className={`fw-bold  ${activeTab === "bank" || "text-dark"}`}>
              Bank Accounts
            </h5>
          </button>
        </li>
        <li className="nav-item me-5 ms-4">
          <button
            className={`nav-link ${
              activeTab === "wallet" ? "active active-link" : ""
            }`}
            onClick={() => setActiveTab("wallet")}
          >
            <h5 className={`fw-bold  ${activeTab === "wallet" || "text-dark"}`}>
              Wallet
            </h5>
          </button>
        </li>
      </ul>
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default NavigationAndContent;
