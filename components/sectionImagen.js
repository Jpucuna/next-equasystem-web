
import { Button } from "react-bootstrap";

const SeccionImagen = () => {
  return (
    <>
      <section className="slice-image item ">
        {/* <div className="img-fluid">
        <div className="cont-welcome">
          <div className="jumbotron cont-image-jumbo" style={{backgroundColor : "transparent"}}>
            <div className="container cont-img col-sm-4 mb-4">
              <img src="/EquaSystems.jpg" alt="logo-eSystems" className="img-fluid" style={{filter: "brightness("+1.5+")", backgroundColor: "rgb("+217+", "+223+", "+223+")", opacity: 0.81}}/> 
            </div>  
            <div className="container welcome">
                <div className="display-3 word" style={{fontFamily: "'Raleway', sans-serif", fontSize: 2.5+"rem"}}>BIENVENIDOS, SOMOS EQUASYSTEMS.</div>
                <div>--------</div>
                <div className="">
                  <p style={{fontFamily: "'Lato', sans-serif", fontSize: 1.5+"rem"}}>Somos una   empresa con capital y recursos humanos y
                    tecnológicos ecuatorianos-americanos, dedicados a la creación,
                    desarrollo, personalización e implementación   de servicios de
                    sistemas de calidad de software.</p>
                  <p><a className="btn btn-primary btn-lg btn-more" href="../nosotros/quienesSomos" role="button">Saber mas »</a></p>
                </div>
              </div>
            </div>
        </div>
      </div> */}
        <div className="presentacion d-flex ">
          <div className="logoEQS col-md-7 d-flex justify-content-center align-items-center">
            <img className="img-fluid img-logoEQS" src="/logoEQS.png" alt="logo" width={800} />
          </div>
          <div className="textPad col-md-5 d-flex
          flex-column justify-content-around align-items-center">
              <h5 className="text-presentacion">
              Somos una empresa con capital y recursos humanos y tecnológicos ecuatorianos americanos, dedicados a la creación, desarrollo, personalización e implementación de servicios de sistemas de calidad de software.
              </h5>
              <Button className="btn-principal" variant="primary"><a href="/nosotros/quienesSomos">Saber mas &gt;&gt;</a></Button>
          </div>
        </div>
      </section>
    </>
  );
};
export default SeccionImagen;
