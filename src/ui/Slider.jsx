import "./Slider.css";
const Slider = (props) => {
  return (
    <div className={props.show ? "slider slide" : "slider"}>
      {props.children}
    </div>
  );
};

export default Slider;
