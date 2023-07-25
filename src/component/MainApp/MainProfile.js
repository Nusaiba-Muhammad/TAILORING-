import React, { useState } from "react";
import { Button, Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import MainContact from "./MainContact";
import MainHome from "./MainHome";

export default function MainProfile() {
  const [page, setPage] = useState(1);
  return (
    <Row className="m-0 p-0 pl-0 ml-0">
      <Col className="ml-0">
        <div className="profile__body">
          <div className="profile__container">
            {/* <div className="profile__avatar">
              <img src="https://assets.codepen.io/5453939/internal/avatars/users/default.png?format=auto&amp;version=1638034680&amp;width=300&amp;height=300" />
            </div> */}
            <div className="contact__img-container">
              <div className="contact__circle1"></div>
              <div className="contact__circle2"></div>
              <div className="contact__image"></div>
            </div>
            <div className="profile__username">
              <h3>Modern Modiste</h3>
            </div>
            <div
              className="profile__button"
              data-target="#home"
              onClick={() => setPage(1)}
            >
              <div className="profile__button__icon">
                <i className="fa-solid fa-house"></i>
              </div>
              <div className="profile__button__text">Home</div>
            </div>
            <div
              className="profile__button"
              data-target="#contact"
              onClick={() => setPage(2)}
            >
              <div className="profile__button__icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="profile__button__text">Contact</div>
            </div>
            <div
              className="profile__button"
              data-target="#about"
              onClick={() => setPage(3)}
            >
              <div className="profile__button__icon">
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="profile__button__text">About</div>
            </div>
            <div
              className="profile__button"
              data-target="#education"
              onClick={() => setPage(4)}
            >
              <div className="profile__button__icon" style={{}}>
                <i className="fa-solid fa-user-graduate"></i>
              </div>
              <div className="profile__button__text">Measurement</div>
            </div>
          </div>

          {/* <div className="profile__page" id="education">
            <div className="profile__page__header">
              <div className="profile__page__title">Education</div>
              <div className="profile__page__close">
                <i className="fa-solid  fa-xmark"></i>
              </div>
            </div>
          </div> */}
        </div>
      </Col>
      <Col md={8}>
        {page === 1 ? (
          <MainHome />
        ) : page === 2 ? (
          <MainContact />
        ) : page === 3 ? (
          <div className="profile__page__body">
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
              optio laboriosam, saepe nulla laborum aperiam nemo sed iure beatae
              error labore! Mollitia, aperiam adipisci sapiente aliquid non
              dignissimos enim commodi?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              fuga molestiae, nihil iste debitis nemo laborum aut aliquid! Quod
              veritatis dolorem suscipit? Maxime tempore inventore molestias
              eligendi animi quo at provident vitae nobis, distinctio, molestiae
              quis accusamus accusantium ullam officia quaerat illo iste!
              Pariatur provident odit iusto ipsum, natus tenetur alias
              asperiores temporibus tempora eaque maxime, consectetur similique
              quasi totam perspiciatis. Architecto dolores facilis quo itaque
              amet dolore deleniti debitis ab nesciunt doloremque facere nemo
              sapiente velit expedita consequuntur blanditiis, officia deserunt
              aperiam sit explicabo numquam omnis. Quod ut unde alias odio,
              excepturi, deserunt reprehenderit ipsa at, incidunt cumque ipsam
              consequuntur est! Ipsam itaque unde cupiditate dolorem
              exercitationem beatae? Eum voluptas ipsam sunt cumque repellendus
              aperiam sequi reiciendis eos quaerat.
            </p>
          </div>
        ) : page === 4 ? (
          <div>
            <h3>nusaiba muhammad</h3>
          </div>
        ) : null}
      </Col>
    </Row>
  );
}
