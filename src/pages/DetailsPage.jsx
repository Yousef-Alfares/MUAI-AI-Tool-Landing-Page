import React from "react";
import ContentDetails from "../components/local/content-details/ContentDetails";
import News from "../components/global/news/News";
import { motion } from "framer-motion";

export default function DetailsPage() {
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
      <ContentDetails />
      <News heading="More News Like This" ParagraphDisplay="none" />
    </motion.div>
  );
}
