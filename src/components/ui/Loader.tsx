import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-[9999]">
      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="w-12 h-12 border-4 border-secondary border-t-transparent rounded-full"/>
    </div>
  );
}
