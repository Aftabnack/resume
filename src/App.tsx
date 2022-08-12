import { PDFViewer, Font } from "@react-pdf/renderer";
import Resume from "./resume";

Font.register({
  family: "Mouse Memoirs",
  src: "/fonts/MouseMemoirs-Regular.ttf",
});
Font.register({
  family: "Lato",
  fonts: [
    { src: "/fonts/Lato-Regular.ttf" }, // font-style: normal, font-weight: normal
    { src: "/fonts/Lato-Italic.ttf", fontStyle: "italic" },
    { src: "/fonts/Lato-Light.ttf", fontWeight: 300 },
    {
      src: "/fonts/Lato-LightItalic.ttf",
      fontWeight: 300,
      fontStyle: "italic",
    },
    { src: "/fonts/Lato-Bold.ttf", fontWeight: 700 },
  ],
});
Font.registerHyphenationCallback((word) => [word]);

const App = () => (
  <PDFViewer style={{ width: "803px", height: "1132px" }} showToolbar={false}>
    <Resume />
  </PDFViewer>
);

export default App;
