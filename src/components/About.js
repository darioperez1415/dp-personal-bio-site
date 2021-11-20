import React from 'react';
import {
  Container,
  Row,
  Image,
  Col,
}
  from 'react-bootstrap';
import profilePic from '../Logo/profilePic.jpg';

export default function About() {
  return (
    <div>
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
      <p>
        {' '}
        Hello I am Dario Perez.After receiving my bachelors in Political Science
        with a minor in International Relations from the University of the West
        Indies in Trinidad and Tobago, I migrated to New York City with my
        family. I have always been facinated about technology and learning about new
        cultures.
      </p>
      <p>
        After securing my conversion from intern to a full-time employee of
        Alliance Bernstein, I was approved for an opportunity to relocate to
        Nashville and decided to take the leap. I switched roles into one where
        I would be able to grow as a developer and was promoted to Associate
        Officer in June 2021. In addition to working full time, I am attending
        the Nashville software school part-time to begin my journey in software
        development.
      </p>
      Working at AB allowed me to solve complex problems using logic while
      working in a team environment. Programing helped me to express my
      creativity and with my diverse backgrough and work eithc enable me to add
      value to any team I work with.
      <p>
        I decided to invest in myself and join the Nashville Software School.
        This helped me learn the skills and discipline to learn software
        development and continue to grow with every new technology I encounter.{' '}
      </p>
    </div>
  );
}
