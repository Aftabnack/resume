import { PDFViewer, Font } from "@react-pdf/renderer";
import Resume from "./resume";

Font.register({
  family: "Mouse Memoirs",
  src: import.meta.env.BASE_URL + "fonts/MouseMemoirs-Regular.ttf",
});
Font.register({
  family: "Lato",
  fonts: [
    { src: import.meta.env.BASE_URL + "fonts/Lato-Regular.ttf" }, // font-style: normal, font-weight: normal
    {
      src: import.meta.env.BASE_URL + "fonts/Lato-Italic.ttf",
      fontStyle: "italic",
    },
    {
      src: import.meta.env.BASE_URL + "fonts/Lato-Light.ttf",
      fontWeight: 300,
    },
    {
      src: import.meta.env.BASE_URL + "fonts/Lato-LightItalic.ttf",
      fontWeight: 300,
      fontStyle: "italic",
    },
    { src: import.meta.env.BASE_URL + "fonts/Lato-Bold.ttf", fontWeight: 700 },
  ],
});
Font.registerHyphenationCallback((word) => [word]);

const App = () => (
  <PDFViewer style={{ width: "803px", height: "1132px" }} showToolbar={false}>
    <Resume />
  </PDFViewer>
);

export default App;
