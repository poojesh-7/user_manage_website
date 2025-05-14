import LoginPageAdmin from "./LoginPageAdmin";
import LoginPageEmployee from "./LoginPageEmployee";
import { useLocation } from "react-router-dom";

const LoginPage = () => {
  const location = useLocation();
  // console.log(location.state.type);
  // const userType = useState(props.user)[0];
  return (
    <>
      {location.state.type === "Admin" ? (
        <LoginPageAdmin />
      ) : (
        <LoginPageEmployee />
      )}
    </>
  );
};

export default LoginPage;
