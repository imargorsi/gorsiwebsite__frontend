import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./stylesheets/utils.css";
import "./stylesheets/global.css";

createRoot(document.getElementById("root")).render(<App />);
