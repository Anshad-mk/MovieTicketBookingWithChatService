import React from 'react'
import { useForm } from "react-hook-form";
import './loginpage.css'
function LoginPage() {
  const google = () => {
    // window.open("http://localhost:3008/auth/google", "_self");
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <div className="form">
            <form >
              <h1>Sign up</h1>
              <div className="ui divider"></div>
              <div className="ui form">
                <div className="field">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    
                  />
                  <span className="text-danger">
                    {errors.phone?.type === "required" && (
                      <span>Phone Number is required</span>
                    )}
                    {errors.phone?.type === "minLength" && (
                      <span>Phone Number must have 10 digits</span>
                    )}
                    {errors.phone?.type === "maxLength" && (
                      <span>Phone Number must have 10 digits</span>
                    )}
                  </span>
                </div>
                <button className="fluid ui button red" type="submit">
                  Submit
                </button>
              </div>
            </form>
            <hr></hr>
            <div className="fluid ui button blue" onClick={google}>
              Google
            </div>
          </div>
    </div>
  )
}

export default LoginPage
