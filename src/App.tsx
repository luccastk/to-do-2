import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Task } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
