"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTitle from "../Common/SectionTitle";

const Pricing = () => {
  // State and controls for animations
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  
  // Intersection observer hooks for detecting when elements are in view
  const { ref: ref1, inView: inView1 } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();
  const { ref: ref3, inView: inView3 } = useInView();

  // Effect to trigger animations when elements come into view
  useEffect(() => {
    if (inView1) {
      controls1.start({ opacity: 1, y: 0 });
    }
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) {
      controls2.start({ opacity: 1, y: 0 });
    }
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) {
      controls3.start({ opacity: 1, y: 0 });
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
          className="bg-blue-200 rounded-lg p-6 mb-8 w-full"
        >
          <SectionTitle
            title="Assess"
            paragraph="We define the strategic vision of your product alongside your team"
            center
          />
        </motion.div>
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 50 }}
          animate={controls2}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-blue-200 rounded-lg p-6 mb-8 w-full"
        >
          <SectionTitle
            title="Analyse"
            paragraph="We work closely with your team to understand the time and effort our collaboration would need."
            center
          />
        </motion.div>
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: 50 }}
          animate={controls3}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-blue-200 rounded-lg p-6 mb-8 w-full"
        >
          <SectionTitle
            title="Execute"
            paragraph="Transforming your product with world-class technological expertise."
            center
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
