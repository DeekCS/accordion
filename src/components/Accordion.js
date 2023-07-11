import { AccordionItem } from "./AccordionItem";

export function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <AccordionItem
          key={index}
          num={index + 1}
          title={faq.title}
          text={faq.text}
        />
      ))}
    </div>
  );
}
