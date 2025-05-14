import { useState, useEffect } from "react";
import "./LoginPageAdmin.css";
import Httphook from "../CustomHooks/Httphook";
import { SignupUser, LoginUser } from "../CustomHooks/Api";
import { useNavigate } from "react-router-dom";
import Loader from "../ui/Loader";
import {
  isValidEmail,
  isValidName,
  isValidPassword,
  isValidCompany,
} from "../CustomHooks/Validate";
import Modal from "../ui/Modal";
const LoginPageAdmin = () => {
  const [valid, setValid] = useState({});
  const [signup, setSignup] = useState(true);
  const [sendReq, httpObj] = Httphook(signup ? SignupUser : LoginUser);
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  useEffect(() => {
    if (httpObj.status === "Completed" && httpObj.error === null) {
      navigate("/users", { state: { token: httpObj.data?.token } });
    }
  }, [httpObj, navigate]);

  let userData = {};

  const switchForm = () => {
    setSignup((prev) => !prev);
    setValid({});
  };
  const signupHandler = async (e) => {
    e.preventDefault();
    userData = {
      name: userName,
      email: userEmail,
      password: userPassword,
      companyName: companyName,
      role: "admin",
      noOfEmployees: 100,
    };
    const validName = isValidName(userName);
    const validEmail = isValidEmail(userEmail);
    const validPassword = isValidPassword(userPassword);
    const validCompany = isValidCompany(companyName);
    if (
      validName !== "" ||
      validPassword !== "" ||
      validEmail !== "" ||
      validCompany !== ""
    ) {
      setValid({
        name: validName,
        password: validPassword,
        email: validEmail,
        company: validCompany,
      });
    } else {
      setValid({
        name: "",
        password: "",
        email: "",
        company: "",
      });
      await sendReq(userData);
    }
  };
  const loginHandler = async (e) => {
    e.preventDefault();
    userData = {
      email: userEmail,
      password: userPassword,
    };

    const validEmail = isValidEmail(userEmail);
    const validPassword = isValidPassword(userPassword);
    if (validEmail !== "" || validPassword !== "") {
      setValid({
        password: validPassword,
        email: validEmail,
      });
    } else {
      setValid({
        password: "",
        email: "",
      });
      await sendReq(userData);
    }
  };

  if (httpObj.status === "loading" && httpObj.data === null) {
    return (
      <>
        <Modal show={true}></Modal>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "60vh",
          }}
        >
          <Loader />
        </div>
      </>
    );
  }

  return (
    <div className="login_section">
      <h1>{signup ? "Sign up" : "Login"}</h1>
      <form
        className="login_form"
        onSubmit={signup ? signupHandler : loginHandler}
      >
        {signup && (
          <>
            <label>
              Name
              <p className="inp_error">{valid.name}</p>
            </label>
            <div className="input_holder">
              <input
                type="text"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                placeholder="Enter name"
              />
              <div className="hover_line"></div>
            </div>
          </>
        )}
        <label className={signup ? "" : "email_label"}>
          Email
          <p className="inp_error">
            {httpObj.error?.status === 404
              ? "Incorrect combination"
              : valid.email}
          </p>
        </label>

        <div className={signup ? "input_holder" : "input_holder switch_form "}>
          <input
            type="email"
            onChange={(e) => setUserEmail(e.target.value)}
            value={userEmail}
            placeholder="Enter email"
          />
          <div className="hover_line"></div>
        </div>
        <label className={signup ? "" : "password_label"}>
          Password
          <p className="inp_error">
            {httpObj.error?.status === 404 ? "" : valid.password}
          </p>
        </label>
        <div className={signup ? "input_holder" : "input_holder switch_form"}>
          <input
            type="password"
            onChange={(e) => setUserPassword(e.target.value)}
            value={userPassword}
            placeholder="Enter password"
          />
          <div className="hover_line"></div>
        </div>
        {signup && (
          <>
            <label>
              Company name
              <p className="inp_error">{valid.company}</p>
            </label>
            <div className="input_holder">
              <input
                type="text"
                onChange={(e) => setCompanyName(e.target.value)}
                value={companyName}
                placeholder="Enter company name"
              />
              <div className="hover_line"></div>
            </div>
            <label>Number of Employees</label>
            <div className="input_holder">
              <input type="number" readOnly value={100} />
            </div>
            <label>Role</label>
            <div className="input_holder">
              <input type="text" readOnly value={"Admin"} />
            </div>
          </>
        )}
        <div className="login_btn_holder">
          <button disabled={!signup} className={signup ? "btn_active" : ""}>
            Sign up
          </button>
          <button disabled={signup} className={signup ? "" : "btn_active"}>
            Login
          </button>
        </div>
      </form>
      <p className="toggle_p" onClick={switchForm}>
        {signup ? "Click here to Login" : "Don't have account yet? click here"}
      </p>
    </div>
  );
};

export default LoginPageAdmin;
