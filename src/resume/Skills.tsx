import { Text, View } from "@react-pdf/renderer";
import Section from "../components/Section";
import Typography from "../components/Typography";

export default function Skills() {
  return (
    <Section title="Skills">
      <Typography variant="small">
        JavaScript, ReactJS, Typescript, GraphQL, NodeJS, NextJS, RegExp
      </Typography>
      <View style={{ marginTop: 8 }}>
        <Typography variant="small">
          <Text style={{ textDecoration: "underline" }}>Tooling & Devops</Text>:
          Webpack, AST, ESLint, Babel, Create-React-App, Docker, Linux, Git,
          Bash Script, Jenkins
        </Typography>
      </View>
      <View style={{ marginTop: 8 }}>
        <Typography variant="small">
          <Text style={{ textDecoration: "underline" }}>Libraries</Text>: React
          DOM, React Hooks, Material UI, React Router, React Hook Form,
          Recharts, Firebase, TailwindCSS, Prettier, Jest, Storybook
        </Typography>
      </View>
    </Section>
  );
}
