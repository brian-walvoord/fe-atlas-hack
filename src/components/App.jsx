import "../sass/App.scss";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage.jsx";


function App() {
  const [initialState, setInitialState] = useState(null);
  const [loadState, setLoadState] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Homepage 
              initialState={initialState} 
              setInitialState={setInitialState} 
              loadState={loadState} 
              setLoadState={setLoadState} 
            />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
