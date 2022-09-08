import { Text, View, StyleSheet } from "@react-pdf/renderer";
import Section from "../components/Section";
import Typography from "../components/Typography";

const styles = StyleSheet.create({
  sectionGap: { marginTop: 8 },
});

export default function Skills() {
  return (
    <Section title="Skills">
      <Typography variant="small">
        JavaScript, ES6, React.js, HTML5, CSS, Typescript, GraphQL, Node.js,
        Next.js, RegExp
      </Typography>
      <View style={styles.sectionGap}>
        <Typography variant="small">
          <Text style={{ textDecoration: "underline" }}>Tooling & Devops</Text>:
          AST, Webpack, ESLint, Babel, Create-React-App, ViteJS, Docker, Linux,
          Git, Bash script, Jenkins
        </Typography>
      </View>
      <View style={styles.sectionGap}>
        <Typography variant="small">
          <Text style={{ textDecoration: "underline" }}>Libraries</Text>:
          ReactDOM, React Hooks, MUI, React Router, React Hook Form, Recharts,
          Firebase, tailwindcss, Sass, Prettier, Jest, Storybook
        </Typography>
      </View>
    </Section>
  );
}
