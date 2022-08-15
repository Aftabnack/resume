import Resume from "./resume";
import "./App.css";
import { base } from "./url";

const App = () => {
  return (
    <div className="container">
      <header className="message">
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
      </header>
      <main className="page">
        <Resume />
      </main>
      <footer className="message">
        © 2022, Made by Aftab Khan (
        <a href="https://twitter.com/Aftabnack/" target="_blank">
          @Aftabnack
        </a>
        )
      </footer>
    </div>
  );
};

export default App;
