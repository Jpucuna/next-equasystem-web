const Footer = () => {
  return (
    <>
      <section className="contact-us">
        <h1
          style={{
            paddingBottom: 5 + "%",
            textAlign: "center",
            paddingTop: 5 + "%"
          }}
        >
          CONTACTANOS
        </h1>
        <div className="container form-contact">
          <form name="scheduledemo" id="scheduledemo">
            <div
              id="errormessage"
              className="form-field-wrap aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="0"
            ></div>
            <div
              className="form-field-wrap aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-field">
                    <input
                      className="form-control"
                      placeholder="Nombre"
                      type="text"
                      name="firstname"
                      id="firstname"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-field">
                    <input
                      className="form-control"
                      placeholder="Apellido"
                      type="text"
                      name="lastname"
                      id="lastname"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="form-field-wrap aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="form-field">
                    <input
                      className="form-control"
                      placeholder="Correo electronico"
                      type="email"
                      name="emailaddress"
                      id="emailaddress"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="form-field aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <textarea
                className="form-control"
                placeholder="Comentarios"
                rows="4"
                name="interest"
                id="interest"
              ></textarea>
            </div>

            <div
              className="read-butn text-center aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <a
                className="btn read-btn gray-btn"
                id="sendbtn"
              >
                Enviar
              </a>
            </div>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div
              className="footer-wrap aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="row">
                <div className="col-md-3">
                  <div
                    className="footer-logo d-block d-sm-block d-md-none"
                    style={{ marginBottom: 5 + "%" }}
                  >
                    <a href="/">
                      <img
                        src="/EquaSystems.jpg"
                        className="img-fluid img-footer"
                        alt="Insurance Claims Software Logo"
                      />
                    </a>
                  </div>
                  <div className="foot-link foot-common">
                    <h5>QUIENES SOMOS</h5>
                    <ul className="list-unstyled">
                      <li>
                        <a href="/">Inicio</a>
                      </li>
                      <li>
                        <a href="../nosotros/quienesSomos">Acerca de nosotros</a>
                      </li>
                      <li>
                        <a href="../nosotros/empleados">
                          Nuestro personal
                        </a>
                      </li>
                      <li>
                        <a href="../servicios">Servicios</a>
                      </li>
                      <li>
                        <a href="#">Cobertura a nivel nacional</a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="foot-contact foot-common">
                    <h5>CONTACTO</h5>
                    <ul className="list-unstyled">
                      <li>
                        <a href="https://goo.gl/maps/fdu3hQJcyZxHWwHq5">
                          Parque Empresarial Colón 3, Oficina 311, Tarqui, C.P.
                          090112, Guayas, Cantón Guayaquil.
                        </a>
                      </li>
                      <li>
                        <a href="https://api.whatsapp.com/send?phone=593986206847">
                          +593 98620-6847
                        </a>
                      </li>
                      <li>
                        <a href="mailto:bzambrano@equasystems.com">
                          info@equasystems.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="foot-social foot-common">
                    <h5>SIGUENOS</h5>
                    <ul className="list-unstyled d-flex d-inline-flex">
                      <li className="linkedin">
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/company/equasystems-s-a/"
                        >
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="footer-logo d-none d-sm-none d-md-block">
                    <a href="/">
                      <img
                        src="/EquaSystems.jpg"
                        className="img-fluid img-footer"
                        alt="Insurance Policy Administration Software"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="footer-bottom"
          style={{
            backgroundColor: "rgb( " + 20 + ", " + 58 + ", " + 121 + ")"
          }}
        >
          <div className="copyrights text-center">
            <p>Copyright © 2022 EquaSystems S.A.S, Inc. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
