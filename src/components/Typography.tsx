import { Text, StyleSheet } from "@react-pdf/renderer";

type CompProps = {
  variant: "heading" | "subheading" | "title" | "content" | "small";
  color?: "black" | "white";
  children: React.ReactNode;
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontFamily: "Mouse Memoirs",
  },
  subheading: {
    fontSize: 14,
    color: "#e8ebed",
    fontFamily: "Lato",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Lato",
  },
  content: {
    fontSize: 14,
    fontFamily: "Lato",
  },
  small: {
    fontSize: 12,
    fontFamily: "Lato",
  },
  black: {
    color: "black",
  },
  white: {
    color: "white",
  },
});

export default function Typography(props: CompProps) {
  const { variant, children, color = "white" } = props;
  return <Text style={[styles[variant], styles[color]]}>{children}</Text>;
}
