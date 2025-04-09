import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Render the app with StrictMode disabled to prevent double rendering of effects
// which can cause issues with Three.js and animation libraries
createRoot(document.getElementById("root")!).render(<App />);
