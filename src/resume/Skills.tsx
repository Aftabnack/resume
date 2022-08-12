import { Text, View } from "@react-pdf/renderer";
import Section from "../components/Section";
import Typography from "../components/Typography";

export default function Skills() {
  return (
    <Section title="Skills">
      <Typography variant="small">
        JavaScript, ReactJS, Typescript, GraphQL, NodeJS, Docker, Linux,
        Webpack, Babel, AST, NextJS, RegExp, Git
      </Typography>
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
