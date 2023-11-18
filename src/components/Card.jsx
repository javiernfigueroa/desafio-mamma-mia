import { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Card as BootstrapCard, Button, ListGroup } from "react-bootstrap";
import { CartContext } from "../context/Context";

const Card = ({ pizza }) => {
  const { addToCart } = useContext(CartContext);
  const { id, img, name, ingredients, price } = pizza;

  const handleAddToCart = () => {
    addToCart(pizza);
  };

  const capitalizedName =
    pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1);

  return (
    <BootstrapCard style={{ width: "18rem" }}>
      <BootstrapCard.Img variant="top" src={img} alt={name} />
      <BootstrapCard.Body>
        <BootstrapCard.Title>{capitalizedName}</BootstrapCard.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Ingredientes:</strong>
          </ListGroup.Item>
          {ingredients.map((ingredient, index) => (
            <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
          ))}
        </ListGroup>
        <BootstrapCard.Text>
          <strong>Precio:</strong> ${price}
        </BootstrapCard.Text>
        <div className="d-flex justify-content-between">
          <Link to={`/pizza/${id}`}>
            <Button variant="primary">Ver Más</Button>
          </Link>
          <Button variant="success" onClick={handleAddToCart}>
            Añadir al Carro
          </Button>
        </div>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

Card.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
