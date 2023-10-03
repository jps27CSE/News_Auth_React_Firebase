import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="max-w-6xl mx-auto font-poppins">
      <Outlet />
    </div>
  );
}

export default App;
