
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Fetchsurvey from './user/Fetchsurvey';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />


        <Route path="/survey" element={<Fetchsurvey />} />

        
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>

    </BrowserRouter>
  
  );
}

export default App;
