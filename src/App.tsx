import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Reminder, Reminders, StickyWall } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reminders" element={<Reminders />} />
            <Route path="/reminders/:id" element={<Reminder />} />
            <Route path="/stickies" element={<StickyWall />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
