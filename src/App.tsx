import React from "react";
import { Sidebar } from "./components";
import { Routes, Route } from "react-router-dom";
import { Contact, Cases } from "./pages";

const App = () => {
  return (
    <>
      <Sidebar />
      <div className="md:ml-56">
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/cases" element={<Cases />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
