import HeaderAbout from "../components/local/about-header/HeaderAbout";
import FaqQuestions from "../components/global/Faq-Questions/FaqQuestions";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.3 },
      }}
    >
      <HeaderAbout />
      <FaqQuestions />
    </motion.div>
  );
}
