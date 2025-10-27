import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { motion } from 'framer-motion';

const servicesData = [
  { title: "Frontend Development", description: "Building responsive and dynamic user interfaces with React and Bootstrap." },
  { title: "Backend Development", description: "Creating robust RESTful APIs and server-side logic with Node.js and Django." },
  { title: "UI/UX Design", description: "Designing intuitive and engaging user experiences leveraging modern tools." },
];

export default function Services() {
  return (
    <section id="services" className="services-section py-5 bg-light">
      <Container>
        <motion.h2
          className="mb-5 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Services
        </motion.h2>
        <Row className="justify-content-center">
          {servicesData.map((service, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <motion.div
                className="p-4 border rounded shadow-sm h-100"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.3 }}
                viewport={{ once: true }}
              >
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
