
"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTitle from "../Common/SectionTitle";

const steps = [
  {
    step: "Step 1",
    title: "Assess",
    paragraph: "We define the strategic vision of your product alongside your team",
  },
  {
    step: "Step 2",
    title: "Analyse",
    paragraph: "We work closely with your team to understand the time and effort our collaboration would need.",
  },
  {
    step: "Step 3",
    title: "Execute",
    paragraph: "Transforming your product with world-class technological expertise.",
  },
];

const Pricing = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: false,
    threshold: 0.5
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: false,
    threshold: 0.5
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: false,
    threshold: 0.5
  });

  useEffect(() => {
    if (inView1) {
      controls1.start({ opacity: 1, y: 0 });
    } else {
      controls1.start({ opacity: 0, y: 50 });
    }
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) {
      controls2.start({ opacity: 1, y: 0 });
    } else {
      controls2.start({ opacity: 0, y: 50 });
    }
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) {
      controls3.start({ opacity: 1, y: 0 });
    } else {
      controls3.start({ opacity: 0, y: 50 });
    }
  }, [controls3, inView3]);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={controls1}
          transition={{ duration: 0.8 }}
          className="bg-transparent-200 rounded-lg p-6 mb-8 w-full"
        >
          <h2 className="text-xl font-bold mb-2 text-center">{steps[0].step}</h2>
          <SectionTitle
            title={steps[0].title}
            paragraph={steps[0].paragraph}
            center
          />
        </motion.div>
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 50 }}
          animate={controls2}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-transparent-200 rounded-lg p-6 mb-8 w-full"
        >
          <h2 className="text-xl font-bold mb-2 text-center">{steps[1].step}</h2>
          <SectionTitle
            title={steps[1].title}
            paragraph={steps[1].paragraph}
            center
          />
        </motion.div>
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: 50 }}
          animate={controls3}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-transparent-200 rounded-lg p-6 mb-8 w-full"
        >
          <h2 className="text-xl font-bold mb-2 text-center">{steps[2].step}</h2>
          <SectionTitle
            title={steps[2].title}
            paragraph={steps[2].paragraph}
            center
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
