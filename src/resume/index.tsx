import { Page, View, Document } from "@react-pdf/renderer";
import Personal from "./Personal";
import Skills from "./Skills";

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
