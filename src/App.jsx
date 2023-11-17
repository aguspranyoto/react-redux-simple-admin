import Leftbar from "./components/leftbar/Leftbar";
import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/rightbar/Rightbar";
import Update from "./components/update/Update";
import "./app.css";

const App = () => {
  return (
    <div className="mx-auto max-w-screen-xl">
      <Navbar />
      <div className="container">
        <Leftbar />
        <Update />
        <Rightbar />
      </div>
    </div>
  );
};

export default App;
