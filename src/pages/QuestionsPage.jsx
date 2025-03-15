import React from "react";
import FaqQuestions from "../components/global/Faq-Questions/FaqQuestions";
import { motion } from "framer-motion";

export default function QuestionsPage() {
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
      <FaqQuestions />
    </motion.div>
  );
}
