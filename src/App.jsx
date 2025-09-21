


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
//   // const fixedImageRef = useRef(null); // <-- REMOVED
//   const appTriggersRef = useRef([]);
//   const colorIndexRef = useRef(0);

//   const colorThemes = [
//     { background: "#0F0F23", text: "#E6E6FA" },
//     { background: "#1A1A2E", text: "#FFD700" },
//     { background: "#2D1B69", text: "#FF6B9D" },
//     { background: "#16213E", text: "#00D4AA" },
//     { background: "#0D1421", text: "#FF8C42" },
//   ];

//   // ----- Infinite Scroll (This logic is intact) -----
//   useEffect(() => {
//     const wrapper = wrapperRef.current;
//     if (!wrapper) return;
//     const block = wrapper.querySelector(".block");
//     if (!block) return;
//     const blockHeight = block.offsetHeight;
//     const totalHeight = blockHeight * 3;
//     const middleStart = blockHeight;
//     window.scrollTo({ top: middleStart, behavior: "auto" });
//     const onScroll = () => {
//       const y = window.scrollY;
//       if (y <= 1) {
//         window.scrollTo({ top: y + blockHeight, behavior: "auto" });
//       } else if (y >= totalHeight - window.innerHeight - 1) {
//         window.scrollTo({ top: y - blockHeight, behavior: "auto" });
//       }
//     };
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // ----- Color change (This logic is intact) -----
//   useEffect(() => {
//     const wrapper = wrapperRef.current;
//     if (!wrapper) return;
//     appTriggersRef.current.forEach((t) => t.kill());
//     appTriggersRef.current = [];
//     const homeSections = gsap.utils.toArray(".homepage-trigger");
//     homeSections.forEach((section) => {
//       const trigger = ScrollTrigger.create({
//         trigger: section,
//         start: "top center",
//         end: "bottom center",
//         onEnter: () => {
//           colorIndexRef.current++;
//           const theme =
//             colorThemes[colorIndexRef.current % colorThemes.length];
//           gsap.to(wrapper, {
//             backgroundColor: theme.background,
//             duration: 0.6,
//           });
//           gsap.to("h1, h2, h3, h4, h5, h6, p,div, span, .themed-text", {
//             color: theme.text,
//             duration: 0.6,
//           });
//         },
//         onEnterBack: () => {
//           colorIndexRef.current++;
//           const theme =
//             colorThemes[colorIndexRef.current % colorThemes.length];
//           gsap.to(wrapper, {
//             backgroundColor: theme.background,
//             duration: 0.6,
//           });
//           gsap.to("h1, h2, h3, h4, h5, h6, p,div, span, .themed-text", {
//             color: theme.text,
//             duration: 0.6,
//           });
//         },
//       });
//       appTriggersRef.current.push(trigger);
//     });
//     const initialTheme = colorThemes[0];
//     gsap.set(wrapper, { backgroundColor: initialTheme.background });
//     gsap.set("h1, h2, h3, h4, h5, h6, p, span,div, .themed-text", {
//       color: initialTheme.text,
//     });
//     return () => {
//       appTriggersRef.current.forEach((t) => t.kill());
//       appTriggersRef.current = [];
//     };
//   }, []);

//   // ----- IMAGE ANIMATION useEffect HAS BEEN REMOVED -----

//   const sections = (
//     <>
//       <div className="homepage-trigger">
//         <HomePage />
//       </div>
//       <CategoryPage />
//       <div className="description-section">
//         <Description />
//       </div>
//       <div className="shop-section">
//         <ShopPage />
//       </div>
//       <WallPage />
//       <Footer />
//     </>
//   );

//   return (
//     <>
//       <LandingPage />
//       {/* The global fixed image container has been removed */}
//       <div ref={wrapperRef} className="w-full">
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
    { background: "#0F0F23", text: "#E6E6FA" },
    { background: "#1A1A2E", text: "#FFD700" },
    { background: "#2D1B69", text: "#FF6B9D" },
    { background: "#16213E", text: "#00D4AA" },
    { background: "#0D1421", text: "#FF8C42" },
  ];

  // ----- Infinite Scroll -----
  useEffect(() => {
    const wrapper = document.querySelector(".scroll-wrapper");
    if (!wrapper) return;

    const block = wrapper.querySelector(".block");
    if (!block) return;

    const blockHeight = block.offsetHeight;
    const totalHeight = blockHeight * 3;
    const middleStart = blockHeight;

    window.scrollTo({ top: middleStart, behavior: "auto" });

    const onScroll = () => {
      const y = window.scrollY;
      if (y <= 1) {
        window.scrollTo({ top: y + blockHeight, behavior: "auto" });
      } else if (y >= totalHeight - window.innerHeight - 1) {
        window.scrollTo({ top: y - blockHeight, behavior: "auto" });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ----- Color change -----
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

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
          const theme =
            colorThemes[colorIndexRef.current % colorThemes.length];
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
        },
        onEnterBack: () => {
          colorIndexRef.current++;
          const theme =
            colorThemes[colorIndexRef.current % colorThemes.length];
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
        },
      });

      appTriggersRef.current.push(trigger);
    });

    const initialTheme = colorThemes[0];
    gsap.set(wrapper, { backgroundColor: initialTheme.background });
    gsap.set("h1, h2, h3, h4, h5, h6, p, span, div, .themed-text", {
      color: initialTheme.text,
    });

    return () => {
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
