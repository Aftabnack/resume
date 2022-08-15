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
    marginBottom: 2,
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
    I am the owner of our B2B Hotelier portal through which our hoteliers list,
    manage & sell hotel experiences to travellers around the world.{" "}
    <Link src="https://in.goibibo.com/extranet">InGoMMT Portal</Link>
  </>,
  <>
    I have overseen a complete React migration of this portal from it's
    beginnings inside a Django App, into a standalone microservice & then to a{" "}
    <Bold>Pure React WebApp</Bold> powered by ViteJS. This journey was 3.5 years
    in the making. Read about it{" "}
    <Link src="https://medium.com/goibibo-backstage/django-unchained-literally-fa90697dc37e">
      here
    </Link>{" "}
    &{" "}
    <Link src="https://medium.com/goibibo-backstage/modernising-legacy-web-app-51ba952e7630">
      here
    </Link>
  </>,
  <>
    Throughout this migration journey, we have continuously shipped product
    stories driving our business. Our Webapp recently hit the milestone of{" "}
    <Bold>100+ modules/features</Bold>.
  </>,
  <>
    We have been <Bold>early production adopters</Bold> of all the latest
    developments in React like Hooks, Context API, React 18 etc.
  </>,
  <>
    I have setup everything related to this project, starting from Dev/Prod
    build Setup, <Bold>custom Bash-Script to bundle & version legacy code</Bold>
    , CI/CD pipelines, production deployment via Docker &{" "}
    <Bold>zero-downtime deployment via S3</Bold>.
  </>,
  <>
    Have worked on multiple Optimizations to make sure we deliver the fastest
    experience possible. Few metrics include bringing down the load time (fast
    network) from <Bold>~5s to ~200ms</Bold>. And GA average load time went down
    from <Bold>~13s to ~3s</Bold>.
  </>,
  <>
    In a recent PR, I have removed about <Bold>500Kb+ in Gzipped size</Bold> of
    all assets. And had <Bold>touched over 1200+ files</Bold> to complete our
    React Migration & get rid of all legacy code. Most of it was done via a
    custom codemod script written using jscodeshift.
  </>,
  <>
    In my previous company, as part of the internal platform we were building, I
    had created a UI platform over ReactJS. And this gave me{" "}
    <Bold>strong foundation in React, AST, RegExp</Bold> among other things.
  </>,
  <>
    I have contributed to Open Source in the past - Jest, React Boilerplate, CRA
    related packages. And I am a key proponent of using Open Source software.
  </>,
  <>
    I am excellent and debugging issues, often diving into library code to
    understand better. I am extremely proficient in Git. And I write my own
    HTML/CSS. I also have extremely good recollection of code.
  </>,
  "",
  "",
  <>
    I currently lead a team of <Bold>10+ developers</Bold> most of whom I have
    personally mentored/grown over time
  </>,
  <>
    I work with an upwards of <Bold>30+ stakeholders</Bold> & with a BE team of{" "}
    <Bold>50+ developers</Bold> running various projects.
  </>,
  <>
    Our team has maintained an excellent track record of{" "}
    <Bold>always delivering every project on-time</Bold> which we achieve by
    doing proper planning, proactively & vocally calling out any blockers on day
    1 & FE blocker resolution within couple of hours.
  </>,
  <>
    I ensure that even in such a big project, quality is never compromised by
    the way of detailed Code Reviews sometimes{" "}
    <Bold>stretching over few days</Bold>.
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
      <Typography variant="sideHeading" color="#0284c7">
        Key things about me
      </Typography>
      <View style={styles.longLine} />
      {data.map((entry, idx) => {
        if (entry === "") {
          return <View style={styles.lineSpace} key={idx}></View>;
        }
        return (
          <View style={styles.lineContainer} key={idx}>
            <Text>☀</Text>
            <Typography variant="small" style={styles.lineItem}>
              {entry}
            </Typography>
          </View>
        );
      })}
    </View>
  );
}
