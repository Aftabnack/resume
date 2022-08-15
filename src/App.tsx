import Resume from "./resume";
import "./App.css";
import { base } from "./url";

const App = () => {
  return (
    <div className="container">
      <div className="message">
        Made with single code running{" "}
        <a href="https://react-pdf.org" target="_blank">
          React PDF
        </a>{" "}
        on server &{" "}
        <a href="https://necolas.github.io/react-native-web/" target="_blank">
          React Native Web
        </a>{" "}
        on browser ❤️
        <br />
        Download the PDF by{" "}
        <a href={base + "Aftab_Khan_Resume.pdf"} target="_blank">
          clicking here
        </a>
      </div>
      <div className="page">
        <Resume />
      </div>
    </div>
  );
};

export default App;
