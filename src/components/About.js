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
          I am Dario Perez.After graduating from the University of the West
          Indies in Trinidad and Tobago with a bachelor in Political Science and
          a minor in International Relations, I migrated to New York City. My
          passion for traveling and curiosity for other cultures gives me the
          confidence to look for opportunities outside my home country. I am
          also a soccer fanatic!
        </p>
        <p>
          After securing an internship at Alliance Bernstein, I was converted to
          a full-time employee. I expressed a desire to work in a technology
          role And there were open roles offered at their newly constructed
          headquarters in Nashville. The chance of experiencing Music City was a
          chance I could not turn down! Relocating also opened the door to an
          abundance of career opportunities, new friendships, and amazing
          adventures.
        </p>
        <p>
          I decided to make programming my career, invested in myself and joined
          the Nashville Software School. Software Engineering Like soccer, it
          requires discipline and lots of practice while working in a team
          environment towards the same goal. Programming is a perfect fit for me
          because it gave me the tools necessary to solve complex problems and
          bring ideas to life. I enjoy the thrill of improving as a developer
          and growing with every new technology I encounter{' '}
        </p>
      </div>
    </div>
  );
}
