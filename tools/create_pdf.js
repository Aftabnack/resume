import path from "path";
import React from "react";
import { renderToFile } from "@react-pdf/renderer";
import Resume from "../src/resume/index.tsx";

const filePath = path.resolve(process.cwd(), "dist/Aftab_Khan_Resume.pdf");
await renderToFile(React.createElement(Resume), filePath);
