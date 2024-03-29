import { View, StyleSheet, Link, Text } from "@react-pdf/renderer";
import Typography from "../components/Typography";
import { colorPrimary } from "./constants";

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  longLine: {
    border: "1px solid #0369a1",
    marginBottom: 8,
  },
  groupContainer: {
    marginBottom: 4,
  },
  groupTitle: {
    color: "black",
    textDecoration: "underline",
  },
  summaryText: {
    color: "black",
    marginTop: 2,
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

const groupedData = {
  Engineering: [
    <>
      In the first 3 months at Uber. I have ramped up quickly on the entire FE
      stack which consists of Web Monorepo, Fusion.js, Baseweb & tools like
      Bazel, Arc, Jazelle. I have also completed a full rewrite of an internal
      tool with simple code, zero tech debt & 95%+ code coverage.
    </>,
    <>
      I have setup everything starting from creating an{" "}
      <Bold>In-house custom framework for Hybrid App</Bold> to setting up CI/CD
      pipelines, release deployment via Docker &{" "}
      <Bold>zero-downtime production deployment</Bold> via S3 & CDN.
    </>,
    <>
      I have worked on multiple Optimizations including{" "}
      <Bold>saving 600+ Kb</Bold> from website's minified gzipped resources.
      Bringing down the load time (fast network) from <Bold>~5s to ~800ms</Bold>
      . And GA average load time went down from <Bold>~13s to ~3s</Bold>.
    </>,
    <>
      We have been delivering multiple business requirements & clean user
      experience across our <Bold>100+ modules</Bold> while also making sure to
      maintain <Bold>zero production bugs</Bold> policy.
    </>,
    <>
      In my previous company, as part of the internal platform we were building,
      I had created a UI platform over ReactJS. As part of this I have written
      Webpack Plugins, Webpack Loaders, Codemod scripts, Custom ESLint rules &
      Babel transforms via AST among other things.
    </>,
    <>
      We have been <Bold>early production adopters</Bold> of all the latest
      developments in React like Hooks, Context API, React 18 etc. I have
      contributed to Open Source in the past -{" "}
      <Bold>Jest, React Boilerplate, CRA & related packages</Bold>.
    </>,
  ],
  Management: [
    <>
      I have lead a team of <Bold>10+ Front-end Engineers</Bold>, having grown
      this team from me being the sole developer.
    </>,
    <>
      I have worked with an upwards of <Bold>50+ Backend Engineers</Bold> &
      atleast <Bold>40+ stakeholders</Bold> including teams like QA, Design,
      Analytics, Devops, SecOps, etc.
    </>,
    <>
      I have taken care of running various projects owning planning,
      architecture, UI/UX review, APIs discussion, project execution & delivery.
      I am excellent at context switching, often doing that for about 6-7
      different things on daily basis.
    </>,
    <>
      I am excellent at debugging/solving issues & extremely proficient in Git.
      I also have extremely good recollection of code. All of which is put to
      good use in helping the team.
    </>,
    <>
      I ensure that we follow a very detailed & rigorous Code Review process,
      sometimes <Bold>stretching over few days</Bold> to ensure that the code
      quality is maintained.
    </>,
    <>
      I also excel at communication related to team & projects and believe in
      meticulous documentation.
    </>,
  ],
};

type groupingKeys = keyof typeof groupedData;
const groupKeys = Object.keys(groupedData) as groupingKeys[];

export default function WhyHire() {
  return (
    <View style={styles.container}>
      <Typography variant="rightHeading" color={colorPrimary}>
        Key things about me
      </Typography>
      <View style={styles.longLine} />
      <View style={styles.groupContainer}>
        <Typography variant="title" style={styles.groupTitle}>
          Summary
        </Typography>
        <Typography variant="content" style={styles.summaryText}>
          Senior Software Engineer with <Bold>8+ years of experience</Bold>{" "}
          currently contributing to marketing platform which oversees 5 billion+
          communications in a day. In the past, I have owned Hotelier B2B portal
          at Goibibo, having overseen it's complete migration to React WebApp.
          Prior to that, I had built a UI framework built on top of React as
          part of the Platform team.
        </Typography>
      </View>
      {groupKeys.map((group) => {
        const data = groupedData[group];
        return (
          <View style={styles.groupContainer} key={group}>
            <Typography variant="title" style={styles.groupTitle}>
              {group}
            </Typography>
            {data.map((entry, idx) => {
              return (
                <View style={styles.lineContainer} key={`${group}_${idx}`}>
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
      })}
    </View>
  );
}
