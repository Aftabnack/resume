import { StyleSheet, View } from "react-native-web";
import Resume from "./resume";

const styles = StyleSheet.create({
  container: {
    width: "100vw",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e2e8f0",
  },
  page: {
    width: "803px",
    height: "1132px",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.page}>
        <Resume />
      </View>
    </View>
  );
};

export default App;
