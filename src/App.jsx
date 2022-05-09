import "styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "pages";
import RhodesianInfoPage from "pages/rhodesian";
import Layout from "layouts/Layout";
import React from "react";
import BorderCollie from "pages/bordercollie";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/rhodesian" element={<RhodesianInfoPage />}></Route>
            <Route path="/bordercollie" element={<BorderCollie />}></Route>
            <Route path="/" element={<Index />}></Route>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
