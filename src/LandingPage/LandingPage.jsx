import Content from "./Content";
import Footer from "./Footer";
import Hero from "./Hero";
import Pricing from "./Pricing";

const LandingPage = () => {
  return (
    <div className="landing_page">
      <Hero />
      <Content />
      <Pricing />
      <Footer />
    </div>
  );
};

export default LandingPage;
