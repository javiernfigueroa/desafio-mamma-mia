import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import bannerPic from "../assets/mama-mia.png";

const Banner = ({ title }) => {
  return (
    <Container className="text-center mt-4">
      <img
        src={bannerPic}
        alt="Mamma Mia Banner"
        style={{ maxWidth: "100%" }}
      />
      {title && <h1 className="mt-3">{title}</h1>}
    </Container>
  );
};

Banner.propTypes = {
  title: PropTypes.string,
};

export default Banner;
