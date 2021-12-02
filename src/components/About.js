import React from 'react';
import {
  Container,
  Row,
  Image,
  Col,
} from 'react-bootstrap';
import profilePic from '../Logo/profilePic.jpg';
import '../styles/globals/about.scss';

export default function About() {
  return (
    <div className="abt">
      <Container>
        <Row>
          <Col xs={2} md={2}>
            <Image
              src={profilePic}
              className="card-img-top"
              alt="Dario Profile-Pic"
              roundedCircle
            />
          </Col>
        </Row>
      </Container>
      <h1> About Me</h1>
      <div className="info">
        <p>
          {' '}
          Hello I am Dario Perez.After graduationg from the University of the
          West Indies in Trinidad and Tobago with a bachelors in Political
          Science and a minor in International Relations, I migrated to New York
          City. My passion for traveling and curiousity for other cultures give
          me confidence to look for opportunites outside of my home country. I
          am aslo a soccer fanatic!
        </p>
        <p>
          After securing an internsip at Alliance Bernstein I was coverted to a
          full-time employee.I expressed a desirie to work in a technology role
          and there were open roles offered at their newly construted
          headquaters in Nashville.The chance of experiencing Music City was a
          chance I could not turn down! Relocating aslo opened the door to an
          abondance of carrer opportunites,new frienships and amazing
          adventures.
        </p>
        <p>
          I decidend to make programming my carrer and made an investment in
          myself and joined the Nashville Software School. Software Enginaring
          similiar to soccer requires discipline and lots of practice while
          working in team envirnment towards the same goal. Programming is
          perfect fit for me becuase it gave me the tools necessary to solve
          complex problems and bring ideas to life. I enjoy the thrill of
          improving as a developer and growing with every new technology I
          encounter.{' '}
        </p>
      </div>
    </div>
  );
}
