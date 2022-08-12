import { View } from "@react-pdf/renderer";
import Typography from "./Typography";

type CompProps = {
  children: React.ReactNode;
  title?: string;
};

export default function Section(props: CompProps) {
  const { children, title = "" } = props;

  return (
    <>
      {title && (
        <View
          style={{
            alignItems: "center",
            marginTop: 2,
            padding: 8,
            backgroundColor: "#075985",
          }}
        >
          <Typography variant="title">{title}</Typography>
        </View>
      )}
      <View style={{ padding: 8 }}>{children}</View>
    </>
  );
}
