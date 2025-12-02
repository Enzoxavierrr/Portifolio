"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

export const FloatingDock = ({ items }) => {
  return (
    <>
      <FloatingDockDesktop items={items} />
      <FloatingDockMobile items={items} />
    </>
  );
};

const FloatingDockMobile = ({ items }) => {
  const [open, setOpen] = useState(false);
  // Filtra os separadores no mobile
  const filteredItems = items.filter(item => !item.isSeparator);
  
  return (
    <div style={styles.mobileContainer} className="floating-dock-mobile">
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            style={styles.mobileMenu}
          >
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (filteredItems.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  style={styles.mobileItem}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <div style={styles.mobileIcon}>{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        style={styles.mobileButton}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </button>
    </div>
  );
};

const Separator = () => (
  <div style={styles.separator} />
);

const FloatingDockDesktop = ({ items }) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      style={styles.desktopContainer}
      className="floating-dock-desktop"
    >
      {items.map((item, idx) => 
        item.isSeparator ? (
          <Separator key={`separator-${idx}`} />
        ) : (
          <IconContainer mouseX={mouseX} key={item.title} {...item} />
        )
      )}
    </motion.div>
  );
};

function IconContainer({ mouseX, title, icon, href }) {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const widthTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a 
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      <motion.div
        ref={ref}
        style={{ ...styles.iconContainer, width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              style={styles.tooltip}
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}

const styles = {
  desktopContainer: {
    display: "none",
    height: "64px",
    alignItems: "flex-end",
    gap: "16px",
    borderRadius: "16px",
    backgroundColor: "rgba(23, 23, 23, 0.9)",
    padding: "0 16px 12px 16px",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(245, 158, 11, 0.3)",
  },
  separator: {
    width: "1px",
    height: "32px",
    backgroundColor: "rgba(245, 158, 11, 0.4)",
    alignSelf: "flex-end",
    marginBottom: "4px",
  },
  mobileContainer: {
    position: "relative",
    display: "block",
  },
  mobileMenu: {
    position: "absolute",
    left: "0",
    bottom: "100%",
    marginBottom: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    width: "40px",
  },
  mobileItem: {
    display: "flex",
    width: "40px",
    height: "40px",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    backgroundColor: "rgba(23, 23, 23, 0.9)",
    border: "1px solid rgba(245, 158, 11, 0.3)",
    textDecoration: "none",
    backdropFilter: "blur(12px)",
  },
  mobileIcon: {
    width: "18px",
    height: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mobileButton: {
    display: "flex",
    width: "48px",
    height: "48px",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    backgroundColor: "rgba(23, 23, 23, 0.95)",
    border: "1px solid rgba(245, 158, 11, 0.3)",
    cursor: "pointer",
    backdropFilter: "blur(12px)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
  },
  iconContainer: {
    position: "relative",
    display: "flex",
    aspectRatio: "1",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    backgroundColor: "rgba(23, 23, 23, 0.9)",
    border: "1px solid rgba(245, 158, 11, 0.2)",
    transition: "border-color 0.2s ease",
  },
  tooltip: {
    position: "absolute",
    top: "-32px",
    left: "50%",
    width: "fit-content",
    whiteSpace: "nowrap",
    borderRadius: "6px",
    border: "1px solid rgba(245, 158, 11, 0.4)",
    backgroundColor: "rgba(23, 23, 23, 0.95)",
    padding: "2px 8px",
    fontSize: "12px",
    color: "#F59E0B",
  },
};

