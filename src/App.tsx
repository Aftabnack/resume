import { PDFViewer } from "@react-pdf/renderer";
import Resume from "./resume";

const App = () => (
  <PDFViewer style={{ width: "803px", height: "1132px" }} showToolbar={false}>
    <Resume />
  </PDFViewer>
);

export default App;
