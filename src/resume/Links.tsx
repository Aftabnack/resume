import { StyleSheet, Link } from "@react-pdf/renderer";
import Section from "../components/Section";
import Typography from "../components/Typography";

const styles = StyleSheet.create({
  sectionGap: { marginBottom: 4 },
});

export default function Links() {
  return (
    <Section title="Blogs">
      <Typography variant="small" style={styles.sectionGap}>
        •{" "}
        <Link src="https://medium.com/goibibo-backstage/django-unchained-literally-fa90697dc37e">
          Django Unchained… Literally…
        </Link>
      </Typography>
      <Typography variant="small" style={styles.sectionGap}>
        •{" "}
        <Link src="https://medium.com/goibibo-backstage/modernising-legacy-web-app-51ba952e7630">
          Modernising legacy web app
        </Link>
      </Typography>
      <Typography variant="small" style={styles.sectionGap}>
        •{" "}
        <Link src="https://medium.com/@aftabnack/react-a-migration-journey-at-scale-cfc111d9dd9b">
          React — A Migration Journey at Scale
        </Link>
      </Typography>
    </Section>
  );
}
