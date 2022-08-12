import React from "react";
import { Page, View, Document, Image } from "@react-pdf/renderer";
import Typography from "./components/Typography";
import Icons from "./components/Icons";

// Create Document Component
const Resume = () => (
  <Document>
    <Page size="A4" style={{ flexDirection: "row", backgroundColor: "white" }}>
      <View style={{ backgroundColor: "#16a34a", flex: 1 }}>
        <View style={{ padding: 10 }}>
          <Typography variant="heading">Aftab Khan</Typography>
          <Typography variant="subheading">
            Lead Software Engineer (FE)
          </Typography>
          <View style={{ marginTop: 8, flexDirection: "row" }}>
            <Image
              src={{
                uri: "https://cdn-icons-png.flaticon.com/128/535/535188.png",
              }}
              style={{ height: 18, width: 18, marginRight: 8 }}
            />
            <Typography variant="content">Bengaluru, India</Typography>
          </View>
          <View style={{ marginTop: 4, flexDirection: "row" }}>
            <Icons icon="phone" />
            <Icons icon="email" />
            <Icons icon="linkedin" />
            <Icons icon="github" />
            <Icons icon="twitter" />
            <Icons icon="medium" />
          </View>
        </View>
      </View>
      <View style={{ flex: 2 }}></View>
    </Page>
  </Document>
);

export default Resume;
