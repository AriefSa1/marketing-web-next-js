'use client'
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Hero from "./Hero";
import BlogCard from "./BlogCard";
import Service from "./Service";
import Testimoni from "./Testimoni";
import ProductSection from "./_product/ProductSection";

function Homepage() {
  const { ref, inView } = useInView({threshold: 0.2});
  const animationControls = useAnimation();

  useEffect(() => {
    console.log("inView:", inView);
    if (inView) {
      console.log("Animation started!");
      animationControls.start("visible");
    }
  }, [inView, animationControls]);

  return (
    <div className="scroll-container" ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={animationControls}
        viewport={{root: ref}}
        transition={{duration: 0.5, delay: 0.25}}
      >
        <Hero />
        <ProductSection />
        <BlogCard />
        <Service />
        <Testimoni />
      </motion.div>
    </div>
  );
}

export default Homepage;