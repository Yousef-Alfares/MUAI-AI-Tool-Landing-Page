import { Col, Container, Row } from "react-bootstrap";
import "./whyCustomers.css";
import { Animations } from "../../animations/Animations";
import { motion } from "framer-motion";

export default function WhyCustomers() {
  return (
    <div className="why-customers">
      <Container className="mt-7">
        <h3 className="h3-res black-100 mx-auto">
          why customers <span className="primary-100">love us</span>
        </h3>
        <Row className="mt-4">
          <Col xs={12} md={6} lg={4}>
            <motion.div
              className="px-4 py-4 mt-4"
              variants={Animations.BottomToTop.child}
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <h5 className="body1 black-100">Musideri</h5>
              <p className="p1 black-20 mt-3 mb-0">
                I recently used an AI chat system and it exceeded my
                expectations. The speed and accuracy of the responses were
                impressive, and the personalized recommendations w
              </p>
            </motion.div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <motion.div
              className="px-4 py-4 mt-4"
              variants={Animations.BottomToTop.child}
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <h5 className="body1 black-100">Ghozi Arslan</h5>
              <p className="p1 black-20 mt-3 mb-0">
                I recently used an AI chat system and it exceeded my
                expectations. The speed and accuracy of the responses were
                impressive, and the personalized recommendations w
              </p>
            </motion.div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <motion.div
              className="px-4 py-4 mt-4"
              variants={Animations.BottomToTop.child}
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <h5 className="body1 black-100">Pakde Siti</h5>
              <p className="p1 black-20 mt-3 mb-0">
                I recently used an AI chat system and it exceeded my
                expectations. The speed and accuracy of the responses were
                impressive, and the personalized recommendations w
              </p>
            </motion.div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <motion.div
              className="px-4 py-4 mt-4"
              variants={Animations.BottomToTop.child}
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <h5 className="body1 black-100">Nandarea</h5>
              <p className="p1 black-20 mt-3 mb-0">
                I recently used an AI chat system and it exceeded my
                expectations. The speed and accuracy of the responses were
                impressive, and the personalized recommendations w
              </p>
            </motion.div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <motion.div
              className="px-4 py-4 mt-4"
              variants={Animations.BottomToTop.child}
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <h5 className="body1 black-100">Muklisea</h5>
              <p className="p1 black-20 mt-3 mb-0">
                I recently used an AI chat system and it exceeded my
                expectations. The speed and accuracy of the responses were
                impressive, and the personalized recommendations w
              </p>
            </motion.div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <motion.div
              className="px-4 py-4 mt-4"
              variants={Animations.BottomToTop.child}
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <h5 className="body1 black-100">Mumuh lis</h5>
              <p className="p1 black-20 mt-3 mb-0">
                I recently used an AI chat system and it exceeded my
                expectations. The speed and accuracy of the responses were
                impressive, and the personalized recommendations w
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
