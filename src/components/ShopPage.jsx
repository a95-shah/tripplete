

import React from "react";

const ShopPage = () => {
  return (
    <section className="bg-[#F7F0DB] w-full min-h-screen flex items-center">
      <div className="w-full max-w-[1280px] mx-auto">
        {/* MOBILE LAYOUT - Stacked vertically */}
        <div className="flex flex-col lg:hidden px-6 py-8">
          {/* Mobile: Text first */}
          <div className="w-full text-center mb-8">
            <h1 className="uppercase font-extrabold font-stretch-extra-expanded leading-[1.1] tracking-tighter text-[#AFCB9B] 
                           text-[40px] sm:text-[36px]">
              AVOIR DU STYLE N'EST <br />
              HISTOIRE DE <br />
              SAPES.
            </h1>
          </div>

          {/* Mobile: Image second */}
          <div className="w-full flex items-center justify-center mb-6">
            <div className="relative w-full max-w-sm">
              <img
                src="/kitchen.png"
                alt="Kitchen scene with chefs"
                className="w-full h-auto object-cover block"
              />
              {/* vertical lines extending above & below the image */}
              <span className="absolute left-0 -top-13 -bottom-13 w-[2px] bg-[#D2CC9F]" />
              <span className="absolute right-0 -top-13 -bottom-13 w-[2px] bg-[#D2CC9F]" />
            </div>
          </div>

          {/* Mobile: Paragraph third */}
          <div className="w-full text-center mb-6">
            <p className="text-gray-800 tracking-tighter mt-10 text-[14px] leading-[1.2] max-w-md mx-auto">
              Mais quand même, on a voulu se faire plaisir avec une collection de t-shirts et d'accessoires à notre image : la rue, le soleil, la bonne bouffe et l'attitude qu'on assume. Casquettes, chaussettes, sweats, t-shirts, le style Tripletta, de la tête aux pieds.
            </p>
          </div>

          {/* Mobile: Button fourth */}
          <div className="w-full flex justify-center">
            <button
              id="shop-btn" 
              className="bg-[#BDD3AD] text-green-950 font-bold w-[140px] h-[50px] uppercase
                         text-xl shadow-[0_8px_18px_rgba(0,0,0,0.15)]
                         hover:brightness-105 transition"
            >
              LA BOUTIQUE
            </button>
          </div>
        </div>

        {/* DESKTOP LAYOUT - Side by side (unchanged) */}
        <div className="hidden lg:flex">
          {/* LEFT SIDE - IMAGE with extended lines */}
          <div className="w-[40%] flex items-center justify-center px-6 py-8">
            {/* Image wrapper with relative positioning */}
            <div className="relative w-full">
              <img
                src="/kitchen.png"
                alt="Kitchen scene with chefs"
                className="w-full h-auto object-cover block"
              />

              {/* vertical lines extending above & below the image */}
              <span className="absolute left-0 -top-13 -bottom-13 w-[2px] bg-[#D2CC9F]" />
              <span className="absolute right-0 -top-13 -bottom-13 w-[2px] bg-[#D2CC9F]" />
            </div>
          </div>

          {/* RIGHT SIDE - TEXT (narrower to balance image) */}
          <div className="w-[55%] flex flex-col justify-center pl-6 pr-8">
            {/* Heading */}
            <h1 className="uppercase font-extrabold font-stretch-extra-expanded leading-[1.1] tracking-tighter text-[#AFCB9B] 
                           text-[42px] md:text-[50px] xl:text-[60px]">
              AVOIR DU STYLE N'EST <br />
              HISTOIRE DE <br />
              SAPES.
            </h1>

            {/* Paragraph */}
            <p className="mt-6 max-w-md text-gray-800 tracking-tighter text-[15px] leading-[0.9]">
              Mais quand même, on a voulu se faire plaisir avec une collection de t-shirts et d'accessoires à notre image : la rue, le soleil, la bonne bouffe et l'attitude qu'on assume. Casquettes, chaussettes, sweats, t-shirts, le style Tripletta, de la tête aux pieds.
            </p>

            {/* Button */}
            <button
              id="shop-btn" 
              className="mt-8 bg-[#BDD3AD]  cursor-pointer font-bold w-[140px] h-[50px] uppercase
                         text-xl shadow-[0_8px_18px_rgba(0,0,0,0.15)]
                         hover:brightness-105 transition"
            >
              LA BOUTIQUE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopPage;