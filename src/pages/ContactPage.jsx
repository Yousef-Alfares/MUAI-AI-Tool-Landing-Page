import Contact from "../components/local/contact/Contact";
import { motion } from "framer-motion";

export default function ContactPage() {
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
      <Contact />
    </motion.div>
  );
}
