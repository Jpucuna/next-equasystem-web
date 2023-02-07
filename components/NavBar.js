import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

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
            backgroundColor: "white",
          justifyContent: "center"
        }}
      >
        <div className="container-nav">
          <div className="equa-information">
            <div className="phone">
              <img  src="/call.png" style={{ marginRight: 5 + "px"}}
              />
              <a href="https://api.whatsapp.com/send?phone=593986206847">
                +593 98620-6847
              </a>
            </div>
            <div className="email" style={{ marginLeft: 10 + "px" }}>
            <img  src="/email.png" style={{ marginRight: 5 + "px"}}
              />
              <a href="mailto:info@equasystems.com">info@equasystems.com</a>
            </div>
          </div>

          <Navbar
            bg="light"
            expand="lg"
            style={{ backgroundColor: "white !important" }}
          >
            <Container fluid style={{ backgroundColor: "white !important" }}>
              {/* <Row>
              <Navbar.Brand>
                <a className="navbar-brand" href="/">
                  <img
                    src="/EquaSystems.png"
                    alt="logo Equasystem"
                    width="130rem"
                    height="80rem"
                  />
                </a>
              </Navbar.Brand>
              </Row> */}
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav " style={{ justifyContent: "center"}}>
                <Nav className="me-auto items-nav" style={{marginRight: 0+"px !important",  gap: 10+"%",
                justifyContent: "center" }}>
                  <Nav.Link className="itemNavbar" href="/">
                    Inicio
                  </Nav.Link>
                  <div className="divisor">
                       <h5>|</h5>
                  </div>
                  <Nav.Link className="itemNavbar" href="/servicios">
                    Servicios
                  </Nav.Link>
                  <div className="divisor">
                       <h5>|</h5>
                  </div>
                  <Nav.Link className="itemNavbar" href="/clientes">
                    Clientes
                  </Nav.Link>
                  <div className="divisor">
                       <h5>|</h5>
                  </div>
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
