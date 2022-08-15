import { Image, Link, View, StyleSheet } from "@react-pdf/renderer";

type CompProps = {
  icon: "phone" | "email" | "linkedin" | "github" | "twitter" | "medium";
};

const iconMap = {
  phone: "https://cdn-icons-png.flaticon.com/128/152/152851.png",
  email: "https://cdn-icons-png.flaticon.com/128/725/725643.png",
  linkedin: "https://cdn-icons-png.flaticon.com/128/1384/1384088.png",
  github: "https://cdn-icons-png.flaticon.com/128/1051/1051326.png",
  twitter: "https://cdn-icons-png.flaticon.com/128/733/733635.png",
  medium: "https://cdn-icons-png.flaticon.com/128/2111/2111543.png",
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
