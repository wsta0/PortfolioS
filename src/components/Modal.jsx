import { motion, AnimatePresence } from "framer-motion";
export default function Modal({ open, onClose, children }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4"
          initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}>
          <motion.div onClick={e=>e.stopPropagation()}
            initial={{scale:0.95,opacity:0}} animate={{scale:1,opacity:1}} exit={{scale:0.95,opacity:0}}
            className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-lg w-full">
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
