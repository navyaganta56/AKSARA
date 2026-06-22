import React from 'react';
import { motion } from 'framer-motion';
import { Pencil, Ruler, PenTool, BookOpen, GraduationCap, Calculator, Notebook } from 'lucide-react';

const FloatingIcon = ({ Icon, x, y, delay, rotate, size = 40 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0.05, 0.15, 0.05],
      y: [y, y - 40, y],
      rotate: [rotate, rotate + 10, rotate]
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
    className="absolute pointer-events-none text-slate-300 z-0"
    style={{ left: x, top: y }}
  >
    <Icon size={size} strokeWidth={1.5} />
  </motion.div>
);

const FloatingDecoration = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Scattered icons throughout the page */}
      <FloatingIcon Icon={Pencil} x="5%" y="15%" delay={0} rotate={15} />
      <FloatingIcon Icon={Ruler} x="85%" y="25%" delay={1} rotate={-20} />
      <FloatingIcon Icon={PenTool} x="12%" y="45%" delay={2} rotate={45} />
      <FloatingIcon Icon={BookOpen} x="78%" y="60%" delay={3} rotate={-10} />
      <FloatingIcon Icon={GraduationCap} x="15%" y="80%" delay={4} rotate={30} />
      <FloatingIcon Icon={Calculator} x="90%" y="85%" delay={5} rotate={-15} />
      <FloatingIcon Icon={Notebook} x="45%" y="92%" delay={2.5} rotate={10} />

      {/* Section specific subtle ones (approximate scroll positions) */}
      <FloatingIcon Icon={Pencil} x="2%" y="120%" delay={1} rotate={115} />
      <FloatingIcon Icon={Ruler} x="95%" y="140%" delay={2} rotate={-50} />
      <FloatingIcon Icon={PenTool} x="8%" y="220%" delay={0.5} rotate={45} />
      <FloatingIcon Icon={BookOpen} x="92%" y="280%" delay={3.5} rotate={-10} />
    </div>
  );
};

export default FloatingDecoration;
