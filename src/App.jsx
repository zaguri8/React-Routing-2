import React, { useState } from "react";

import "./index.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FormPage from "./pages/FormPage";
import SummaryPage from "./pages/SummaryPage";



const App = () => (

  <BrowserRouter>
    <Routes>
      <Route path="form-page" element={<FormPage />} />
      <Route path="summary-page" element={<SummaryPage />} />
    </Routes>
  </BrowserRouter>

)

export default App


