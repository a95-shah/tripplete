
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CITIES = [
  "RENNES", "LYON", "PARIS", "BORDEAUX", "MONTROUGE", "TOULOUSE", "MARSEILLES",
];

const IMAGES = [
  "/d.png", "/a.png", "/b.png", "/c.png", "/e.png", "/f.png", "/g.png",
];

const Description = ({ className = "" }) => {
  const monImageRef = useRef(null);
  const sectionRef = useRef(null);
  const citiesRef = useRef(null);
    const handleDoorClick = () => {
    alert("Door clicked! Welcome to Tripletta!");
  };

useEffect(() => {
  const animatedImage = monImageRef.current;
  const section = sectionRef.current;
  if (!animatedImage || !section) return;

  let ctx;

  const initAnimation = () => {
    // kill previous context if exists
    if (ctx) ctx.revert();

    if (window.innerWidth < 768) {
      // On mobile, keep image fixed in center
      gsap.set(animatedImage, {
        clearProps: "all",
        x: 0,
        y: 0,
        rotation: 0,
        position: "absolute",
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
      });
      return;
    }

    // Desktop/tablet animation
    ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 4,
          pin: animatedImage,
          pinSpacing: false,
        },
      });

      tl.fromTo(
        animatedImage,
        { y: 0, x: 20, rotation: 0 },
        { y: 200, x: 70, rotation: 0, ease: "power2.inOut", duration: 2 }
      );

      tl.to(animatedImage, { duration: 0.5 });

      tl.to(animatedImage, {
        y: window.innerHeight,
        rotation: 45,
        ease: "power2.inOut",
        duration: 3,
      });
    });
  };

  // run initially
  initAnimation();

  // re-run on resize
  window.addEventListener("resize", initAnimation);

  return () => {
    if (ctx) ctx.revert();
    window.removeEventListener("resize", initAnimation);
  };
}, []);



  useEffect(() => {
    const cities = citiesRef.current;
    if (!cities) return;

    gsap.to(cities, {
      xPercent: -50,
      repeat: -1,
      ease: "linear",
      duration: 30,
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-screen text-gray-300 overflow-hidden ${className}`}
    >
      {/* Moving Cities + Images on top */}
      <div className="absolute left-0 w-full overflow-hidden">
        <div
          ref={citiesRef}
          className="flex gap-16 whitespace-nowrap w-max items-center"
        >
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex gap-16 items-center">
              {CITIES.map((city, i) => (
                <div key={i} className="flex items-center gap-6">
                  <span className="text-[#AEC58F] font-extrabold transform scale-y-150 
                                   text-[clamp(4rem,6vw,8rem)]">
                    {city}
                  </span>
                  {IMAGES[i % IMAGES.length] && (
                    <img
                      src={IMAGES[i % IMAGES.length]}
                      alt={city}
                      className="rounded-full object-cover 
                                 w-[clamp(6rem,8vw,12rem)] h-[clamp(6rem,8vw,12rem)]"
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Content section */}
      <div className="h-full w-full py-30 px-6 flex flex-col">
        <div className="flex-1 flex flex-col md:flex-row items-center md:items-start">
          {/* Left side text */}
          <p className="uppercase mt-10 xl:mt-40 font-extrabold md:w-2/3 leading-tight md:ml-10 
                        text-[clamp(2rem,3vw,4rem)]">
            Moments of life to share with family or friends, with quality pizzas
            according to the seasons, a light and leavened dough. A neighborhood
            pizzeria but not only; specialties by city, fresh pasta and local
            drinks. On site, to take away or for delivery... Always close to
            you! La Pizza e la Vita.
          </p>

          {/* Right side images */}
          <div className="relative mt-8 xl:mt-30 md:mt-0 md:ml-12 
                          w-[clamp(18rem,28vw,34rem)] h-[clamp(18rem,28vw,34rem)] 
                          flex items-center justify-center">
            <img
              id="description-image"
              src="/restu.png"
              alt="restaurant"
              className="w-full h-full object-contain"
            />
            <img
              ref={monImageRef}
              src="/mon.png"
              alt="logo"
              className="absolute w-3/4 h-3/4 md:w-full md:h-full object-contain cursor-pointer"
              onClick={handleDoorClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;


