import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Row } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <section
        className="nav"
        style={{
          boxShadow:
            0 +
            "px " +
            1 +
            "px " +
            5 +
            "px " +
            0 +
            " rgb( " +
            0 +
            " " +
            0 +
            " " +
            0 +
            " / " +
            10 +
            "%)",
          justifyContent: "center"
        }}
      >
        <div className="container-nav">
          <div className="equa-information">
            <div className="phone">
              <i className="material-icons" style={{ marginRight: 5 + "px" }}>
                call
              </i>
              <a href="https://api.whatsapp.com/send?phone=593986206847">
                +593 98620-6847
              </a>
            </div>
            <div className="email" style={{ marginLeft: 10 + "px" }}>
              <i className="material-icons" style={{ marginRight: 5 + "px" }}>
                mail
              </i>
              <a href="mailto:info@equasystems.com">info@equasystems.com</a>
            </div>
          </div>

          <Navbar
            bg="light"
            expand="lg"
            style={{ backgroundColor: "white !important" }}
          >
            <Container fluid style={{ backgroundColor: "white !important" }}>
              <Row>
              <Navbar.Brand>
                <a className="navbar-brand" href="/">
                  <img
                    src="/EquaSystems.png"
                    alt=""
                    width="130rem"
                    height="80rem"
                  />
                </a>
              </Navbar.Brand>
              </Row>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav " style={{ justifyContent: "flex-end"}}>
                <Nav className="me-auto items-nav" style={{marginRight: 0+"px !important" }}>
                  <Nav.Link className="itemNavbar" href="/">
                    Inicio
                  </Nav.Link>
                  <Nav.Link className="itemNavbar" href="/servicios">
                    Servicios
                  </Nav.Link>
                  <Nav.Link className="itemNavbar" href="/clientes">
                    Clientes
                  </Nav.Link>
                  <NavDropdown
                    title="Acerca de Nosotros"
                    id="basic-nav-dropdown"
                    className="itemNavbar"
                  >
                    <div className="items">
                      <NavDropdown.Item href="/nosotros/quienesSomos">
                        Quienes somos
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/nosotros/socios">
                        Socios
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/nosotros/empleados">
                        Nuestro personal
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/nosotros/contactanos">
                        Contactanos
                      </NavDropdown.Item>
                    </div>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </section>
    </>
  );
};
export default NavBar;
