import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Task } from "./pages";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <div className="">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
