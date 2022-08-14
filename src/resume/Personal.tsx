import { Image, View, StyleSheet } from "@react-pdf/renderer";
import Icons from "../components/Icons";
import Section from "../components/Section";
import Typography from "../components/Typography";

const styles = StyleSheet.create({
  locIcon: { height: 18, width: 18, marginRight: 8 },
  locContainer: { marginTop: 8, flexDirection: "row" },
  linksContainer: { marginTop: 4, flexDirection: "row" },
});

export default function Personal() {
  return (
    <Section>
      <Typography variant="heading">Aftab Khan</Typography>
      <Typography variant="subheading">Lead Software Engineer (FE)</Typography>
      <View style={styles.locContainer}>
        <Image
          src={{
            uri: "https://cdn-icons-png.flaticon.com/128/535/535188.png",
          }}
          style={styles.locIcon}
        />
        <Typography variant="content">Bengaluru, India</Typography>
      </View>
      <View style={styles.linksContainer}>
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
