import { StyleSheet, Link } from "@react-pdf/renderer";
import Section from "../components/Section";
import Typography from "../components/Typography";

const styles = StyleSheet.create({
  sectionGap: { marginBottom: 4 },
});

export default function Links() {
  return (
    <Section title="Blogs & Certifications">
      <Typography variant="small" style={styles.sectionGap}>
        • Blog:{" "}
        <Link src="https://medium.com/goibibo-backstage/django-unchained-literally-fa90697dc37e">
          Django Unchained… Literally…
        </Link>
      </Typography>
      <Typography variant="small" style={styles.sectionGap}>
        • Blog:{" "}
        <Link src="https://medium.com/goibibo-backstage/modernising-legacy-web-app-51ba952e7630">
          Modernising legacy web app
        </Link>
      </Typography>

      <Typography variant="small" style={styles.sectionGap}>
        • Course:{" "}
        <Link src="https://www.udemy.com/certificate/UC-bf07901f-e007-446d-8a99-ebc1bd9ac6a0/">
          Understanding Typescript
        </Link>
      </Typography>
    </Section>
  );
}
