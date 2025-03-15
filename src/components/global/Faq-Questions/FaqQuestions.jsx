import { Accordion, Col, Container, Row } from "react-bootstrap";
import "./faqQuestions.css";
import { useNavigate } from "react-router-dom";
import AnimationTitles from "../../animations/AnimationTitles";
import { motion } from "framer-motion";
import { Animations } from "../../animations/Animations";

export default function FaqQuestions() {
  const navigate = useNavigate();

  return (
    <div className="faq-questions mt-7">
      <Container className="bg-white">
        <div>
          <AnimationTitles
            title="FAQs Frequently Asked Questions!"
            color="black-100"
          />
          <p className="p-res black-20 mx-auto mt-5">
            Need Any Help? Send us a message using the form below and we'll get
            back to you promptly!
          </p>
        </div>
        <Row className="my-4">
          <Col xs={12} lg={6}>
            <motion.div
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="1" className="mt-3">
                  <Accordion.Header>
                    How easy is it to setup AITool?
                  </Accordion.Header>
                  <Accordion.Body className="p1 black-20">
                    We accept various payment methods, including major credit
                    cards (Visa, Mastercard, American Express), PayPal, and
                    direct bank transfers. You can choose the most convenient
                    option during the checkout process.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </motion.div>
            <motion.div
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="1" className="mt-3">
                  <Accordion.Header>What your refund policy?</Accordion.Header>
                  <Accordion.Body className="p1 black-20">
                    We accept various payment methods, including major credit
                    cards (Visa, Mastercard, American Express), PayPal, and
                    direct bank transfers. You can choose the most convenient
                    option during the checkout process.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </motion.div>
            <motion.div
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="1" className="mt-3">
                  <Accordion.Header>
                    Can I integrate AITool with other platforms?
                  </Accordion.Header>
                  <Accordion.Body className="p1 black-20">
                    We accept various payment methods, including major credit
                    cards (Visa, Mastercard, American Express), PayPal, and
                    direct bank transfers. You can choose the most convenient
                    option during the checkout process.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </motion.div>
          </Col>
          <Col xs={12} lg={6}>
            <motion.div
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="1" className="mt-3">
                  <Accordion.Header>
                    Do you have corporate plans?
                  </Accordion.Header>
                  <Accordion.Body className="p1 black-20">
                    We accept various payment methods, including major credit
                    cards (Visa, Mastercard, American Express), PayPal, and
                    direct bank transfers. You can choose the most convenient
                    option during the checkout process.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </motion.div>
            <motion.div
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="1" className="mt-3">
                  <Accordion.Header>
                    How often do you add new content?
                  </Accordion.Header>
                  <Accordion.Body className="p1 black-20">
                    We accept various payment methods, including major credit
                    cards (Visa, Mastercard, American Express), PayPal, and
                    direct bank transfers. You can choose the most convenient
                    option during the checkout process.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </motion.div>
            <motion.div
              initial={Animations.BottomToTop.child.hidden}
              whileInView={Animations.BottomToTop.child.visible}
              viewport={{ once: true }}
            >
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="1" className="mt-3">
                  <Accordion.Header>
                    Can I cancel my subscription at any time?
                  </Accordion.Header>
                  <Accordion.Body className="p1 black-20">
                    We accept various payment methods, including major credit
                    cards (Visa, Mastercard, American Express), PayPal, and
                    direct bank transfers. You can choose the most convenient
                    option during the checkout process.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </motion.div>
          </Col>
        </Row>
        <motion.div
          className="banner d-flex justify-content-center justify-content-md-between align-items-center flex-wrap flex-md-nowrap bg-primary-100 white gap-4 mt-5"
          variants={Animations.BottomToTop.child}
          initial={Animations.BottomToTop.child.hidden}
          whileInView={Animations.BottomToTop.child.visible}
          viewport={{ once: true }}
        >
          <div className="text-center text-sm-start">
            <h6 className="body1">Still Need Help?</h6>
            <p className="m-0">
              Can't find the answer here? Message us for help!
            </p>
          </div>
          <button className="btn-banner" onClick={() => navigate("/contact")}>
            Shoot Us A Message!
          </button>
        </motion.div>
      </Container>
    </div>
  );
}
