import { Page, View, Document, Font } from "@react-pdf/renderer";
import Personal from "./Personal";
import Skills from "./Skills";

let url;
try {
  url = import.meta.env.BASE_URL;
} catch (e) {
  url = "public/";
}

Font.register({
  family: "Mouse Memoirs",
  src: url + "fonts/MouseMemoirs-Regular.ttf",
});
Font.register({
  family: "Lato",
  fonts: [
    { src: url + "fonts/Lato-Regular.ttf" }, // font-style: normal, font-weight: normal
    {
      src: url + "fonts/Lato-Italic.ttf",
      fontStyle: "italic",
    },
    {
      src: url + "fonts/Lato-Light.ttf",
      fontWeight: 300,
    },
    {
      src: url + "fonts/Lato-LightItalic.ttf",
      fontWeight: 300,
      fontStyle: "italic",
    },
    { src: url + "fonts/Lato-Bold.ttf", fontWeight: 700 },
  ],
});
Font.registerHyphenationCallback((word) => [word]);

// Create Document Component
const Resume = () => (
  <Document>
    <Page size="A4" style={{ flexDirection: "row", backgroundColor: "white" }}>
      <View style={{ backgroundColor: "#0284c7", flex: 1 }}>
        <Personal />
        <Skills />
      </View>
      <View style={{ flex: 2 }}></View>
    </Page>
  </Document>
);

export default Resume;
