import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/index";
import { Home, Reminder, Reminders, StickyWall } from "./pages";
import ReminderContextProvider from "./feature/reminders/context/ReminderContext";

function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <div className="container">
          <ReminderContextProvider>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/reminders" element={<Reminders />} />
              <Route path="/reminders/:id" element={<Reminder />} />
              <Route path="/stickies" element={<StickyWall />} />
            </Routes>
          </ReminderContextProvider>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
