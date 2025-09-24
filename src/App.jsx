
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import LandingPage from "./components/LandingPage";
// import HomePage from "./components/HomePage";
// import CategoryPage from "./components/CategoryPage";
// import Description from "./components/Description";
// import ShopPage from "./components/ShopPage";
// import WallPage from "./components/WallPage";
// import Footer from "./components/Footer";

// gsap.registerPlugin(ScrollTrigger);

// export default function App() {
//   const wrapperRef = useRef(null);
//   const appTriggersRef = useRef([]);
//   const colorIndexRef = useRef(0);

//   const colorThemes = [
//     { background: "#283618", text: "#a2d2ff" },
//     { background: "#bc6c25", text: "#ffb703" },
//     { background: "#023047", text: "#ff8fa3" },
//     { background: "#ffb703", text: "#00D4AA" },
//     { background: "#a2d2ff", text: "#FF8C42" },
//   ];

//   // ----- Infinite Scroll -----
//  // ----- Infinite Scroll -----
// useEffect(() => {
//   const wrapper = document.querySelector(".scroll-wrapper");
//   if (!wrapper) return;

//   const block = wrapper.querySelector(".block");
//   if (!block) return;

//   let blockHeight = block.offsetHeight;
//   let totalHeight = blockHeight * 3;
//   let middleStart = blockHeight;

//   const setScrollPosition = () => {
//     window.scrollTo({ top: middleStart, behavior: "auto" });
//   };

//   setScrollPosition();

//   const onScroll = () => {
//     const y = window.scrollY;
//     if (y <= 1) {
//       window.scrollTo({ top: y + blockHeight, behavior: "auto" });
//     } else if (y >= totalHeight - window.innerHeight - 1) {
//       window.scrollTo({ top: y - blockHeight, behavior: "auto" });
//     }
//   };

//   const recalcSizes = () => {
//     blockHeight = block.offsetHeight;
//     totalHeight = blockHeight * 3;
//     middleStart = blockHeight;
//     setScrollPosition();
//   };

//   // run on resize + whenever GSAP refreshes
//   window.addEventListener("scroll", onScroll, { passive: true });
//   window.addEventListener("resize", recalcSizes);
//   ScrollTrigger.addEventListener("refresh", recalcSizes);

//   return () => {
//     window.removeEventListener("scroll", onScroll);
//     window.removeEventListener("resize", recalcSizes);
//     ScrollTrigger.removeEventListener("refresh", recalcSizes);
//   };
// }, []);


//   // ----- Color change -----
//   useEffect(() => {
//     const wrapper = wrapperRef.current;
//     if (!wrapper) return;

//     const initTriggers = () => {
//       // cleanup old triggers
//       appTriggersRef.current.forEach((t) => t.kill());
//       appTriggersRef.current = [];

//       const homeSections = gsap.utils.toArray(".homepage-trigger");

//       homeSections.forEach((section) => {
//         const trigger = ScrollTrigger.create({
//           trigger: section,
//           start: "top center",
//           end: "bottom center",
//           onEnter: () => {
//             colorIndexRef.current++;
//             const theme =
//               colorThemes[colorIndexRef.current % colorThemes.length];
//             gsap.to(wrapper, {
//               backgroundColor: theme.background,
//               duration: 0.6,
//               overwrite: "auto",
//             });
//             gsap.to("h1, h2, h3, h4, h5, h6, p, div, span, .themed-text", {
//               color: theme.text,
//               duration: 0.6,
//               overwrite: "auto",
//             });
//           },
//           onEnterBack: () => {
//             colorIndexRef.current++;
//             const theme =
//               colorThemes[colorIndexRef.current % colorThemes.length];
//             gsap.to(wrapper, {
//               backgroundColor: theme.background,
//               duration: 0.6,
//               overwrite: "auto",
//             });
//             gsap.to("h1, h2, h3, h4, h5, h6, p, div, span, .themed-text", {
//               color: theme.text,
//               duration: 0.6,
//               overwrite: "auto",
//             });
//           },
//         });

//         appTriggersRef.current.push(trigger);
//       });

//       ScrollTrigger.refresh();
//     };

//     initTriggers();

//     // re-init on resize
//     const onResize = () => {
//       initTriggers();
//     };

//     window.addEventListener("resize", onResize);

//     // set initial theme
//     const initialTheme = colorThemes[0];
//     gsap.set(wrapper, { backgroundColor: initialTheme.background });
//     gsap.set("h1, h2, h3, h4, h5, h6, p, span, div, .themed-text", {
//       color: initialTheme.text,
//     });

//     return () => {
//       window.removeEventListener("resize", onResize);
//       appTriggersRef.current.forEach((t) => t.kill());
//       appTriggersRef.current = [];
//     };
//   }, []);

//   // ----- Sections -----
//   const sections = (
//     <>
//       <div className="homepage-trigger bg-transparent">
//         <HomePage />
//       </div>
//       <CategoryPage className="bg-transparent" />
//       <div className="description-section bg-transparent">
//         <Description />
//       </div>
//       <div className="shop-section bg-transparent">
//         <ShopPage />
//       </div>
//       <WallPage className="bg-transparent" />
//       <Footer className="bg-transparent" />
//     </>
//   );

//   return (
//     <>
//       <LandingPage />

//       {/* Background layer for theme animation */}
//       <div
//         ref={wrapperRef}
//         className="fixed inset-0 -z-10 w-full h-full"
//       ></div>

//       {/* Scrollable content */}
//       <div className="scroll-wrapper w-full">
//         <div className="block">{sections}</div>
//         <div className="block">{sections}</div>
//         <div className="block">{sections}</div>
//       </div>
//     </>
//   );
// }






import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import CategoryPage from "./components/CategoryPage";
import Description from "./components/Description";
import ShopPage from "./components/ShopPage";
import WallPage from "./components/WallPage";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const wrapperRef = useRef(null);
  const appTriggersRef = useRef([]);
  const colorIndexRef = useRef(0);

  const colorThemes = [
    { background: "#283618", text: "#a2d2ff" },
    { background: "#bc6c25", text: "#ffb703" },
    { background: "#023047", text: "#ff8fa3" },
    { background: "#ffb703", text: "#00D4AA" },
    { background: "#a2d2ff", text: "#FF8C42" },
  ];

  // ----- Infinite Scroll -----
 // ----- Infinite Scroll -----
useEffect(() => {
  const wrapper = document.querySelector(".scroll-wrapper");
  if (!wrapper) return;

  const block = wrapper.querySelector(".block");
  if (!block) return;

  let blockHeight = block.offsetHeight;
  let totalHeight = blockHeight * 3;
  let middleStart = blockHeight;

  const setScrollPosition = () => {
    window.scrollTo({ top: middleStart, behavior: "auto" });
  };

  setScrollPosition();

  const onScroll = () => {
    const y = window.scrollY;
    if (y <= 1) {
      window.scrollTo({ top: y + blockHeight, behavior: "auto" });
    } else if (y >= totalHeight - window.innerHeight - 1) {
      window.scrollTo({ top: y - blockHeight, behavior: "auto" });
    }
  };

  const recalcSizes = () => {
    blockHeight = block.offsetHeight;
    totalHeight = blockHeight * 3;
    middleStart = blockHeight;
    setScrollPosition();
  };

  // run on resize + whenever GSAP refreshes
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", recalcSizes);
  ScrollTrigger.addEventListener("refresh", recalcSizes);

  return () => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", recalcSizes);
    ScrollTrigger.removeEventListener("refresh", recalcSizes);
  };
}, []);


  // ----- Color change -----
useEffect(() => {
  const wrapper = wrapperRef.current;
  if (!wrapper) return;

  const initTriggers = () => {
    appTriggersRef.current.forEach((t) => t.kill());
    appTriggersRef.current = [];

    const homeSections = gsap.utils.toArray(".homepage-trigger");

    homeSections.forEach((section) => {
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          colorIndexRef.current++;
          const theme = colorThemes[colorIndexRef.current % colorThemes.length];
          
          gsap.to(wrapper, {
            backgroundColor: theme.background,
            duration: 0.6,
            overwrite: "auto",
          });
          
          gsap.to("h1, h2, h3, h4, h5, h6, p, div, span, .themed-text", {
            color: theme.text,
            duration: 0.6,
            overwrite: "auto",
          });

          // For SVG images, use filter instead of fill
          gsap.to(".svg-icon", {
            filter: getColorFilter(theme.text),
            duration: 0.6,
            overwrite: "auto",
          });
        },
        onEnterBack: () => {
          colorIndexRef.current++;
          const theme = colorThemes[colorIndexRef.current % colorThemes.length];
          
          gsap.to(wrapper, {
            backgroundColor: theme.background,
            duration: 0.6,
            overwrite: "auto",
          });
          
          gsap.to("h1, h2, h3, h4, h5, h6, p, div, span, .themed-text", {
            color: theme.text,
            duration: 0.6,
            overwrite: "auto",
          });

          // For SVG images, use filter instead of fill
          gsap.to(".svg-icon", {
            filter: getColorFilter(theme.text),
            duration: 0.6,
            overwrite: "auto",
          });
        },
      });

      appTriggersRef.current.push(trigger);
    });

    ScrollTrigger.refresh();
  };

  // Function to convert colors to CSS filter
  const getColorFilter = (color) => {
    switch(color) {
      case "#a2d2ff": // light blue
        return "brightness(0) saturate(100%) invert(74%) sepia(46%) saturate(346%) hue-rotate(180deg) brightness(101%) contrast(101%)";
      case "#ffb703": // orange
        return "brightness(0) saturate(100%) invert(82%) sepia(61%) saturate(6498%) hue-rotate(358deg) brightness(102%) contrast(103%)";
      case "#ff8fa3": // pink
        return "brightness(0) saturate(100%) invert(73%) sepia(25%) saturate(1068%) hue-rotate(295deg) brightness(105%) contrast(101%)";
      case "#00D4AA": // teal
        return "brightness(0) saturate(100%) invert(78%) sepia(59%) saturate(2613%) hue-rotate(142deg) brightness(91%) contrast(103%)";
      case "#FF8C42": // orange-red
        return "brightness(0) saturate(100%) invert(66%) sepia(98%) saturate(1946%) hue-rotate(343deg) brightness(103%) contrast(101%)";
      default:
        return "brightness(0)"; // black fallback
    }
  };

  initTriggers();

  const onResize = () => {
    initTriggers();
  };

  window.addEventListener("resize", onResize);

  // set initial theme
  const initialTheme = colorThemes[0];
  gsap.set(wrapper, { backgroundColor: initialTheme.background });
  gsap.set("h1, h2, h3, h4, h5, h6, p, span, div, .themed-text", {
    color: initialTheme.text,
  });
  
  // Set initial SVG filter
  gsap.set(".svg-icon", { filter: getColorFilter(initialTheme.text) });

  return () => {
    window.removeEventListener("resize", onResize);
    appTriggersRef.current.forEach((t) => t.kill());
    appTriggersRef.current = [];
  };
}, []);

  // ----- Sections -----
  const sections = (
    <>
      <div className="homepage-trigger bg-transparent">
        <HomePage />
      </div>
      <CategoryPage className="bg-transparent" />
      <div className="description-section bg-transparent">
        <Description />
      </div>
      <div className="shop-section bg-transparent">
        <ShopPage />
      </div>
      <WallPage className="bg-transparent" />
      <Footer className="bg-transparent" />
    </>
  );

  return (
    <>
      <LandingPage />

      {/* Background layer for theme animation */}
      <div
        ref={wrapperRef}
        className="fixed inset-0 -z-10 w-full h-full"
      ></div>

      {/* Scrollable content */}
      <div className="scroll-wrapper w-full">
        <div className="block">{sections}</div>
        <div className="block">{sections}</div>
        <div className="block">{sections}</div>
      </div>
    </>
  );
}



