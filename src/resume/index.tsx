import { Page, View, Document, Font, StyleSheet } from "@react-pdf/renderer";
import Education from "./Education";
import Experience from "./Experience";
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

const styles = StyleSheet.create({
  page: { flexDirection: "row", backgroundColor: "white" },
  leftview: { backgroundColor: "#0284c7", flex: 1 },
  rightview: { flex: 2 },
});

// Create Document Component
const Resume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.leftview}>
        <Personal />
        <Skills />
        <Experience />
        <Education />
      </View>
      <View style={styles.rightview}></View>
    </Page>
  </Document>
);

export default Resume;
