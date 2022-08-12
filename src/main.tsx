import ReactPDF, { PDFViewer } from "@react-pdf/renderer";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PDFViewer>
      <App />
    </PDFViewer>
  </React.StrictMode>
);
