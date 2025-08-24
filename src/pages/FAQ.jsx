import React from "react";
import AccordionMenu from "../components/ui/AccordionMenu";

const FAQ = () => {
  return (
    <div className="basis-2/3">
      <div className="mx-4 px-4 bg-gray-500 rounded-lg">
        <AccordionMenu title="ramdon item 1" answer="lorem ipsum algomas" />
        <AccordionMenu title="ramdon item 2" answer="lorem ipsum algomas" />
        <AccordionMenu title="ramdon item 3" answer="lorem ipsum algomas" />
      </div>
    </div>
  );
};

export default FAQ;
