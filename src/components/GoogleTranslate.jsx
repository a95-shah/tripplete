// import { useEffect } from "react";

// export default function GoogleTranslate() {
//   useEffect(() => {
//     const addScript = document.createElement("script");
//     addScript.src =
//       "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//     document.body.appendChild(addScript);

//     window.googleTranslateElementInit = () => {
//       new window.google.translate.TranslateElement(
//         {
//           pageLanguage: "en", // default site language
//           includedLanguages: "en,fr", // add more if needed
//           layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
//         },
//         "google_translate_element"
//       );
//     };
//   }, []);

//   return (
//     <div
//       id="google_translate_element"
//       className="fixed top-4 right-4 z-50"
//     ></div>
//   );
// }
