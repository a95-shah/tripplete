
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
              {/* <span className="absolute left-0 -top-8 -bottom-12 w-[2px] bg-[#D2CC9F]" />
              <span className="absolute right-0 -top-8 -bottom-12 w-[2px] bg-[#D2CC9F]" /> */}
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
              className="bg-[#BDD3AD] font-bold w-[160px] h-[55px] uppercase
                         text-lg shadow-[0_8px_18px_rgba(0,0,0,0.15)]
                         hover:brightness-105 transition"
             onClick={() => alert("door clicked welcome to tripletta")}
            >
              LA BOUTIQUE
            </button>
          </div>
        </div>

        {/* DESKTOP LAYOUT - Side by side (updated to match screenshot) */}
       {/* DESKTOP LAYOUT - Side by side */}
<div className="hidden lg:flex items-center min-h-screen lg:max-w-[1000px] xl:max-w-[1400px] 2xl:max-w-[1800px] mx-auto">
  {/* LEFT SIDE - IMAGE */}
  <div className="w-[45%] 2xl:w-[50%] flex items-center justify-center pl-8 pr-4 2xl:pl-0 2xl:pr-8">
    <div className="relative w-full max-w-[clamp(350px,40vw,700px)]">
      <img
        src="/kitchen.png"
        alt="Kitchen scene with chefs"
        className="w-full h-auto object-cover block"
      />
      {/* vertical lines */}
      <span className="absolute left-0 -top-12 -bottom-12 w-[2px] md:w-[3px] 2xl:w-[4px] bg-[#D2CC9F]" />
      <span className="absolute right-0 -top-12 -bottom-12 w-[2px] md:w-[3px] 2xl:w-[4px] bg-[#D2CC9F]" />
    </div>
  </div>

  {/* RIGHT SIDE - TEXT */}
  <div className="w-[55%] 2xl:w-[50%] flex flex-col justify-center pl-8 pr-12 xl:pl-12 xl:pr-16 2xl:pl-16 2xl:pr-0">
    {/* Heading */}
    <h1 className="uppercase font-extrabold font-stretch-extra-expanded leading-[1] tracking-tighter text-[#AFCB9B] 
                   text-[clamp(32px,5vw,72px)] xl:text-[clamp(48px,5vw,84px)] 2xl:text-[clamp(56px,4vw,96px)] mb-6 xl:mb-10 2xl:mb-14">
      AVOIR DU STYLE<br />
      N'EST PAS QU'UNE<br />
      HISTOIRE DE<br />
      SAPES.
    </h1>

    {/* Paragraph */}
    <p className="text-gray-700 text-[clamp(14px,1.2vw,20px)] 2xl:text-[clamp(16px,1vw,22px)] leading-[1.4] xl:leading-[1.5] 2xl:leading-[1.6] mb-8 xl:mb-12 2xl:mb-14 max-w-[650px]">
      Mais quand même, on a voulu se faire plaisir avec une collection de t-shirts et d'accessoires à notre image : la rue, le soleil, la bonne bouffe et l'attitude qu'on assume. Casquettes, chaussettes, sweats, t-shirts, le style Tripletta, de la tête aux pieds.
    </p>

    {/* Button */}
    <button
      id="shop-btn" 
      className="bg-green-300 cursor-pointer font-bold 
                 w-[clamp(160px,12vw,240px)] h-[clamp(55px,4vw,75px)] 
                 text-[clamp(14px,1.2vw,20px)] uppercase
                 shadow-[0_8px_18px_rgba(0,0,0,0.15)]
                 hover:brightness-105 transition self-start"
      onClick={() => alert("door clicked welcome to tripletta")}
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