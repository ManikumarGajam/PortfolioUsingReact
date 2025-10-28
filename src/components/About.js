import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './About.css';


export default function About() {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <motion.h2
          className="mb-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <Row className="justify-content-center" >
          <Col md={6}>
            <motion.div
              className="about-box position-relative d-flex flex-column align-items-center"
              initial={{ rotateY: 15, opacity: 0 }}
              whileInView={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="macbook-container my-3" >
                {/* Insert the MacBook HTML snippet here */}
                <div className="macbook">
                  <div className="inner">
                    <div className="screen">
                      <div className="face-one">
                        <div className="camera"></div>
                        <div className="display">
                          <img src="/g2.jpg" alt="About" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '2px' }} />
                          <div className="shade"></div>
                        </div>
                        
                      </div>
                    </div>
                    <div className="macbody">
                      <div className="face-one">
                        <div className="touchpad"></div>
                        <div className="keyboard">
                          {[...Array(56)].map((_, i) => (
                            <div className={i === 5 ? "key space" : i > 48 ? "key f" : "key"} key={i}></div>
                          ))}
                        </div>
                      </div>
                      <div className="pad one"></div>
                      <div className="pad two"></div>
                      <div className="pad three"></div>
                      <div className="pad four"></div>
                    </div>
                  </div>
                  <div className="shadow"></div>
                </div>

              </div>
              <p className='mt-5 '>
                I’m a dedicated MERN Stack Developer with hands-on experience in building responsive and scalable web applications.
Along with the MERN stack, I also have knowledge of Java, JDBC, and MySQL, which strengthens my understanding of backend logic and database connectivity.
I’m passionate about learning new technologies and developing efficient, real-world solutions.
              </p>
              
            </motion.div>

          </Col>
        </Row>
      </Container>
    </section>
  );
}
