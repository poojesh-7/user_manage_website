import { useEffect, useState } from "react";
import "./Profile.css";
import HttpHook from "../CustomHooks/Httphook";
import { UserProfile } from "../CustomHooks/Api";
// import { useLocation } from "react-router-dom";
import Loader from "../ui/Loader";
import UpdateForm from "./UpdateForm";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const [sendReq, httpObj] = HttpHook(UserProfile);
  const [update, setUpdate] = useState(null);
  const getUpdate = (val) => {
    setUpdate(val);
  };
  useEffect(() => {
    sendReq(location.state.token, location.state.emp);
    setUpdate("");
  }, [sendReq, location, update]);
  let content;
  if (httpObj.status === "loading" && httpObj.data === null) {
    content = (
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
    );
  }
  if (httpObj.status === "completed" && httpObj.error !== null) {
    content = <p>Error</p>;
  }
  if (httpObj.status === "Completed" && httpObj.data !== null) {
    content = (
      <div className="profile_page">
        <h1 className="page_heading">Profile</h1>
        <h2 className="company">
          {location.state?.emp
            ? httpObj.data?.employeeCompany
            : httpObj.data?.companyName}
        </h2>
        <h2 className="role">{httpObj.data?.role}</h2>
        <img
          src="https://i.ibb.co/thkbh6Z/profile-user.png"
          alt="profile-user"
          border="0"
          className="profile_img"
        ></img>
        <div className="name_email">
          <p>
            <b>Name</b> : {httpObj.data?.name}
          </p>
          <p>
            <b>Working email</b> : {httpObj.data?.email}
          </p>
        </div>

        <UpdateForm getUpdate={getUpdate} profileData={httpObj.data} />
        <div className="task">
          <h1>Today's Tasks</h1>
          <p style={{ marginTop: "200px" }}>No tasks</p>
        </div>
      </div>
    );
  }
  return <>{content}</>;
};

export default Profile;
