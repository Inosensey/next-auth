"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

// Store
import { notificationStore } from "@/store/notificationStore";

const SlideDownNotification = () => {
  const { showSlideNotification, message } = notificationStore();

  // Variants
  const slideNotificationVariants = {
    hidden: {
      y: "-10vh",
      transition: {
        type: "tween",
      },
    },
    show: {
      y: "1vh",
      transition: {
        type: "tween",
        duration: 0.55,
      },
    },
  };

  return (
    <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
      {showSlideNotification && (
        <motion.div
          variants={slideNotificationVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
          style={{
            position: "fixed",
            background: "#248f24",
            textAlign: "center",
            padding: "0.2rem 1rem",
            borderRadius: "7px",
            width: "max-content",
            left: "0",
            right: "0",
            margin: "0 auto",
            zIndex: "50",
            color: "#fff"
          }}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SlideDownNotification;
