import { AccordionItem } from "./AccordionItem";
import { useState } from "react";

export function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(1);
  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <AccordionItem
          key={index}
          num={index + 1}
          title={faq.title}
          curOpen={curOpen}
          setCurOpen={setCurOpen}
        >
          {faq.text}
        </AccordionItem>
      ))}
    </div>
  );
}
