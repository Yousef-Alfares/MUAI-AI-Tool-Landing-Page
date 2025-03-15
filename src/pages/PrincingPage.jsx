import FaqQuestions from "../components/global/Faq-Questions/FaqQuestions";
import Content from "../components/global/content/Content";
import Princing from "../components/global/princing/Princing";
import { motion } from "framer-motion";

export default function PrincingPage() {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.3 },
      }}
    >
      <Princing brouseProducts={false} />
      <FaqQuestions />
      <Content />
    </motion.div>
  );
}
