import React, { useEffect, useRef, useId } from "react";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage({ className = "" }) {
  const hairRef = useRef(null);
  const doorRef = useRef(null);
  const iconsRef = useRef(null);

  // 🔑 unique IDs per instance (so filters don't collide across the 3 copies)
  const uid = useId();
  const filterId = `${uid}-fireFilter`;

  // SVG filter node refs (avoid query by duplicate ids)
  const turbRef = useRef(null);
  const dispRef = useRef(null);

  useEffect(() => {
    // 🔥 Hair animation: use element refs, not global #ids
    const turbEl = turbRef.current;
    const dispEl = dispRef.current;
    const doorEl = doorRef.current;
    const iconsEl = iconsRef.current;

    if (turbEl) {
      gsap.to(turbEl, {
        attr: { seed: 100 },
        duration: 15,
        repeat: -1,
        ease: "none",
      });
    }

    if (dispEl) {
      gsap.to(dispEl, {
        attr: { scale: 30 },
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // 🎭 Hover tilt (left side up, right side down)
    const onEnter = () => {
      gsap.to(doorEl, { rotateZ: -10, duration: 0.4, ease: "power2.out" });
    };
    const onLeave = () => {
      gsap.to(doorEl, { rotateZ: 0, duration: 0.4, ease: "power2.inOut" });
    };
    if (doorEl) {
      doorEl.addEventListener("mouseenter", onEnter);
      doorEl.addEventListener("mouseleave", onLeave);
    }

    // 🎢 Scroll movement + fall trigger
    let scrollTween;
    let fallTrigger;

    if (doorEl && iconsEl) {
      scrollTween = gsap.to(doorEl, {
        y: 300,
        ease: "none",
        scrollTrigger: {
          trigger: doorEl,
          start: "top center",
          endTrigger: iconsEl,
          end: "top center",
          scrub: true,
        },
      });

      fallTrigger = ScrollTrigger.create({
        trigger: iconsEl,
        start: "top center",
        onEnter: () => {
          // Stop scroll-based animation
          scrollTween?.kill();

          // Independent fall animation
          gsap.to(doorEl, {
            y: "+=500",
            rotateZ: 120,
            duration: 1,
            ease: "bounce.out",
          });
        },
        onLeaveBack: () => {
          // Reset back to top
          gsap.to(doorEl, {
            y: 0,
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
              // Spin when fully reset
              gsap.to(doorEl, {
                rotateZ: "+=360",
                duration: 1,
                ease: "power2.inOut",
              });
            },
          });

          // Restore scroll-based tween
          scrollTween = gsap.to(doorEl, {
            y: 300,
            ease: "none",
            scrollTrigger: {
              trigger: doorEl,
              start: "top center",
              endTrigger: iconsEl,
              end: "top center",
              scrub: true,
            },
          });
        },
      });
    }

    return () => {
      // cleanup listeners
      if (doorEl) {
        doorEl.removeEventListener("mouseenter", onEnter);
        doorEl.removeEventListener("mouseleave", onLeave);
      }
      // kill triggers/tweens for this instance
      fallTrigger?.kill();
      scrollTween?.kill();
      // Do NOT kill all triggers globally; App.jsx manages its own
    };
  }, []);

  return (
    // 👇 include incoming className so App can pass "homepage"
    <div className={`relative w-full h-screen bg-[#faecba] flex flex-col items-center justify-center overflow-hidden ${className}`}>
      {/* SVG Filter for Hair — use unique id per instance */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <filter id={filterId}>
          <feTurbulence
            ref={turbRef}
            type="fractalNoise"
            baseFrequency="0.005 0.03"
            numOctaves="2"
            seed="0"
            result="turbulence"
          />
          <feDisplacementMap
            ref={dispRef}
            in2="turbulence"
            in="SourceGraphic"
            scale="20"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      {/* Background Text */}
      <h1 className="absolute text-[16vw] font-extrabold text-[#FBE9A9] tracking-wide select-none transform scale-y-[1.6] leading-none">
        TRIPLETTA
      </h1>

      {/* Logo with Hair */}
      <div className="relative w-[70vw] sm:w-[50vw] md:w-[35vw] xl:w-[25vw] z-10">
        <img
          src="/logohair.png"
          alt="Logo Hairs"
          className="absolute top-0 left-0 w-full h-full"
          style={{ filter: `url(#${filterId})` }}  // 👈 unique filter per instance
        />
        <img src="/logo.png" alt="Logo" className="relative w-full h-full" />
      </div>

      {/* Door */}
      <div className="absolute right-[5vw] top-1/2 -translate-y-1/2 flex items-center gap-2 perspective-[1000px]">
        <img ref={doorRef} src="/door.png" alt="Door" className="w-[18vw] min-w-[150px]" />
      </div>

      {/* Bottom Left Recrutement */}
      <div className="absolute bottom-[3vw] left-[3vw] flex items-center gap-2 cursor-pointer">
        <span className="text-orange-600 text-base sm:text-3xl md:text-xl lg:text-2xl xl:text-4xl font-medium">
          Recrutement
        </span>
        <span className="text-orange-600 text-lg sm:text-xl md:text-2xl lg:text-2xl">
          &gt;
        </span>
      </div>


      {/* Social Icons (door falls here) */}
     <div ref={iconsRef} className="absolute bottom-[3vw] right-[3vw] flex gap-[2vw]">
  <a href="#" className="text-orange-600 text-[clamp(2.5rem,4vw,5rem)]"><FaInstagram /></a>
  <a href="#" className="text-orange-600 text-[clamp(2.5rem,4vw,5rem)]"><FaTiktok /></a>
  <a href="#" className="text-orange-600 text-[clamp(2.5rem,4vw,5rem)]"><FaFacebook /></a>
</div>

    </div>
  );
}

