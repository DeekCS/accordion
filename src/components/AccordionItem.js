import { useState } from "react";

export function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((isOpen) => !isOpen);
  return (
    <div className={isOpen ? "item open" : "item "}>
      <p className="number">{num < 10 ? `0${num}` : num}</p>
      <p className="title" onClick={toggle}>
        {title}
      </p>
      <p className="icon">
        {isOpen ? (
          <span onClick={toggle}>-</span>
        ) : (
          <span onClick={toggle}>+</span>
        )}
      </p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
