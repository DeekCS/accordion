export function AccordionItem({ num, title, curOpen, setCurOpen, children }) {
  const isOpen = curOpen === num;
  const toggle = () => setCurOpen(isOpen ? null : num);
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
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
