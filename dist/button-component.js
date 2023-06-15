import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';
export function Button({ label }) {
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { type: "button", className: "btn btn-outline-secondary" }, label)));
}
