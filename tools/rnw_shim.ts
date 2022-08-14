import { createElement } from "react";
import { Image, Text, View, StyleSheet } from "react-native-web";

function Link(props) {
  return createElement(
    "a",
    {
      alt: "",
      href: props.src,
      target: "_blank",
      style: { cursor: "pointer" },
    },
    props.children
  );
}

function Document(props) {
  return createElement(
    View,
    { style: { width: "100%", height: "100%" } },
    props.children
  );
}

function Page(props) {
  return createElement(
    View,
    { style: { width: "803px", height: "1132px", ...props.style } },
    props.children
  );
}

function WrappedImage(props) {
  const { src, style } = props;
  return createElement(Image, {
    source: src.uri,
    style: style,
  });
}

const Font = {
  register: function ({ family, src, fontStyle, fontWeight, fonts }) {
    if (src != null) {
      new FontFace(family, `url(${src})`, {
        style: fontStyle,
        weight: fontWeight,
      })
        .load()
        .then(function (font) {
          document.fonts.add(font);
        })
        .catch(function (e) {
          console.log("Font not loaded " + family);
        });
    } else if (fonts.length) {
      fonts.forEach((font) => {
        new FontFace(family, `url(${font.src})`, {
          style: font.fontStyle,
          weight: font.fontWeight,
        })
          .load()
          .then(function (font) {
            document.fonts.add(font);
          })
          .catch(function (e) {
            console.log("Font not loaded " + family);
          });
      });
    }
  },
  registerHyphenationCallback: () => {},
};

function ptToPx(pt) {
  return (pt * 96) / 72;
}

function recurseStyles(styles) {
  Object.keys(styles).forEach((key) => {
    const value = styles[key];
    if (typeof value === "object") {
      recurseStyles(value);
    } else if (typeof value === "number") {
      if (
        key === "fontSize" ||
        key.startsWith("margin") ||
        key.startsWith("padding") ||
        key === "height" ||
        key === "width"
      ) {
        styles[key] = ptToPx(value);
      }
    }
  });
}

const ScaledStyleSheet = {
  create: function (styles) {
    recurseStyles(styles);
    return StyleSheet.create(styles);
  },
};

export {
  WrappedImage as Image,
  Text,
  View,
  Link,
  Document,
  Page,
  ScaledStyleSheet as StyleSheet,
  Font,
};
