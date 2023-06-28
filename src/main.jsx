import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TourProvider, useTour } from "@reactour/tour";

const steps = [
  {
    selector: ".first-step",
    content: "Bienvenido, aqui puedes descargar nuestra aplicacion",
  },
  {
    selector: ".second-step",
    content: "Nuestra aplicacion cuenta con todas estas funciones",
  },
  {
    selector: ".third-step",
    content:
      "Tambien contamos con estas herramientas que te ayudaran en tu dia a dia",
  },
  {
    selector: ".fourth-step",
    content: "Aqui tambien puedes descargar nuestra aplicacion",
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TourProvider steps={steps}>
      <App />
    </TourProvider>
  </React.StrictMode>
);
