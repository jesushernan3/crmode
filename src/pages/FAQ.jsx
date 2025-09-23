import React from "react";
import AccordionMenu from "../components/ui/AccordionMenu";
import PreguntasFrecuentes from "../data/PreguntasFrecuentas";

const FAQ = () => {
  const preguntas = PreguntasFrecuentes.map((preguntas) => {
    return (
      <AccordionMenu
        id={preguntas.id}
        title={preguntas.title}
        answer={preguntas.answer}
      />
    );
  });
  return (
    <div className="basis-2/3">
      <div className="mx-4 px-4 bg-gray-200 rounded-lg">
        {preguntas}
        {/* <AccordionMenu title="ramdon item 1" answer="lorem ipsum algomas" /> */}
        {/* <AccordionMenu title="ramdon item 2" answer="lorem ipsum algomas" /> */}
        {/* <AccordionMenu title="ramdon item 3" answer="lorem ipsum algomas" /> */}
      </div>
    </div>
  );
};

export default FAQ;
