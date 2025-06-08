import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sidebar } from "./components";
import { Home, Task } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Task />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
