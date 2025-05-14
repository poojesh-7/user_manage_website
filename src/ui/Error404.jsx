import { Link, useNavigate } from "react-router-dom";
import "./Error404.css";
const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className="route_error_section">
      <div className="error404">
        <h1>Page Not Found</h1>
        <p>
          Response code : <b>404</b>
        </p>
        <button
          className="prev_page_btn"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Error404;
