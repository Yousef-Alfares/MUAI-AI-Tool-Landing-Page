import NotFound from "../components/local/not-found/NotFound";
import { motion } from "framer-motion";

export default function NotFoundPage() {
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
      <NotFound />
    </motion.div>
  );
}
