import { View, StyleSheet } from "@react-pdf/renderer";
import Section from "../components/Section";
import Typography from "../components/Typography";

const styles = StyleSheet.create({
  sameCompany: { marginTop: 2 },
  bottomMargin: { marginBottom: 8 },
});

const data = [
  {
    name: "Sir M Visweshwaraya Institute of Technology",
    subtitle: "BE (ECE), 75% agg",
    timeline: "Aug 2011 to June 2015",
  },
  {
    name: "Jawahar Navodaya Vidyalaya - XII (CBSE)",
    subtitle: "Computer Science (PCMC), 93.4% ",
    timeline: "June 2009 to March 2011",
  },
];

export default function Education() {
  return (
    <Section title="Education">
      {data.map((clg) => {
        return (
          <>
            <Typography variant="small">{clg.name}</Typography>
            <Typography variant="small" color="#d4d4d8">
              {clg.subtitle}
            </Typography>
            <Typography variant="small" color="#d4d4d8">
              {clg.timeline}
            </Typography>
            <View style={styles.bottomMargin} />
          </>
        );
      })}
    </Section>
  );
}
