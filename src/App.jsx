import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./layout/Home";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
