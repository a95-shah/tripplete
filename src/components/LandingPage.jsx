import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import HomePage from "./HomePage";

const cities = [
  { name: "Paris", bg: "#f5f5dc", color: "#283618" },
  { name: "London", bg: "#1e90ff", color: "#bc6c25" },
  { name: "lille", bg: "#ff1493", color: "#023047" },
  { name: "Bordeaux", bg: "#228b22", color: "#ffb703" },
  { name: "Versailles", bg: "#ff8c00", color: "#a2d2ff" },
];

const LandingPage = () => {
  const [showHome, setShowHome] = useState(false);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline();

    cities.forEach((city) => {
      tl.to(containerRef.current, {
        backgroundColor: city.bg,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        textRef.current,
        {
          textContent: city.name.toUpperCase(),
          color: city.color,
          opacity: 1,
          duration: 0.2,
          ease: "power2.inOut",
        },
        "<" // run at the same time as background animation
      )
      .to(textRef.current, {
        opacity: 0,
        duration: 0.2,
      });
    });

    // Slide landing page up after animations
    tl.to(containerRef.current, {
      y: "-100%",
      duration: 0.8,
      ease: "power4.inOut",
      delay: 0,
      onComplete: () => setShowHome(true),
    });
  }, []);

  if (showHome) {
    // return <HomePage />;
    return null; // Hide LandingPage after animation
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 flex items-center justify-center 
            text-7xl sm:text-4xl md:text-[10rem] xl:text-[17rem] 
            transform scale-y-150 font-extrabold z-50"

    >
      <span ref={textRef}></span>
    </div>
  );
};

export default LandingPage;
