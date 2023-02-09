import Layout from "../components/Layout";
import SeccionImagen from "../components/sectionImagen";
import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Layout>
        <SeccionImagen />
        <section className="empresa-description d-flex justify-content-center align-items-center">
          <div className="breveDescripcion d-flex">
            <div className="imgDescrp col-md-6">
              <img
                className="img-fluid imagenPartner"
                src="/partners-image.jpg"
                alt=""
              />
            </div>
            <div className="cont-description col-md-6  d-flex flex-column justify-content-center align-items-center">
              <div className="texto-eq col-md-10  d-flex flex-column justify-content-around align-items-around">
                <div className="row-md-2">
                  <h2>La Empresa</h2>
                </div>
                <div className=" row-md-10">
                <p >
                  Somos una empresa con capital y recursos humanos y
                  tecnológicos ecuatorianos-americanos, dedicados a la creación,
                  desarrollo, personalización e implementación de servicios de
                  sistemas de calidad de software, apoyándonos permanentemente
                  en criterios innovadores y tecnologías en evolución,
                  ajustándonos a las necesidades de nuestros clientes. Contamos
                  fundamentalmente con un equipo de profesionales altamente
                  capacitados ecuatorianos con soporte americano, y con la
                  motivación y compromiso necesarios para proporcionar un
                  software de calidad conveniente para nuestros clientes.
                  Trabajamos bajo el sistema “Time Material” el cliente paga por
                  el tiempo de desarrollo a través de una facturación mensual.
                </p>
                </div>
              </div>
              <div className="btn-conoce col-md-2 d-flex flex-column justify-content-center align-items-center">
                <Button className="btn-descrp" variant="primary">
                  <a href="/nosotros/quienesSomos">Conoce mas</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
