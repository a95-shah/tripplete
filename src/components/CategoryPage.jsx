import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CategoryPage({ className = "" }) {
  const items = [
    { id: 1, title: "LIVRER >", img: "/one.png" },
    { id: 2, title: "A EMPORTER >", img: "/two.png" },
    { id: 3, title: "SUR PLACE >", img: "/three.png" },
    { id: 4, title: "SHOP >", img: "/four.png" },
  ];

  const textRefs = useRef([]);

  useEffect(() => {
    textRefs.current.forEach((text, i) => {
      const img = text.parentNode.querySelector("img");

      // Hover in
      text.addEventListener("mouseenter", () => {
        gsap.to(img, { scale: 1.1, duration: 0.6, ease: "power3.out" });
        gsap.to(text, {
          backgroundColor: "#1E3A8A", // dark blue
          color: "#fff", // white text
          duration: 0.3,
        });
      });

      // Hover out
      text.addEventListener("mouseleave", () => {
        gsap.to(img, { scale: 1, duration: 0.6, ease: "power3.out" });
        gsap.to(text, {
          backgroundColor: "#E5E7EB", // light gray
          color: "#1E3A8A", // blue text
          duration: 0.3,
        });
      });
    });
  }, []);

  return (
    <div className={`min-h-screen flex items-center justify-center p-1  ${className}`}>
      {/* Outer container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-0.5 w-full max-w-7xl">
        {items.map((item, i) => (
          <div
            key={item.id}
            className={`relative overflow-hidden 
              ${i === 1 || i === 2 ? "lg:col-span-2" : "lg:col-span-1"}
              flex flex-col bg-white rounded-sm`}
          >
            {/* Top Text */}
            <h2
              ref={(el) => (textRefs.current[i] = el)}
              className="text-center text-xl sm:text-2xl lg:text-4xl font-extrabold py-3 sm:py-4 lg:py-5 cursor-pointer transition-colors"
            >
              {item.title}
            </h2>

            {/* Image container with responsive object-fit */}
            <div className="flex-1 w-full overflow-hidden min-h-[200px] sm:min-h-[200px] lg:min-h-[200px]">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-contain sm:object-contain lg:object-cover object-center transition-transform duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}