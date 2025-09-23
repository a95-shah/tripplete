
import React from "react";

const ShopPage = () => {
  return (
    <section className="bg-[#F7F0DB] w-full min-h-screen flex items-center">
      <div className="w-full max-w-[1400px] lg:max-w-none 2xl:ml-0 2xl:pl-16 mx-auto lg:mx-0">
        {/* MOBILE LAYOUT - Stacked vertically (updated for proper scroll detection) */}
        <div className="flex flex-col lg:hidden px-6 py-12 min-h-screen justify-center">
          {/* Mobile: Text first */}
          <div className="w-full text-center mb-12">
            <h1 className="uppercase font-extrabold font-stretch-extra-expanded leading-[1.1] tracking-tighter text-[#AFCB9B] 
                           text-[40px] sm:text-[44px]">
              AVOIR DU STYLE N'EST <br />
              HISTOIRE DE <br />
              SAPES.
            </h1>
          </div>

          {/* Mobile: Image second */}
          <div className="w-full flex items-center justify-center mb-12">
            <div className="relative w-full max-w-sm">
              <img
                src="/kitchen.png"
                alt="Kitchen scene with chefs"
                className="w-full h-auto object-cover block"
              />
              {/* vertical lines extending above & below the image */}
              <span className="absolute left-0 -top-12 -bottom-12 w-[2px] bg-[#D2CC9F]" />
              <span className="absolute right-0 -top-12 -bottom-12 w-[2px] bg-[#D2CC9F]" />
            </div>
          </div>

          {/* Mobile: Paragraph third */}
          <div className="w-full text-center mb-12">
            <p className="text-gray-800 tracking-tighter text-[16px] leading-[1.4] max-w-sm mx-auto">
              Mais quand même, on a voulu se faire plaisir avec une collection de t-shirts et d'accessoires à notre image : la rue, le soleil, la bonne bouffe et l'attitude qu'on assume. Casquettes, chaussettes, sweats, t-shirts, le style Tripletta, de la tête aux pieds.
            </p>
          </div>

          {/* Mobile: Button fourth */}
          <div className="w-full flex justify-center pb-8">
            <button
              id="shop-btn" 
              className="bg-[#BDD3AD] text-green-950 font-bold w-[160px] h-[55px] uppercase
                         text-lg shadow-[0_8px_18px_rgba(0,0,0,0.15)]
                         hover:brightness-105 transition"
            >
              LA BOUTIQUE
            </button>
          </div>
        </div>

        {/* DESKTOP LAYOUT - Side by side (updated to match screenshot) */}
        <div className="hidden lg:flex items-center min-h-screen lg:max-w-[1000px] xl:max-w-[1400px] 2xl:max-w-[1800px]">
          {/* LEFT SIDE - IMAGE (larger and properly positioned) */}
          <div className="w-[45%] 2xl:w-[50%] flex items-center justify-center pl-8 pr-4 2xl:pl-0 2xl:pr-8">
            {/* Image wrapper with relative positioning */}
            <div className="relative w-full max-w-[400px] xl:max-w-[650px] 2xl:max-w-[1000px]">
              <img
                src="/kitchen.png"
                alt="Kitchen scene with chefs"
                className="w-full h-auto object-cover block"
              />

              {/* vertical lines extending above & below the image */}
              <span className="absolute left-0 -top-14 -bottom-14 xl:-top-16 xl:-bottom-16 2xl:-top-30 2xl:-bottom-25 w-[2px] xl:w-[3px] 2xl:w-[5px] bg-[#D2CC9F]" />
              <span className="absolute right-0 -top-14 -bottom-14 xl:-top-16 xl:-bottom-16 2xl:-top-30 2xl:-bottom-25 w-[2px] xl:w-[3px] 2xl:w-[5px] bg-[#D2CC9F]" />
            </div>
          </div>

          {/* RIGHT SIDE - TEXT (properly sized and positioned) */}
          <div className="w-[55%] 2xl:w-[50%] flex flex-col justify-center pl-8 pr-12 xl:pl-12 xl:pr-16 2xl:pl-16 2xl:pr-0">
            {/* Heading - much larger to match screenshot */}
            <h1 className="uppercase font-extrabold font-stretch-extra-expanded leading-[0.9] tracking-tighter text-[#AFCB9B] 
                           text-[48px] xl:text-[84px] 2xl:text-[110px] mb-6 xl:mb-12 2xl:mb-16">
              AVOIR DU STYLE<br />
              N'EST PAS QU'UNE<br />
              HISTOIRE DE<br />
              SAPES.
            </h1>

            {/* Paragraph - larger and more readable */}
            <p className="text-gray-700 text-[14px] xl:text-[20px] 2xl:text-[24px] leading-[1.3] xl:leading-[1.5] 2xl:leading-[1.6] mb-8 xl:mb-14 2xl:mb-18 max-w-[450px] xl:max-w-[600px] 2xl:max-w-[700px]">
              Mais quand même, on a voulu se faire plaisir avec une collection de t-shirts et d'accessoires à notre image : la rue, le soleil, la bonne bouffe et l'attitude qu'on assume. Casquettes, chaussettes, sweats, t-shirts, le style Tripletta, de la tête aux pieds.
            </p>

            {/* Button - larger and more prominent */}
            <button
              id="shop-btn" 
              className=" bg-green-300 cursor-pointer font-bold w-[160px] h-[55px] xl:w-[220px] xl:h-[70px] 2xl:w-[260px] 2xl:h-[80px] uppercase
                         text-[15px] xl:text-[20px] 2xl:text-[24px] shadow-[0_8px_18px_rgba(0,0,0,0.15)]
                         hover:brightness-105 transition self-start"
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