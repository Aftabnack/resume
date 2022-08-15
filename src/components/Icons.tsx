import { Image, Link, View, StyleSheet } from "@react-pdf/renderer";
import { base } from "../url";

type CompProps = {
  icon: "phone" | "email" | "linkedin" | "github" | "twitter" | "medium";
};

const iconMap = {
  phone: base + "icons/phone.png",
  email: base + "icons/mail.png",
  linkedin: base + "icons/linkedin.png",
  github: base + "icons/github.png",
  twitter: base + "icons/twitter.png",
  medium: base + "icons/medium.png",
};

const urls = {
  phone: "tel:+919738209981",
  email: "mailto:aftabnack@gmail.com",
  linkedin: "https://www.linkedin.com/in/aftabnack/",
  github: "https://github.com/Aftabnack",
  twitter: "https://twitter.com/aftabnack",
  medium: "https://medium.com/@aftabnack",
};

const styles = StyleSheet.create({
  icon: { height: 18, width: 18 },
  container: {
    height: 24,
    width: 24,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    marginRight: 6,
  },
});

export default function Icons(props: CompProps) {
  const { icon } = props;

  return (
    <View style={styles.container}>
      <Link src={urls[icon]}>
        <Image src={{ uri: iconMap[icon] }} style={styles.icon} />
      </Link>
    </View>
  );
}
