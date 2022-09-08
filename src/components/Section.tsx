import { View, StyleSheet } from "@react-pdf/renderer";
import { colorPrimaryDark } from "../resume/constants";
import Typography from "./Typography";

type CompProps = {
  children: React.ReactNode;
  title?: string;
};

const styles = StyleSheet.create({
  title: {
    alignItems: "center",
    marginTop: 2,
    padding: 8,
    backgroundColor: colorPrimaryDark,
  },
  container: { padding: 8 },
});

export default function Section(props: CompProps) {
  const { children, title = "" } = props;

  return (
    <>
      {title && (
        <View style={styles.title}>
          <Typography variant="title">{title}</Typography>
        </View>
      )}
      <View style={styles.container}>{children}</View>
    </>
  );
}
