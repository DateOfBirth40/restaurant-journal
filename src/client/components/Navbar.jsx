import { useState } from "react";
import { Container, Navbar, Nav, NavDropdown, NavbarBrand } from 'react-bootstrap'

function NavbarComponent(props) {
  const [count, setCount] = useState(0);

  return (
    <Navbar className="bg-body-tertiary p-2">
      <Container>
        <Navbar.Brand className="pl-3">
          <img alt="" src="src/client/assets/menu-book.svg" />{' '}
          Restaurant Journal
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
      </Container>
      <Container className="d-flex justify-content-between">
        <Nav>
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Map</Nav.Link>
          <Nav.Link>Restaurants</Nav.Link>
          <Nav.Link>Friends</Nav.Link>
        </Nav>
      </Container>
      <Container className="d-flex justify-content-end">
        <NavDropdown title={props.username}>
          <NavDropdown.Item>Profile</NavDropdown.Item>
          <NavDropdown.Item>Settings</NavDropdown.Item>
          <NavDropdown.Item>Log Out</NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Navbar>
  );
}

{/* <Navbar expand="lg" className="bg-body-tertiary">
<Container>
  <Navbar.Brand href="#home">Restaurant Journal</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          Another action
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">
          Separated link
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar> */}

export default NavbarComponent;
