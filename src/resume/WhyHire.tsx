import { View, StyleSheet, Link, Text } from "@react-pdf/renderer";
import Typography from "../components/Typography";

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  longLine: {
    border: "1px solid #0369a1",
    marginBottom: 8,
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 2,
  },
  lineBullet: {
    color: "black",
    marginTop: -1,
  },
  lineItem: {
    color: "black",
    marginLeft: 4,
  },
  lineSpace: {
    marginBottom: 8,
  },
});

type BoldProps = {
  children: React.ReactNode;
};

const Bold = (props: BoldProps) => {
  const { children } = props;
  return <Text style={{ fontWeight: "bold" }}>{children}</Text>;
};

const data = [
  <>
    I am the owner of our B2B Hotelier portal. And I currently lead a team of{" "}
    <Bold>10+ developers</Bold> working on the same.{" "}
    <Link src="https://in.goibibo.com/extranet">InGoMMT Portal</Link>
  </>,
  <>
    I have setup everything related to this project, starting from creating an
    <Bold> In-house custom dev setup for Hybrid app</Bold>, CI/CD pipelines,
    production deployment via Docker & <Bold>zero-downtime deployment</Bold>.
  </>,
  <>
    Have worked on multiple Optimizations including removing 500+ Kb from first
    load. Bringing down the load time (fast network) from{" "}
    <Bold>~5s to ~200ms</Bold>. And GA average load time went down from{" "}
    <Bold>~13s to ~3s</Bold>.
  </>,
  <>
    I have overseen a complete React migration of this portal from it's
    beginnings inside a Django App, into a hybrid app & then to a{" "}
    <Bold>Pure React WebApp</Bold> consisting of 100+ modules. Check out the
    blogs.
  </>,
  <>
    In my previous company, as part of the internal platform we were building, I
    had created a UI platform over ReactJS. And this gave me{" "}
    <Bold>strong foundation in React, AST, RegExp</Bold> among other things.
  </>,
  <>
    Have written <Bold>custom ESLint rules</Bold> for checking for our
    established coding patterns & <Bold>codemod scripts</Bold> for doing bulk
    code changes across the code.
  </>,
  <>
    We have been <Bold>early production adopters</Bold> of all the latest
    developments in React like Hooks, Context API, React 18 etc.
  </>,
  <>
    I have contributed to{" "}
    <Bold>
      Open Source in the past - Jest, React Boilerplate, CRA related packages
    </Bold>
    . And I am a key proponent of using Open Source software.
  </>,
  "",
  "",
  <>
    I work with an upwards of <Bold>30+ stakeholders</Bold> & with a BE team of{" "}
    <Bold>50+ developers</Bold> running various projects, architecting
    solutions, owning project execution & delivery.
  </>,
  <>
    Currently I do a 50%-50% work split between coding & managing the team &
    projects.
  </>,
  <>
    Our team has maintained an excellent track record of{" "}
    <Bold>delivering every project as per the plan</Bold>.
  </>,
  <>
    I am excellent and debugging issues, extremely proficient in Git. And I also
    have extremely good recollection of code.
  </>,
  <>
    I ensure that we follow a very detailed & rigorous Code Review process,
    sometimes <Bold>stretching over few days</Bold> to ensure that the quality
    is maintained.
  </>,
  <>
    I am excellent at context switching, often doing that for about 6-7
    different things on daily basis.
  </>,
  <>
    I am excellent at donning different hats and solution ideation. And I am
    good at creating win-win situations.
  </>,
  <>
    I am an excellent communicator of things and believe in strong
    documentation.
  </>,
];

export default function WhyHire() {
  return (
    <View style={styles.container}>
      <Typography variant="rightHeading" color="#0284c7">
        Key things about me
      </Typography>
      <View style={styles.longLine} />
      {data.map((entry, idx) => {
        if (entry === "") {
          return <View style={styles.lineSpace} key={idx}></View>;
        }
        return (
          <View style={styles.lineContainer} key={idx}>
            <Typography variant="content" style={styles.lineBullet}>
              »
            </Typography>
            <Typography variant="content" style={styles.lineItem}>
              {entry}
            </Typography>
          </View>
        );
      })}
    </View>
  );
}
