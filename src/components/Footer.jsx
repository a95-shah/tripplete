
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

  // ----- Marquee animation -----
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

  // ----- Mon.png animation -----
  useEffect(() => {
    const section = sectionRef.current;
    const mon = monRef.current;
    if (!section || !mon) return;

    let ctx; // GSAP context for cleanup

    const initAnimation = () => {
      // cleanup previous animation
      if (ctx) ctx.revert();

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        // reset starting position
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
              { x: -200, y: -200 }, // top-left
              { x: window.innerWidth * 0.3, y: 100 }, // curve
              { x: window.innerWidth - 200, y: -100 }, // top-right
            ],
            curviness: 1.25,
          },
          ease: "power1.inOut",
          duration: 0.6,
        });

        // Step 2 → move straight up off screen
        tl.to(mon, {
          x: window.innerWidth - 200,
          y: -600,
          ease: "power1.inOut",
          duration: 0.4,
        });
      }, section);

      ScrollTrigger.refresh();
    };

    initAnimation();

    // re-init on resize
    const onResize = () => {
      initAnimation();
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <footer ref={sectionRef} className={`w-full relative overflow-hidden ${className}`}>
      {/* floating mon.png */}
      <img
        ref={monRef}
        src="/mon.png"
        alt="logo"
        className="absolute z-50 pointer-events-none"
        style={{ width: "250px", height: "250px", objectFit: "contain" }}
      />

      {/* top heading */}
      <div className="py-6 text-center">
        <h2 className="text-3xl md:text-5xl xl:text-8xl inline-block transform scale-y-150 font-extrabold tracking-wider text-[#0B3926]">
          LA VIE D'UN,QUARTIER
          <br />
        </h2>
        <h2 className="text-3xl md:text-5xl xl:text-8xl mt-5 xl:mt-10 transform scale-y-150 font-extrabold tracking-wide text-[#0B3926]">
          AVEC SUPPLEMENT D'AME.
        </h2>
      </div>

      {/* links */}
      <div className="grid grid-cols-2 gap-6 place-items-center text-base sm:text-lg md:flex md:justify-evenly md:items-center py-4 md:gap-25 md:text-xl xl:text-4xl font-thin xl:py-10 xl:px-10 xl:gap-90">
        <a href="#" className="flex items-center gap-2 hover:opacity-70">
          Recrutement <FaChevronRight className="text-sm sm:text-base md:text-lg xl:text-2xl" />
        </a>
        <a href="#" className="flex items-center gap-2 hover:opacity-70">
          Fidelite <FaChevronRight className="text-sm sm:text-base md:text-lg xl:text-2xl" />
        </a>
        <a href="#" className="flex items-center gap-2 hover:opacity-70">
          CGU/CGV <FaChevronRight className="text-sm sm:text-base md:text-lg xl:text-2xl" />
        </a>
        <a href="#" className="flex items-center gap-2 hover:opacity-70">
          Contact <FaChevronRight className="text-sm sm:text-base md:text-lg xl:text-2xl" />
        </a>
      </div>

      {/* marquee */}
      <div className="overflow-hidden relative">
        <div
          ref={marqueeRef}
          className="flex gap-16 items-center whitespace-nowrap w-max xl:py-8"
        >
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex gap-16 items-center">
              {CITIES.map((city, i) => (
                <React.Fragment key={i}>
                  <span className="text-[#AEC58F] inline-block transform scale-y-150 text-7xl xl:text-9xl font-extrabold tracking-tight">
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




