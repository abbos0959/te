import React, { useState } from "react";

import "./login.css";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../../redux/authactions";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
   const data = { _username: "", _password: "", _subdomain: "" };
   const navigate = useNavigate();

   const [errorMessages, setErrorMessages] = useState({});
   const [state, setState] = useState(data);

   const { loading, userInfo, user, userToken, error, success } = useSelector(
      (state) => state.auth
   );
   const dispatch = useDispatch();
   const errors = {
      uname: "invalid username",
      pass: "invalid password",
   };
   const updateData = (event) => {
      setState({
         ...state,
         [event.target.name]: event.target.value,
      });
   };
   const handleSubmit = (event) => {
      event.preventDefault();

      dispatch(registerUser({ state, navigate, toast }));
   };

   const renderForm = (
      <div className="form">
         <form onSubmit={handleSubmit}>
            <div className="input-container">
               <label>Username </label>
               <input
                  style={{ borderRadius: "8px", outline: "none" }}
                  onChange={updateData}
                  value={state._username}
                  type="text"
                  name="_username"
                  required
               />
            </div>
            <div className="input-container">
               <label>Password </label>
               <input
                  style={{ borderRadius: "8px", outline: "none" }}
                  onChange={updateData}
                  value={state._password}
                  type="text"
                  name="_password"
                  required
               />
            </div>

            <div className="input-container">
               <label>Subdomain </label>
               <input
                  style={{ borderRadius: "8px", outline: "none" }}
                  onChange={updateData}
                  value={state._subdomain}
                  type="text"
                  name="_subdomain"
                  required
               />
            </div>
            <div className="button-container">
               <input
                  style={{ borderRadius: "10px", width: "96%" }}
                  type="submit"
                  value={"Kirish"}
               />
            </div>
         </form>
      </div>
   );

   return (
      <div className="app">
         <div className="login-form">
            <div className="title">Dashboard</div>
            {renderForm}
         </div>
      </div>
   );
}

export default Login;
