import { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/Context";

const Detail = ({ pizzas }) => {
  const { id } = useParams();
  const pizza = pizzas.find((pizza) => pizza.id === id);
  const { addToCart } = useContext(CartContext);
  const capitalizedName =
    pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1);

  if (!pizza) {
    return (
      <Container className="text-center mt-4">
        <h2>Pizza no encontrada</h2>
      </Container>
    );
  }

  const handleAddToCart = () => {
    addToCart(pizza);
  };

  return (
    <Container className="text-center mt-4">
      <Row>
        <Col xs={12} md={6}>
          <img
            src={pizza.img}
            alt={pizza.name}
            style={{ maxWidth: "100%", borderRadius: "10px" }}
          />
        </Col>
        <Col xs={12} md={6} className="text-start">
          <h2>{capitalizedName}</h2>
          <p>{pizza.desc}</p>
          <strong>Ingredientes:</strong>
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p>
            <strong>Precio:</strong> ${pizza.price}
          </p>
          <Button variant="success" onClick={handleAddToCart}>
            <FaShoppingCart className="me-2" />
            Añadir al Carrito
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Detail;
