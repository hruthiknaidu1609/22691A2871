import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Stats from "./pages/stats";
import RedirectPage from "./pages/RedirectPage"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/:shortcode" element={<RedirectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
