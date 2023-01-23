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
          justifyContent: "center"
        }}
      >
        <div className="container-nav">
          <div className="equa-information">
            <div className="phone">
              <i className="material-icons" style={{ marginRight: 5 + "px" }}>
                call
              </i>
              <a href="tel:19419811147">+1 (941) 981-1147</a>
            </div>
            <div className="email" style={{ marginLeft: 10 + "px" }}>
              <i className="material-icons" style={{ marginRight: 5 + "px" }}>
                mail
              </i>
              <a href="mailto:info@QuickSilverSystems.com">
                info@QuickSilverSystems.com
              </a>
            </div>
          </div>

      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
                <img
                  src="/EquaSystems.png"
                  alt=""
                  width="295rem"
                  height="170rem"
                />
        </Navbar.Brand>
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
    </Navbar>


          <nav
            className="navbar navbar-expand-lg navbar-light bg-light"
            style={{ backgroundColor: "white !important" }}
          >
            <div className="container-fluid nav-home">
              <a className="navbar-brand" href="#">
                <img
                  src="/EquaSystems.png"
                  alt=""
                  width="130rem"
                  height="80rem"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul
                  className="navbar-nav "
                  id="navbarNav"
                  style={{ fontSize: 0.95 + "rem", fontWeight: "bolder" }}
                >
                  <Nav.Link className="itemNavbar" href="#home">Home</Nav.Link>

                  <NavDropdown title="Company Information" id="basic-nav-dropdown" className="itemNavbar">
                    <div className="items">
                    <NavDropdown.Item href="#action/3.1">
                    Business Partners
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                    Employee Bios
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                    Contact Us
                    </NavDropdown.Item>
                    </div>
                  </NavDropdown>
                  

                  <NavDropdown title="System Information" id="basic-nav-dropdown" className="itemNavbar">
                    <div className="items">

                    <NavDropdown.Item href="#action/3.1">
                    Feature List
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                    Underwriting Features
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                    Insurance Knowledgebase
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                    System information
                    </NavDropdown.Item>
                    </div>
                    
                  </NavDropdown>
                  
                  <NavDropdown title="Press Releases" id="basic-nav-dropdown" className="itemNavbar">
                    <div className="items">
                    <NavDropdown.Item href="#action/3.1">
                    Archives
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                    Recent News
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                    Social Media
                    </NavDropdown.Item>
                    </div>
                    
                  </NavDropdown>  

                  <NavDropdown title="Insurance Software Providers" id="basic-nav-dropdown" className="itemNavbar">
                    <div className="items">
                    <NavDropdown.Item href="#action/3.1">
                    Competitors
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                    Agency Systems
                    </NavDropdown.Item>
                    </div>
                  </NavDropdown>  

                  
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};
export default NavBar;
