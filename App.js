import React from "react";
import ReactDOM from "react-dom/client";


// React Element
// JSX (transplied before it reaches the JS) - Parcel - Bable
// JSX => React.createElement => ReactElement-JS Object => HTML Element(render)
const jsxHeading = <h1 id="heading" className="head">Namaste React from JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
