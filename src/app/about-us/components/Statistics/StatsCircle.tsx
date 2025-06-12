'use client';

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatsCircleProps {
  percentage: number;
  label: string;
}

const StatsCircle = ({ percentage, label }: StatsCircleProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({ strokeDashoffset: 440 - (440 * percentage) / 100 });
      let start = 0;
      const step = () => {
        if (start < percentage) {
          start++;
          setValue(start);
          requestAnimationFrame(step);
        }
      };
      step();
    }
  }, [inView, controls, percentage]);

  return (
    <div className="flex flex-col items-center gap-2 w-32" ref={ref}>
      <svg className="w-24 h-24 rotate-[-90deg]">
        <circle cx="48" cy="48" r="70" stroke="#e5e7eb" strokeWidth="12" fill="none" />
        <motion.circle
          cx="48"
          cy="48"
          r="70"
          stroke="#0f172a"
          strokeWidth="12"
          fill="none"
          strokeDasharray="440"
          strokeDashoffset="440"
          animate={controls}
          transition={{ duration: 1.2 }}
        />
      </svg>
      <div className="-mt-20 text-xl font-bold text-slate-900">{value}%</div>
      <p className="text-sm text-center text-gray-600">{label}</p>
    </div>
  );
}

export default StatsCircle