import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./stylesheets/global.css";
import "./stylesheets/utils.css";

createRoot(document.getElementById("root")).render(<App />);
