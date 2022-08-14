import { View, StyleSheet } from "@react-pdf/renderer";
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
    backgroundColor: "#075985",
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
