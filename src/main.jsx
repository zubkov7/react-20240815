import { createElement } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// root.render(
//   createElement(
//     "ul",
//     { className: "someClass", style: { color: "red" } },
//     [1, 2, 3, 4, 5].map((id) => createElement("li", {}, id))
//   )
// );

root.render(
  <ul className='someClass' style={{ color: "red" }}>
    {[1, 2, 3, 4, 5].map((id) => createElement("li", {}, id))}
  </ul>
);
