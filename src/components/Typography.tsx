import { Text, StyleSheet } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";
import { CSSProperties } from "react";

type CompProps = {
  variant:
    | "heading"
    | "rightHeading"
    | "subheading"
    | "title"
    | "content"
    | "small";
  color?: CSSProperties["color"];
  style?: Style;
  children: React.ReactNode;
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontFamily: "Mouse Memoirs",
  },
  subheading: {
    fontSize: 12,
    color: "#e8ebed",
    fontFamily: "Lato",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Lato",
  },
  content: {
    fontSize: 12,
    fontFamily: "Lato",
  },
  small: {
    fontSize: 10,
    fontFamily: "Lato",
  },
  rightHeading: {
    fontSize: 18,
    fontFamily: "Mouse Memoirs",
  },
});

export default function Typography(props: CompProps) {
  const { variant, children, color = "white", style = {} } = props;
  return <Text style={[styles[variant], { color }, style]}>{children}</Text>;
}
