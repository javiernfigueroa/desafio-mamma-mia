import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../components/Card";
import Banner from "../components/Banner";

function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("/pizzas.json")
      .then((response) => response.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error("Error loading pizzas", error));
  }, []);

  return (
    <Container className="text-center">
      <div>
        <div>
          <Banner title={"Las mejores Pizzas de Italia"} />
        </div>
        <Row xs={1} md={2} lg={4} className="g-4">
          {pizzas.map((pizza) => (
            <Col key={pizza.id}>
              <Card pizza={pizza} />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default Home;
