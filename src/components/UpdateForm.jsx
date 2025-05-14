import "./UpdateForm.css";
import { useEffect, useRef, useState } from "react";
import Httphook from "../CustomHooks/Httphook";
import { UpdateUserData } from "../CustomHooks/Api";
import { useLocation } from "react-router-dom";
const validate = (newVal, type, oldObj) => {
  let val;
  if (newVal.trim() !== "") {
    val = newVal;
  } else {
    val = oldObj[type];
  }
  return val;
};
const UpdateForm = ({ profileData, getUpdate }) => {
  const location = useLocation();
  const [showOver, setOver] = useState(true);
  const [sendReq, httpObj] = Httphook(UpdateUserData);
  const userNameRef = useRef(null);
  const userEmailRef = useRef(null);
  const userPasswordRef = useRef(null);
  const userCompanyRef = useRef(null);
  const toggleOverlay = () => {
    setOver((prev) => !prev);
  };
  useEffect(() => {
    if (httpObj.status === "Completed" && httpObj.error === null) {
      getUpdate(true);
    }
  }, [httpObj, getUpdate]);
  const submitHander = async (e) => {
    e.preventDefault();
    const updateName = validate(userNameRef.current.value, "name", profileData);
    const updateEmail = validate(
      userEmailRef.current.value,
      "email",
      profileData
    );
    const updatePassword = validate(
      userPasswordRef.current.value,
      "password",
      profileData
    );
    let data = {
      name: updateName,
      email: updateEmail,
      password: updatePassword,
    };
    if (!location.state?.emp) {
      const updateCompany = validate(
        userCompanyRef.current?.value,
        "companyName",
        profileData
      );
      data = {
        name: updateName,
        email: updateEmail,
        password: updatePassword,
        companyName: updateCompany,
      };
    }
    await sendReq(
      {
        data,
        token: location.state?.token,
      },
      location.state?.emp
    );
  };
  return (
    <>
      <button onClick={toggleOverlay} className="edit_btn">
        Edit details
      </button>
      <form onSubmit={submitHander} className="update_form">
        <div className={showOver ? "overlay" : "remove_overlay"}></div>
        <label>Name</label>
        <div className="input_holder">
          <input
            type="text"
            ref={userNameRef}
            defaultValue={profileData.name}
            placeholder="Update name"
          />
          <div className="hover_line"></div>
        </div>
        <label>Email</label>

        <div className="input_holder">
          <input
            type="email"
            ref={userEmailRef}
            defaultValue={profileData.email}
            placeholder="Update email"
          />
          <div className="hover_line"></div>
        </div>
        <label>Password</label>
        <div className="input_holder">
          <input
            type="text"
            ref={userPasswordRef}
            placeholder="Update password"
          />
          <div className="hover_line"></div>
        </div>
        {!location.state?.emp && (
          <>
            <label>Company name</label>
            <div className="input_holder">
              <input
                type="text"
                defaultValue={profileData.companyName}
                ref={userCompanyRef}
                placeholder="Update Company"
              />
              <div className="hover_line"></div>
            </div>
          </>
        )}
        <button className="change_btn">Update</button>
      </form>
    </>
  );
};

export default UpdateForm;
