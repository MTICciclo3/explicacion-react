import "styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "pages";
import RhodesianInfoPage from "pages/rhodesian";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/rhodesian" element={<RhodesianInfoPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
