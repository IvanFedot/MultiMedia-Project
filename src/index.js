import React from "react";
import * as ReactDOMClient from "react-dom/client";
import Base from "./Base.js";
import "./files/style/Base_Style.css";

const root = ReactDOMClient.createRoot(document.getElementById("root"))

root.render(<Base />)