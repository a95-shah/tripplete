import React, { useEffect, useRef } from "react";
import { FaChevronRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger, MotionPathPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const CITIES = [
  "RENNES", "LYON", "PARIS", "BORDEAUX", "MONTROUGE", "TOULOUSE", "MARSEILLES",
];

const IMAGES = ["/d.png", "/a.png", "/b.png", "/c.png", "/e.png", "/f.png"];

export default function Footer({ className = "" }) {
  const marqueeRef = useRef(null);
  const sectionRef = useRef(null);
  const monRef = useRef(null);

  // marquee animation
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    gsap.to(el, {
      xPercent: -50,
      ease: "linear",
      duration: 30,
      repeat: -1,
    });
  }, []);

  // mon.png animation
// mon.png animation
useEffect(() => {
  const section = sectionRef.current;
  const mon = monRef.current;
  if (!section || !mon) return;

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top bottom",   // start when footer enters
        end: "bottom top",     // end when footer leaves
        scrub: 1,
      },
    });

    // ensure starting position
    gsap.set(mon, {
      width: 400,
      height: 400,
      x: -200,
      y: -200,
    });

    // Step 1 → curve top-left → top-right
    tl.to(mon, {
      motionPath: {
        path: [
          { x: -200, y: -200 },                         // top-left
          { x: window.innerWidth * 0.3, y: 100 },       // curve
          { x: window.innerWidth - 200, y: -100 },      // top-right
        ],
        curviness: 1.25,
      },
      ease: "power1.inOut",
      duration: 0.6,
    });

    // Step 2 → move straight up off screen from top-right
    tl.to(mon, {
      x: window.innerWidth - 200,
      y: -600, // fly higher above viewport
      ease: "power1.inOut",
      duration: 0.4,
    });
  });

  return () => ctx.revert();
}, []);

  return (
    <footer ref={sectionRef} className={`w-full relative overflow-hidden  ${className}`}>
      {/* floating mon.png */}
      <img
        ref={monRef}
        src="/mon.png"
        alt="logo"
        className="absolute z-50 pointer-events-none"
        style={{ width: "400px", height: "400px", objectFit: "contain" }}
      />

      {/* top heading */}
      <div className="py-12 text-center">
        <h2 className="text-3xl md:text-5xl inline-block transform scale-y-150 font-extrabold tracking-wider text-[#0B3926]">
          LA VIE D'UN,QUARTIER
          <br />
        </h2>
        <h2 className="text-3xl md:text-5xl mt-5 transform scale-y-150 font-extrabold tracking-wide text-[#0B3926]">
          AVEC SUPPLEMENT D'AME.
        </h2>
      </div>

      {/* links */}
      <div className="flex justify-evenly items-center  py-5 gap-25 text-lg md:text-xl font-thin">
        <a href="#" className="flex items-center gap-2 hover:opacity-70">
          Recrutement <FaChevronRight size={18} />
        </a>
        <a href="#" className="flex items-center gap-2 hover:opacity-70">
          Fidelite <FaChevronRight size={18} />
        </a>
        <a href="#" className="flex items-center gap-2 hover:opacity-70">
          CGU/CGV <FaChevronRight size={18} />
        </a>
        <a href="#" className="flex items-center gap-2 hover:opacity-70">
          Contact <FaChevronRight size={18} />
        </a>
      </div>

      {/* marquee */}
      <div className="overflow-hidden relative py-10">
        <div
          ref={marqueeRef}
          className="flex gap-16 items-center whitespace-nowrap w-max"
        >
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex gap-16 items-center">
              {CITIES.map((city, i) => (
                <React.Fragment key={i}>
                  <span className="text-[#AEC58F] inline-block transform scale-y-150 text-8xl font-extrabold tracking-tight">
                    {city}
                  </span>
                  {IMAGES[i % IMAGES.length] && (
                    <img
                      src={IMAGES[i % IMAGES.length]}
                      alt={city}
                      className="w-36 h-36 object-cover rounded-full"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
