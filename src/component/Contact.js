import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Windows } from "react-bootstrap-icons";
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';


export const Contact = () => {
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_psukrre', 'template_7g02xdc' , event.target,'ccV3ZRFz9E7l5tYVO')
    .then(response => console.log(response))
    .catch(error => console.log(error));


  }  

  const mostrarAlerta=()=>{
    swal({
      title:"Mensaje recibido ",
      text:"Gracias por comunicarte con ArgenWeb",
      icon: "success",
      buton: "Aceptar",
      timer:"2000",
    })
     

}


  

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Contactanos</h2>
                <form action='form.php' method='POST' onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="name" placeholder="Nombre" />
                    </Col>
                
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="user_email" placeholder="Email " />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="user_tel" placeholder="Telefono" />
                    </Col>
                    <hr></hr>
                    <Col size={12} className="px-1">
                      <textarea rows="7" name="textarea" placeholder="Mensaje" className="w-100" ></textarea>
                      <button onClick={()=>mostrarAlerta()}  type="submit"><span >Enviar</span></button>
                    </Col>
                      <Col>
                       
                      </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
