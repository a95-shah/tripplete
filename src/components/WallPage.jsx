import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Replace with your actual images in the public folder
const PHOTOS = [
  { 
    src: "/w1.png", 
    alt: "top-left", 
    classes: "top-[1%] left-[6%] w-[clamp(200px,16vw,320px)] h-[clamp(280px,22vw,420px)] xl:top-[2%] xl:left-[-16%]",
    mobileClasses: "top-[3%] left-1/2 transform -translate-x-1/2 w-[200px] h-[260px]"
  },
  { 
    src: "/w3.png", 
    alt: "center-left", 
    classes: "top-[27%] left-[29%] w-[clamp(200px,18vw,340px)] h-[clamp(320px,26vw,480px)] xl:top-[30%] xl:left-[14%]",
    mobileClasses: "top-[25%] left-1/2 transform -translate-x-1/2 w-[200px] h-[280px]"
  },
  { 
    src: "/w2.png", 
    alt: "top-right", 
    classes: "top-[10%] right-[6%] w-[clamp(200px,16vw,320px)] h-[clamp(280px,22vw,420px)] xl:top-[5%] xl:right-[-2%]",
    mobileClasses: "top-[50%] left-1/2 transform -translate-x-1/2 w-[200px] h-[260px]"
  },
  { 
    src: "/w5.png", 
    alt: "bottom-left", 
    classes: "bottom-[3%] left-[10%] w-[clamp(180px,15vw,300px)] h-[clamp(240px,20vw,380px)] xl:bottom-[5%] xl:left-[-15%]",
    mobileClasses: "top-[100%] left-1/2 transform -translate-x-1/2 w-[180px] h-[240px]"
  },
  { 
    src: "/w6.png", 
    alt: "bottom-right", 
    classes: "bottom-[1%] right-[6%] w-[clamp(180px,15vw,300px)] h-[clamp(240px,20vw,380px)] xl:bottom-[6%] xl:right-[-2%]",
    mobileClasses: "top-[73%] left-1/2 transform -translate-x-1/2 w-[180px] h-[240px]"
  },
  { 
    src: "/w4.png", 
    alt: "tall-center-right", 
    classes: "top-[52%] left-[52%] w-[clamp(220px,18vw,340px)] h-[clamp(360px,28vw,500px)] xl:top-[50%] xl:left-[45%]",
    mobileClasses: "top-[100%] left-1/2 transform -translate-x-1/2 w-[200px] h-[280px]"
  },
];

export default function WallPage() {
  const containerRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const images = imageRefs.current.filter(Boolean); // Filter out null refs

    if (!container || images.length === 0) return;

    // Ensure ScrollTrigger is properly initialized
    ScrollTrigger.refresh();

    // Clear any existing ScrollTrigger instances for this component
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.trigger === container) {
        trigger.kill();
      }
    });

    // Force a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Animation settings
      const animationDistance = 80; // Increased for more visible effect

      // Create animations for each image
      images.forEach((image, index) => {
        if (!image) return;

        let yMovement;
        
        switch (index) {
          case 0: // top-left - moves down
            yMovement = animationDistance;
            break;
          case 1: // center-left - moves up
            yMovement = -animationDistance * 1.2;
            break;
          case 2: // top-right - subtle movement
            yMovement = animationDistance * 0.8;
            break;
          case 3: // bottom-left - moves up
            yMovement = -animationDistance * 0.9;
            break;
          case 4: // bottom-right - moves up
            yMovement = -animationDistance * 0.7;
            break;
          case 5: // center-right tall - moves down
            yMovement = animationDistance * 1.1;
            break;
          default:
            yMovement = 0;
        }

        // Create individual ScrollTrigger for each image
        gsap.fromTo(image, 
          {
            y: -yMovement, // Start position (full range)
          },
          {
            y: yMovement, // End position (full range)
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top center", // Start earlier
              end: "bottom center", // End later
              scrub: 0.5, // Much more responsive
              invalidateOnRefresh: true,
              id: `wallpage-image-${index}`, // Unique ID for debugging
              markers: false, // Set to true for debugging
            }
          }
        );
      });

      // Refresh ScrollTrigger after creating all animations
      ScrollTrigger.refresh();
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      // Kill only ScrollTriggers related to this container
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="bg-amber-100 w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        ref={containerRef}
        className="relative w-full max-w-[1280px] h-[1300px] md:h-[1300px] sm:h-[1600px] mx-auto"
      >
        {/* vertical hr lines - Hide on mobile, show grid on desktop */}
        <div
          className="hidden md:block absolute inset-0 pointer-events-none 
          bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_2px,transparent_2px)] 
          bg-[length:calc(100%/6)_100%] bg-repeat-x"
        />
        
        {/* Mobile: single center vertical line */}
        <div className="md:hidden absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-[2px] bg-[rgba(0,0,0,0.08)] pointer-events-none" />

        {/* top horizontal line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-[rgba(0,0,0,0.08)] pointer-events-none" />
        {/* bottom horizontal line */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[rgba(0,0,0,0.08)] pointer-events-none" />

        {/* big stacked center text - Behind images */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0">
          <div className="inline-block transform scale-y-150 font-extrabold text-center leading-[0.78]">
            <div className="text-[3.8rem] sm:text-[6rem] md:text-[13rem] lg:text-[16.5rem]">WALL</div>
            <div className="mt-5 text-[3.8rem] sm:text-[6rem] md:text-[13rem] lg:text-[16.5rem]">OF</div>
            <div className="mt-5 text-[3.8rem] sm:text-[6rem] md:text-[13rem] lg:text-[16.5rem]">LOVE</div>
          </div>
        </div>

        {/* photos with connector lines on all 4 sides - Desktop */}
        {PHOTOS.map((p, i) => (
          <figure
            key={i}
            ref={(el) => {
              imageRefs.current[i] = el;
            }}
            className={`absolute border-8 border-[#F3EBDD] 
              shadow-[0_10px_20px_rgba(0,0,0,0.08)] overflow-hidden z-20
              ${p.classes} md:block hidden
              `}
          >
            <img 
              src={p.src} 
              alt={p.alt} 
              className="w-full h-full object-cover block"
              loading="lazy"
            />

            {/* connector lines (top, bottom, left, right) - Desktop */}
            <div className="absolute left-0 right-0 top-[-16px] h-[2px] bg-[rgba(0,0,0,0.08)]" />
            <div className="absolute left-0 right-0 bottom-[-16px] h-[2px] bg-[rgba(0,0,0,0.08)]" />
            <div className="absolute top-0 bottom-0 left-[-16px] w-[2px] bg-[rgba(0,0,0,0.08)]" />
            <div className="absolute top-0 bottom-0 right-[-16px] w-[2px] bg-[rgba(0,0,0,0.08)]" />
          </figure>
        ))}

        {/* Mobile Layout - Images in vertical line */}
        {PHOTOS.map((p, i) => (
          <figure
            key={`mobile-${i}`}
            ref={(el) => {
              if (!imageRefs.current[i]) imageRefs.current[i] = el;
            }}
            className={`md:hidden absolute border-8 border-[#F3EBDD] 
              shadow-[0_10px_20px_rgba(0,0,0,0.08)] overflow-hidden z-20
              ${p.mobileClasses}
              `}
          >
            <img 
              src={p.src} 
              alt={p.alt} 
              className="w-full h-full object-cover block"
              loading="lazy"
            />

            {/* connector lines - Mobile (only top and bottom to connect with center line) */}
            <div className="absolute left-0 right-0 top-[-16px] h-[2px] bg-[rgba(0,0,0,0.08)]" />
            <div className="absolute left-0 right-0 bottom-[-16px] h-[2px] bg-[rgba(0,0,0,0.08)]" />
          </figure>
        ))}
      </div>
    </section>
  );
}