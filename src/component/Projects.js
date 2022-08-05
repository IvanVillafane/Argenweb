import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "ArgenWeb",
      description: "Diseño & Desarrollo",
      imgUrl: projImg1,
    },
    {
      title: "ArgenWeb",
      description: "Diseño & Desarrollo",
      imgUrl: projImg2,
    },
    {
      title: "ArgenWeb",
      description: "Diseño & Desarrollo",
      imgUrl: projImg3,
    },
    {
      title: "ArgenWeb",
      description: "Diseño & Desarrollo",
      imgUrl: projImg4,
    },
    {
      title: "ArgenWeb",
      description: "Reserver Discord",
      imgUrl: projImg5,
    },
    {
      title: "ArgenWeb",
      description: "OnlineTutos",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project w-100" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Proyectos</h2>
                <p>Estos son algunos de los proyectos realizados por <span className="text-primary">ArgenWeb</span></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Proyectos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Contacto </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Info</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Somos una empresa dedicada al diseño y desarrollo de sitios web, asesoramiento y soluciones en internet. Crecemos al diario vivir junto a nuestros clientes, escuchando necesidades y diseñando estrategias a medida. Creamos una red de trabajo que se fortalece y crece día a día.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Somos una empresa dedicada al diseño y desarrollo de sitios web, asesoramiento y soluciones en internet. Crecemos al diario vivir junto a nuestros clientes, escuchando necesidades y diseñando estrategias a medida. Creamos una red de trabajo que se fortalece y crece día a día.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
