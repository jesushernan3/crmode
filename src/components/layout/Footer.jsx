import React from "react";

const Footer = () => {
  return (
    <footer className="border-t-4 border-white py-8 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-base sm:text-lg font-extrabold">
          © 2024 BRUTAL.DEV
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-base sm:text-lg font-semibold hover:underline"
            style={{
              textUnderlineOffset: 4,
              textDecorationThickness: 2,
              textDecorationColor: "#B26CFF",
            }}
          >
            TWITTER
          </a>
          <a
            href="#"
            className="text-base sm:text-lg font-semibold hover:underline"
            style={{
              textUnderlineOffset: 4,
              textDecorationThickness: 2,
              textDecorationColor: "#B26CFF",
            }}
          >
            GITHUB
          </a>
          <a
            href="#"
            className="text-base sm:text-lg font-semibold hover:underline"
            style={{
              textUnderlineOffset: 4,
              textDecorationThickness: 2,
              textDecorationColor: "#B26CFF",
            }}
          >
            LINKEDIN
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
