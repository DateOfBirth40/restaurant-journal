import { useState } from "react";
import NavbarComponent from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavbarComponent username="DateOfBirth40" />
      {/* May need to pass in the username and profile picture of a user for Navbar */}
      <Container className="pt-3">
        <h1>Restaurant Journal</h1>
        <p>Have you ever wanted to recommend a restaurant to a friend but couldn't remember what you ordered? With Restaurant Journal, you can keep a shareable log of every restaurant you've been to as well as everything you ordered!</p>
        <p>Can't remember the name of the restaurant in Valencia that had the best paella you've ever tried? Or maybe that dive bar in Chicago with the deep dish pizza? Not a problem anymore with Restaurant Journal! Using our map feature, you can visualize restaurants that you've visited all around the world!</p>
        <p>With our customizable privacy features, the choice is yours whether you decide to use this as a personal restaurant log or a fully-fledged social media app.</p>
      </Container>
    </div>
  );
}

export default App;
