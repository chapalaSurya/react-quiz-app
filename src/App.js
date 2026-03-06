import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Quiz from "./components/Quiz";
import Result from "./components/Result";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;