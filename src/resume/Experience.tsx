import { View, StyleSheet } from "@react-pdf/renderer";
import Section from "../components/Section";
import Typography from "../components/Typography";

const styles = StyleSheet.create({
  sameCompany: { marginTop: 2 },
  bottomMargin: { marginBottom: 8 },
});

const data = [
  {
    company: "Goibibo (Go-MMT)",
    roles: [
      { title: "Lead Software Engineer", timeline: "Apr 2021 - Present" },
      { title: "Senior Software Engineer II", timeline: "Oct 2019 - Apr 2021" },
      { title: "Senior Software Engineer I", timeline: "Sept 2018 - Oct 2019" },
    ],
  },
  {
    company: "Mu Sigma Inc",
    roles: [{ title: "Full Stack Developer", timeline: "Jul 2015 - Aug 2018" }],
  },
];

export default function Experience() {
  return (
    <Section title="Experience">
      {data.map((exp) => {
        return (
          <>
            <Typography variant="content">{exp.company}</Typography>
            {exp.roles.map((role) => (
              <View style={styles.sameCompany}>
                <Typography variant="small">• {role.title}</Typography>
                <Typography variant="small" color="#d4d4d8">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {role.timeline}
                </Typography>
              </View>
            ))}
            <View style={styles.bottomMargin} />
          </>
        );
      })}
    </Section>
  );
}
