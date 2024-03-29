import { Image, View, StyleSheet } from "@react-pdf/renderer";
import Icons from "../components/Icons";
import Section from "../components/Section";
import Typography from "../components/Typography";
import { base } from "../url";

const styles = StyleSheet.create({
  locIcon: { height: 18, width: 18, marginRight: 8 },
  locContainer: { marginTop: 8, flexDirection: "row" },
  linksContainer: { marginTop: 4, flexDirection: "row" },
});

export default function Personal() {
  return (
    <Section>
      <Typography variant="heading">Aftab Alam Khan</Typography>
      <Typography variant="subheading">
        Sr Software Engineer (Frontend)
      </Typography>
      <Typography variant="small">+91 9738209981</Typography>
      <Typography variant="small">aftabnack@gmail.com</Typography>
      <View style={styles.locContainer}>
        <Image
          src={{
            uri: base + "icons/location.png",
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
