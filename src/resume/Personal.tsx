import { Image, View } from "@react-pdf/renderer";
import Icons from "../components/Icons";
import Section from "../components/Section";
import Typography from "../components/Typography";

export default function Personal() {
  return (
    <Section>
      <Typography variant="heading">Aftab Khan</Typography>
      <Typography variant="subheading">Lead Software Engineer (FE)</Typography>
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
    </Section>
  );
}
